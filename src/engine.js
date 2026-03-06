/**
 * Slide Engine — handles navigation, transitions, progress, and keyboard controls.
 */

export class SlideEngine {
  constructor(slides) {
    this.slides = slides;
    this.currentIndex = 0;
    this.container = document.getElementById('slide-container');
    this.progressBar = document.getElementById('progress-bar');
    this.slideCounter = document.getElementById('slide-counter');
    this.sectionLabel = document.getElementById('section-label');
    this.clock = document.getElementById('clock');
    this.prevBtn = document.getElementById('prev-btn');
    this.nextBtn = document.getElementById('next-btn');
    this.transitioning = false;

    this.init();
  }

  init() {
    // Render all slides into the DOM
    this.slides.forEach((slide, i) => {
      const el = document.createElement('div');
      el.className = `slide ${slide.layout || 'layout-content'} ${i === 0 ? 'active' : ''}`;
      el.id = `slide-${i}`;
      el.innerHTML = slide.html;
      this.container.appendChild(el);
    });

    // Bind navigation
    this.homeBtn = document.getElementById('home-btn');
    this.endBtn = document.getElementById('end-btn');
    this.prevBtn = document.getElementById('prev-btn');
    this.nextBtn = document.getElementById('next-btn');

    if (this.homeBtn) this.homeBtn.addEventListener('click', () => this.goTo(0, 'backward'));
    if (this.endBtn) this.endBtn.addEventListener('click', () => this.goTo(this.slides.length - 1, 'forward'));
    this.prevBtn.addEventListener('click', () => this.prev());
    this.nextBtn.addEventListener('click', () => this.next());

    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          this.next();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          this.prev();
          break;
        case 'Home':
          e.preventDefault();
          this.goTo(0);
          break;
        case 'End':
          e.preventDefault();
          this.goTo(this.slides.length - 1);
          break;
      }
    });

    // Jump Modal logic
    this.jumpBtn = document.getElementById('jump-btn');
    this.jumpModal = document.getElementById('jump-modal');
    this.jumpInput = document.getElementById('jump-input');
    this.jumpSubmit = document.getElementById('jump-submit');
    this.jumpMaxSlide = document.getElementById('jump-max-slide');

    if (this.jumpMaxSlide) {
      this.jumpMaxSlide.textContent = this.slides.length;
    }

    if (this.jumpBtn && this.jumpModal) {
      this.jumpBtn.addEventListener('click', () => this.openJumpModal());

      // Close on overlay click
      this.jumpModal.addEventListener('click', (e) => {
        if (e.target === this.jumpModal) this.closeJumpModal();
      });

      this.jumpSubmit.addEventListener('click', () => this.handleJumpSubmit());

      this.jumpInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.handleJumpSubmit();
        } else if (e.key === 'Escape') {
          this.closeJumpModal();
        }
      });
    }

    // Touch swipe support
    let touchStartX = 0;
    this.container.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    this.container.addEventListener('touchend', (e) => {
      // Don't swipe if modal is open
      if (this.jumpModal && this.jumpModal.classList.contains('open')) return;

      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? this.next() : this.prev();
      }
    }, { passive: true });

    // Handle Escape key for modal globally
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.jumpModal && this.jumpModal.classList.contains('open')) {
        this.closeJumpModal();
      }
    });

    // Update UI
    this.updateUI();
    this.startClock();
  }

  openJumpModal() {
    this.jumpInput.value = '';
    this.jumpModal.classList.add('open');
    setTimeout(() => this.jumpInput.focus(), 100);
  }

  closeJumpModal() {
    this.jumpModal.classList.remove('open');
    this.jumpInput.blur();
  }

  handleJumpSubmit() {
    const val = parseInt(this.jumpInput.value, 10);
    if (!isNaN(val) && val >= 1 && val <= this.slides.length) {
      // Convert to 0-indexed
      const targetIndex = val - 1;

      // Determine direction based on current slide
      const direction = targetIndex > this.currentIndex ? 'forward' : 'backward';

      this.closeJumpModal();
      this.goTo(targetIndex, direction);
    } else {
      // Invalid input feedback
      this.jumpInput.style.borderColor = 'var(--accent-red, #c45050)';
      setTimeout(() => {
        this.jumpInput.style.borderColor = '';
      }, 500);
    }
  }

  next() {
    if (this.transitioning || this.currentIndex >= this.slides.length - 1) return;
    this.goTo(this.currentIndex + 1, 'forward');
  }

  prev() {
    if (this.transitioning || this.currentIndex <= 0) return;
    this.goTo(this.currentIndex - 1, 'backward');
  }

  goTo(index, direction = 'forward') {
    if (index === this.currentIndex || index < 0 || index >= this.slides.length) return;

    this.transitioning = true;
    const currentEl = document.getElementById(`slide-${this.currentIndex}`);
    const nextEl = document.getElementById(`slide-${index}`);

    // Set exit direction
    currentEl.classList.remove('active');
    const exitClass = direction === 'forward' ? 'exit-left' : 'exit-right';
    currentEl.classList.add(exitClass);

    // Prepare enter
    nextEl.style.transform = direction === 'forward' ? 'translateX(60px)' : 'translateX(-60px)';
    nextEl.style.opacity = '0';

    // Force reflow
    void nextEl.offsetWidth;

    // Animate in
    nextEl.classList.add('active');
    nextEl.style.transform = '';
    nextEl.style.opacity = '';

    // Clean up
    setTimeout(() => {
      currentEl.classList.remove(exitClass);
      currentEl.style.transform = '';
      currentEl.style.opacity = '';
      this.transitioning = false;
    }, 500);

    this.currentIndex = index;
    this.updateUI();

    // Trigger any onEnter callback
    const slide = this.slides[index];
    if (slide.onEnter) {
      setTimeout(() => slide.onEnter(), 100);
    }
  }

  updateUI() {
    const total = this.slides.length;
    const progress = ((this.currentIndex + 1) / total) * 100;
    this.progressBar.style.width = `${progress}%`;
    this.slideCounter.textContent = `${this.currentIndex + 1} / ${total}`;
    this.sectionLabel.textContent = this.slides[this.currentIndex].section || '';
  }

  startClock() {
    const updateClock = () => {
      const now = new Date();
      let h = now.getHours();
      const m = now.getMinutes().toString().padStart(2, '0');
      const ampm = h >= 12 ? 'PM' : 'AM';
      h = h % 12 || 12;
      this.clock.textContent = `${h}:${m} ${ampm}`;
    };
    updateClock();
    setInterval(updateClock, 10000);
  }
}

/**
 * Interactive Games for the Prompt Engineering Presentation
 */

// ═══════════════════════════════════════════════════════════════
// GAME 1: Prompt Roulette — Spin to pick a topic
// ═══════════════════════════════════════════════════════════════

const ROULETTE_TOPICS = [
    '📧 Write a professional email',
    '📊 Summarize a dataset',
    '🎯 Create a marketing tagline',
    '💻 Debug a code snippet',
    '📋 Write meeting minutes',
    '🎨 Describe an image for AI art',
    '📝 Draft a project proposal',
    '🌍 Translate a paragraph',
    '🤖 Explain AI to a 5-year-old',
    '📈 Analyze a sales trend',
    '✍️ Write a product description',
    '🎓 Create quiz questions',
];

const ROULETTE_COLORS = [
    '#1a1f4b', '#c17650', '#7c9a72', '#c9a24d',
    '#6b7fa3', '#2d3561', '#b8654a', '#8dae7d',
    '#d4b065', '#5a7090', '#a0563d', '#6b8c5e',
];

export function initSpinner() {
    const canvas = document.getElementById('spinner-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = 320;
    canvas.width = size;
    canvas.height = size;

    let rotation = 0;
    let spinning = false;
    const sliceAngle = (2 * Math.PI) / ROULETTE_TOPICS.length;

    function draw(rot) {
        ctx.clearRect(0, 0, size, size);
        const cx = size / 2;
        const cy = size / 2;
        const r = size / 2 - 8;

        ROULETTE_TOPICS.forEach((topic, i) => {
            const start = i * sliceAngle + rot;
            const end = (i + 1) * sliceAngle + rot;

            // Slice
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.arc(cx, cy, r, start, end);
            ctx.closePath();
            ctx.fillStyle = ROULETTE_COLORS[i % ROULETTE_COLORS.length];
            ctx.globalAlpha = 0.25;
            ctx.fill();
            ctx.globalAlpha = 1;

            // Border
            ctx.strokeStyle = 'rgba(255,255,255,0.1)';
            ctx.lineWidth = 1;
            ctx.stroke();

            // Emoji label
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(start + sliceAngle / 2);
            ctx.fillStyle = '#f0f4ff';
            ctx.font = '16px Inter';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            ctx.fillText(topic.slice(0, 2), r * 0.55, 0);
            ctx.restore();
        });

        // Center circle
        ctx.beginPath();
        ctx.arc(cx, cy, 28, 0, 2 * Math.PI);
        ctx.fillStyle = '#0a0e1a';
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.15)';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Arrow indicator at top
        ctx.beginPath();
        ctx.moveTo(cx - 10, 6);
        ctx.lineTo(cx + 10, 6);
        ctx.lineTo(cx, 22);
        ctx.closePath();
        ctx.fillStyle = '#ffd740';
        ctx.fill();
    }

    draw(0);

    const spinBtn = document.getElementById('spin-btn');
    const resultEl = document.getElementById('spinner-result');

    if (spinBtn) {
        spinBtn.addEventListener('click', () => {
            if (spinning) return;
            spinning = true;
            resultEl.textContent = '';
            spinBtn.disabled = true;

            const totalRotation = rotation + (Math.PI * 2 * (5 + Math.random() * 5));
            const duration = 4000;
            const start = performance.now();
            const startRot = rotation;

            function animate(time) {
                const elapsed = time - start;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out quart
                const eased = 1 - Math.pow(1 - progress, 4);
                const currentRot = startRot + (totalRotation - startRot) * eased;

                draw(currentRot);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    rotation = currentRot % (Math.PI * 2);
                    spinning = false;
                    spinBtn.disabled = false;

                    // Calculate which slice is at top
                    const normalizedAngle = (2 * Math.PI - (rotation % (2 * Math.PI))) % (2 * Math.PI);
                    const index = Math.floor(normalizedAngle / sliceAngle) % ROULETTE_TOPICS.length;
                    resultEl.textContent = ROULETTE_TOPICS[index];
                    resultEl.style.animation = 'scaleIn 0.4s ease forwards';
                }
            }

            requestAnimationFrame(animate);
        });
    }
}

// ═══════════════════════════════════════════════════════════════
// GAME 2: Build the Perfect Prompt
// ═══════════════════════════════════════════════════════════════

const BAD_PROMPTS = [
    { bad: "Tell me about marketing.", improved: "Act as a senior marketing strategist. Create a 3-point social media campaign plan for a B2B SaaS startup targeting CTOs. Format as a numbered list with estimated reach metrics." },
    { bad: "Write code.", improved: "As a Python developer, write a function that takes a list of dictionaries and returns the top 3 items sorted by the 'revenue' key in descending order. Include error handling and docstrings." },
    { bad: "Help with my resume.", improved: "Act as an HR consultant. Review my current job description: 'Did sales stuff at company.' Rewrite it using the STAR method, quantifying achievements. Output as 3 bullet points." },
];

let currentBadPrompt = 0;

export function initPromptBuilder() {
    const badPromptEl = document.getElementById('bad-prompt-text');
    const revealBtn = document.getElementById('reveal-answer-btn');
    const answerEl = document.getElementById('improved-answer');

    if (!badPromptEl) return;

    badPromptEl.textContent = BAD_PROMPTS[currentBadPrompt].bad;

    if (revealBtn) {
        revealBtn.addEventListener('click', () => {
            answerEl.textContent = BAD_PROMPTS[currentBadPrompt].improved;
            answerEl.style.display = 'block';
            answerEl.style.animation = 'fadeUp 0.5s ease forwards';
        });
    }

    const nextPromptBtn = document.getElementById('next-bad-prompt');
    if (nextPromptBtn) {
        nextPromptBtn.addEventListener('click', () => {
            currentBadPrompt = (currentBadPrompt + 1) % BAD_PROMPTS.length;
            badPromptEl.textContent = BAD_PROMPTS[currentBadPrompt].bad;
            if (answerEl) {
                answerEl.style.display = 'none';
            }
        });
    }
}

// ═══════════════════════════════════════════════════════════════
// GAME 3: Prompt Battle — Voting
// ═══════════════════════════════════════════════════════════════

let teamAVotes = 0;
let teamBVotes = 0;

export function initVoting() {
    const teamABtn = document.getElementById('vote-team-a');
    const teamBBtn = document.getElementById('vote-team-b');
    const teamACount = document.getElementById('count-a');
    const teamBCount = document.getElementById('count-b');
    const resetBtn = document.getElementById('reset-votes');

    if (!teamABtn) return;

    teamABtn.addEventListener('click', () => {
        teamAVotes++;
        teamACount.textContent = teamAVotes;
        teamACount.style.animation = 'none';
        void teamACount.offsetWidth;
        teamACount.style.animation = 'scaleIn 0.3s ease';
    });

    teamBBtn.addEventListener('click', () => {
        teamBVotes++;
        teamBCount.textContent = teamBVotes;
        teamBCount.style.animation = 'none';
        void teamBCount.offsetWidth;
        teamBCount.style.animation = 'scaleIn 0.3s ease';
    });

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            teamAVotes = 0;
            teamBVotes = 0;
            teamACount.textContent = '0';
            teamBCount.textContent = '0';
        });
    }
}

// ═══════════════════════════════════════════════════════════════
// Countdown Timer (reusable)
// ═══════════════════════════════════════════════════════════════

let timerInterval = null;

export function initTimer() {
    const display = document.getElementById('timer-display');
    const startBtn = document.getElementById('timer-start');
    const resetBtn = document.getElementById('timer-reset');

    if (!display || !startBtn) return;

    let seconds = 60;
    let running = false;

    function updateDisplay() {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        display.textContent = `${m}:${s.toString().padStart(2, '0')}`;
        display.className = 'countdown' + (seconds <= 10 ? ' danger' : seconds <= 20 ? ' warning' : '');
    }

    updateDisplay();

    startBtn.addEventListener('click', () => {
        if (running) {
            clearInterval(timerInterval);
            running = false;
            startBtn.textContent = '▶ Resume';
            return;
        }

        running = true;
        startBtn.textContent = '⏸ Pause';

        timerInterval = setInterval(() => {
            if (seconds > 0) {
                seconds--;
                updateDisplay();
            } else {
                clearInterval(timerInterval);
                running = false;
                startBtn.textContent = '▶ Start';
                display.textContent = "⏰ TIME'S UP!";
                display.className = 'countdown danger';
            }
        }, 1000);
    });

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            clearInterval(timerInterval);
            running = false;
            seconds = 60;
            startBtn.textContent = '▶ Start';
            updateDisplay();
        });
    }
}

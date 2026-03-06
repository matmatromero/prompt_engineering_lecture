/**
 * Main entry — Prompt Engineering Mastery Presentation
 */
import './style.css';
import { SlideEngine } from './src/engine.js';
import { slidesPart1 } from './src/slides-part1.js';
import { slidesPart2 } from './src/slides-part2.js';

// Combine all slides
const allSlides = [...slidesPart1, ...slidesPart2];

// Add floating particles
function createParticles() {
    const bg = document.getElementById('particles-bg');
    for (let i = 0; i < 40; i++) {
        const dot = document.createElement('div');
        const size = Math.random() * 3 + 1;
        dot.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: rgba(26, 31, 75,${Math.random() * 0.04 + 0.02});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: float ${Math.random() * 8 + 6}s ease-in-out infinite;
      animation-delay: ${Math.random() * 5}s;
    `;
        bg.appendChild(dot);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    new SlideEngine(allSlides);
});

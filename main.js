/* ============================================================
   PORTFOLIO — main.js
   Features: Particles, Typewriter, Counter Anim, Scroll Spy,
             Reveal on Scroll, Cursor Glow, Mobile Nav
   ============================================================ */
import './style.css';

/* ========================
   PARTICLES CANVAS
   ======================== */
const canvas  = document.getElementById('particles-canvas');
const ctx     = canvas.getContext('2d');
let particles = [];
let W, H;

function resizeCanvas() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x  = randomRange(0, W);
    this.y  = randomRange(0, H);
    this.r  = randomRange(0.5, 2);
    this.dx = randomRange(-0.15, 0.15);
    this.dy = randomRange(-0.25, -0.05);
    this.alpha = randomRange(0.2, 0.7);
    this.color = Math.random() > 0.5 ? '6, 182, 212' : '139, 92, 246';
  }
  update() {
    this.x    += this.dx;
    this.y    += this.dy;
    this.alpha -= 0.0008;
    if (this.y < -5 || this.alpha <= 0) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
    ctx.fill();
  }
}

const PARTICLE_COUNT = 90;
for (let i = 0; i < PARTICLE_COUNT; i++) {
  const p = new Particle();
  p.y = randomRange(0, H); // seed throughout screen
  particles.push(p);
}

function animateParticles() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* ========================
   CURSOR GLOW
   ======================== */
const cursorGlow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', e => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top  = `${e.clientY}px`;
});

/* ========================
   HEADER SCROLL SHADOW
   ======================== */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ========================
   MOBILE NAVIGATION
   ======================== */
const menuToggle = document.getElementById('menu-toggle');
const navLinks   = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ========================
   ACTIVE NAV LINK (SCROLL SPY)
   ======================== */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-link');

const spyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { root: null, rootMargin: '-40% 0px -55% 0px', threshold: 0 });

sections.forEach(s => spyObserver.observe(s));

/* ========================
   SCROLL REVEAL
   ======================== */
const revealEls = document.querySelectorAll('.reveal, .reveal-child');

const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger children by index within parent
      const siblings = [...entry.target.parentElement.children].filter(
        el => el.classList.contains('reveal-child')
      );
      const delay = entry.target.classList.contains('reveal-child')
        ? siblings.indexOf(entry.target) * 120
        : 0;

      setTimeout(() => {
        entry.target.classList.add('active');
      }, delay);
      obs.unobserve(entry.target);
    }
  });
}, { root: null, rootMargin: '0px 0px -80px 0px', threshold: 0.08 });

revealEls.forEach(el => revealObserver.observe(el));

/* ========================
   TYPEWRITER EFFECT
   ======================== */
const roles = [
  'Intelligent AI Systems.',
  'RAG & LLM Pipelines.',
  'Post-Quantum Security Tools.',
  'Salesforce Automation.',
  'Edge AI on Embedded Devices.',
  'Robust Backend APIs.',
];

const roleDynamic = document.getElementById('role-dynamic');
if (roleDynamic) {
  // Add blinking cursor
  const cursor = document.createElement('span');
  cursor.className = 'role-cursor';
  roleDynamic.parentElement.appendChild(cursor);

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const SPEED_TYPE   = 55;
  const SPEED_DELETE = 30;
  const PAUSE_END    = 2000;
  const PAUSE_START  = 400;

  function typeWriter() {
    const currentRole = roles[roleIdx];

    if (!isDeleting) {
      roleDynamic.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      if (charIdx === currentRole.length) {
        isDeleting = true;
        setTimeout(typeWriter, PAUSE_END);
        return;
      }
    } else {
      roleDynamic.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        setTimeout(typeWriter, PAUSE_START);
        return;
      }
    }
    setTimeout(typeWriter, isDeleting ? SPEED_DELETE : SPEED_TYPE);
  }
  setTimeout(typeWriter, 800);
}

/* ========================
   COUNTER ANIMATION
   ======================== */
const statNums = document.querySelectorAll('.stat-num[data-target]');

function animateCounter(el) {
  const target   = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const step     = 16;
  const steps    = Math.ceil(duration / step);
  let   current  = 0;
  const increment = target / steps;

  const timer = setInterval(() => {
    current = Math.min(current + increment, target);
    el.textContent = Math.floor(current);
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    }
  }, step);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statNums.forEach(el => counterObserver.observe(el));

/* ========================
   TAG HOVER RIPPLE
   ======================== */
document.querySelectorAll('.tag, .stack-tag, .tag-small').forEach(tag => {
  tag.addEventListener('click', e => {
    const rect   = tag.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(6, 182, 212, 0.25);
      width: 80px; height: 80px;
      left: ${e.clientX - rect.left - 40}px;
      top:  ${e.clientY - rect.top  - 40}px;
      transform: scale(0);
      animation: ripple 0.5s ease-out forwards;
      pointer-events: none;
    `;
    tag.style.position = 'relative';
    tag.style.overflow = 'hidden';
    tag.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// Inject ripple keyframes dynamically once
if (!document.getElementById('ripple-style')) {
  const style = document.createElement('style');
  style.id = 'ripple-style';
  style.textContent = `@keyframes ripple { to { transform: scale(2.5); opacity: 0; } }`;
  document.head.appendChild(style);
}

/* ========================
   SMOOTH SCROLL OFFSET FIX
   (for browsers that don't support scroll-padding-top)
   ======================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offsetTop = target.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  });
});

/* ═══════════════════════════════════════════════
   BI PORTFOLIO – JAVASCRIPT
   ═══════════════════════════════════════════════ */

// ── Navbar scroll effect ──────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Hamburger menu ────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Scroll reveal ─────────────────────────────────
function addReveal() {
  document.querySelectorAll(
    '.project-card, .skill-group, .value-card, .about-text, .about-cards, .contact-item, .section-label, .section-title, .badge-row'
  ).forEach(el => el.classList.add('reveal'));
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

// ── Skill bar animation ───────────────────────────
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.bar-fill').forEach(bar => {
          const targetWidth = bar.getAttribute('data-width') + '%';
          setTimeout(() => { bar.style.width = targetWidth; }, 200);
        });
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

// ── Project filter ────────────────────────────────
const filterBtns  = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    projectCards.forEach(card => {
      const tags = card.getAttribute('data-tags') || '';
      if (filter === 'all' || tags.includes(filter)) {
        card.classList.remove('hidden');
        card.style.animation = 'fadeIn 0.4s ease forwards';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ── Animated counter ──────────────────────────────
function animateCounter(el, target, suffix) {
  let start = 0;
  const duration = 1800;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const raw = el.textContent.trim();
      const num = parseFloat(raw.replace(/[^0-9.]/g, ''));
      const suffix = raw.includes('%') ? '%' : raw.includes('+') ? '+' : '';
      if (!isNaN(num) && num > 0) animateCounter(el, num, suffix);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

// ── Contact form ──────────────────────────────────
function handleSubmit(event) {
  event.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.textContent = '✓ Message Sent!';
  btn.style.background = '#16a34a';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.style.background = '';
    btn.disabled = false;
    event.target.reset();
  }, 3500);
}

// ── Active nav link ───────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinkEls.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + id
          ? 'white' : 'rgba(255,255,255,0.75)';
      });
    }
  });
}, { threshold: 0.4 });

// ── Init ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  addReveal();
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  document.querySelectorAll('.skill-group').forEach(el => skillObserver.observe(el));
  document.querySelectorAll('.stat-number').forEach(el => counterObserver.observe(el));
  sections.forEach(s => sectionObserver.observe(s));
});

// ── CSS keyframes injected for filter animation ───
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

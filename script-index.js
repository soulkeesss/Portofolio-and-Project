// ── THEME TOGGLE ──
const themeBtn = document.getElementById('themeBtn');
let dark = true;
themeBtn.addEventListener('click', () => {
  dark = !dark;
  document.body.setAttribute('data-theme', dark ? 'dark' : 'light');
  themeBtn.textContent = dark ? '☀️' : '🌙';
});

// ── NAV ACTIVE LINK ON SCROLL ─
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 180) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll('.reveal');
const observer  = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      const siblings = [...e.target.parentElement.children].filter(c => c.classList.contains('reveal'));
      const idx = siblings.indexOf(e.target);
      setTimeout(() => e.target.classList.add('visible'), idx * 100);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

// ── SHOW MORE ──
document.getElementById('showMoreBtn').addEventListener('click', function () {
  const hiddenCards = document.querySelectorAll('.portfolio-card.hidden');

  hiddenCards.forEach((card, i) => {
    card.classList.remove('hidden');
    // stagger the fade-in animation
    card.style.animationDelay = (i * 60) + 'ms';
    card.classList.add('fade-in');
  });

  // Hide the button once all cards are shown
  this.classList.add('hidden-btn');
  document.getElementById('showLessBtn').classList.remove('hidden-btn');
});

document.getElementById('showLessBtn').addEventListener('click', function () {
  const showCard = document.querySelectorAll('.portfolio-card.fade-in');

  showCard.forEach((card, i) => {
    card.classList.remove('fade-in');
    // stagger the fade-in animation
    card.style.animationDelay = (i * 60) + 'ms';
    card.classList.add('hidden');
  });

  // Hide the button once all cards are shown
  this.classList.add('hidden-btn');
  document.getElementById('showMoreBtn').classList.remove('hidden-btn');
});

// ── CAPTCHA TOGGLE ──
document.getElementById('captchaCheck').addEventListener('click', function(){
  this.classList.toggle('checked');
});

// ── SUBMIT ──
document.getElementById('submitBtn').addEventListener('click', function(){
  const name  = document.querySelector('input[placeholder="Enter your name"]').value.trim();
  const email = document.querySelector('input[placeholder="Enter your email"]').value.trim();
  const msg   = document.querySelector('.form-textarea').value.trim();
  if (!name || !email || !msg) { alert('Please fill in all fields.'); return; }
  alert('Thank you, ' + name + '! Your message has been sent.');
  document.querySelector('input[placeholder="Enter your name"]').value  = '';
  document.querySelector('input[placeholder="Enter your email"]').value = '';
  document.querySelector('.form-textarea').value = '';
  document.getElementById('captchaCheck').classList.remove('checked');
});

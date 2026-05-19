// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Navbar solid on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.style.background = window.scrollY > 60
        ? 'rgba(10, 22, 40, 0.99)'
        : 'rgba(10, 22, 40, 0.96)';
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-card, .highlight-card, .athletics-card, .edu-card, .stat').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

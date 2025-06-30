/* -----------------------------------
   Tech & Tinker Consulting
   Main JavaScript
----------------------------------- */

// Mobile menu toggle
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Show menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Hide menu
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// Close menu when a nav link is clicked (mobile)
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link =>
  link.addEventListener('click', () => navMenu.classList.remove('show-menu'))
);

// Update footer year automatically
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
} 
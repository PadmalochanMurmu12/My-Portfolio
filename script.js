// ========================================
// HAMBURGER MENU FUNCTIONALITY
// ========================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// Toggle hamburger menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  
  // Update aria-expanded for accessibility
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !isExpanded);
});

// Close menu when clicking on a nav link
navItems.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  }

});

 // Dynamically set resume link from config
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM loaded. Looking for resume link...");
  const resumeLink = document.getElementById('resume-link');
  
  if (!resumeLink) {
    console.error("Bug: Could not find the element with id 'resume-link'");
    return;
  }

  if (typeof CONFIG === 'undefined') {
    console.error("Bug: CONFIG is not defined. Did config.js load properly?");
    return;
  }

  if (!CONFIG.RESUME_URL) {
    console.error("Bug: CONFIG.RESUME_URL is empty or missing.");
    return;
  }

  // If we made it here, inject the URL
  resumeLink.href = CONFIG.RESUME_URL;
  console.log("Success: Resume link attached!", resumeLink.href);
});
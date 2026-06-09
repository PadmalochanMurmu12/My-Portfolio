// ========================================
// THEME TOGGLE LOGIC (WITH LOCAL STORAGE)
// ========================================
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check local storage for saved theme, default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// ========================================
// HAMBURGER MENU LOGIC (MOBILE)
// ========================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !isExpanded);
});

// Close menu when clicking a link
navItems.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Close menu if clicking outside of it
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('active')) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

// ========================================
// ACCORDION LOGIC
// ========================================
const accordionItems = document.querySelectorAll('.acc-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.acc-header');
  
  header.addEventListener('click', () => {
    const isExpanded = item.getAttribute('aria-expanded') === 'true';
    
    // Close all other accordions first
    accordionItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.setAttribute('aria-expanded', 'false');
      }
    });

    // Toggle current accordion state
    item.setAttribute('aria-expanded', !isExpanded);
  });
});

// ========================================
// PROGRESSIVE DISCLOSURE (VIEW ALL PROJECTS)
// ========================================
const viewAllButtons = document.querySelectorAll('.view-all-btn');

viewAllButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    // Find the target grid using the data attribute
    const targetId = e.target.getAttribute('data-target');
    const targetGrid = document.getElementById(targetId);
    
    // Toggle the collapsed state
    targetGrid.classList.toggle('collapsed');
    
    // Update button text
    if (targetGrid.classList.contains('collapsed')) {
      e.target.textContent = 'View All Projects +';
    } else {
      e.target.textContent = 'Show Less -';
    }
  });
});

// ========================================
// NATIVE HTML5 MODAL LOGIC
// ========================================
const readMoreBtns = document.querySelectorAll('.read-more-btn');
const closeBtns = document.querySelectorAll('.close-modal');
const modals = document.querySelectorAll('.project-modal');

// Open the corresponding modal
readMoreBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal(); // Using the native HTML5 API
    }
  });
});

// Close modal when clicking the 'X'
closeBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const modal = e.target.closest('.project-modal');
    if (modal) {
      modal.close();
    }
  });
});

// Close modal when clicking completely outside of it (on the backdrop)
modals.forEach(modal => {
  modal.addEventListener('click', (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close();
    }
  });
});

// ========================================
// AUTO-UPDATE COPYRIGHT YEAR
// ========================================
document.getElementById('current-year').textContent = new Date().getFullYear();
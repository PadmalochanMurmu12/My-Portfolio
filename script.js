/**
 * Padmalochan Murmu - Portfolio Script
 * Modern Theme Engine, Micro-interactions, Modals & Accordions
 */

document.addEventListener('DOMContentLoaded', () => {

  // ========================================
  // 1. THEME TOGGLE LOGIC (LIGHT / DARK)
  // ========================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  const htmlElement = document.documentElement;

  function applyTheme(theme) {
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
      htmlElement.setAttribute('data-theme', 'dark');
      if (sunIcon && moonIcon) {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
      }
    } else {
      htmlElement.classList.remove('dark');
      htmlElement.setAttribute('data-theme', 'light');
      if (sunIcon && moonIcon) {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
      }
    }
    localStorage.setItem('theme', theme);
  }

  // Initial Theme Check from Local Storage (defaults to 'dark')
  const savedTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  // ========================================
  // 2. MOBILE MENU (HAMBURGER DRAWER)
  // ========================================
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (hamburger && mobileNav) {
    function toggleMobileMenu() {
      const isOpen = hamburger.classList.toggle('active');
      mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    }

    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });

    // Close on mobile link click
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (mobileNav.classList.contains('open') && !mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ========================================
  // 3. WATERMELON UI MOUSE-TRACKING SPOTLIGHT
  // ========================================
  const spotlightCards = document.querySelectorAll('.spotlight-card');
  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // ========================================
  // 4. ACCORDION SYSTEM (SKILLS)
  // ========================================
  const accordionItems = document.querySelectorAll('.acc-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.acc-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isExpanded = item.getAttribute('aria-expanded') === 'true';

      // Close other accordions for clean single-panel view
      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.setAttribute('aria-expanded', 'false');
          const otherHeader = otherItem.querySelector('.acc-header');
          if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      item.setAttribute('aria-expanded', !isExpanded);
      header.setAttribute('aria-expanded', !isExpanded);
    });
  });

  // ========================================
  // 5. PROGRESSIVE DISCLOSURE (VIEW ALL PROJECTS)
  // ========================================
  const viewAllButtons = document.querySelectorAll('.view-all-btn');

  viewAllButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetId = e.currentTarget.getAttribute('data-target');
      const targetGrid = document.getElementById(targetId);

      if (targetGrid) {
        targetGrid.classList.toggle('collapsed');
        const isCollapsed = targetGrid.classList.contains('collapsed');
        e.currentTarget.textContent = isCollapsed ? 'View All Projects +' : 'Show Less -';
      }
    });
  });

  // ========================================
  // 6. NATIVE HTML5 DIALOG MODAL SYSTEM
  // ========================================
  const readMoreBtns = document.querySelectorAll('.read-more-btn');
  const closeBtns = document.querySelectorAll('.close-modal');
  const modals = document.querySelectorAll('.project-modal');

  // Open modal
  readMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal && typeof modal.showModal === 'function') {
        modal.showModal();
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close button inside modal
  closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.project-modal');
      if (modal) {
        modal.close();
        document.body.style.overflow = '';
      }
    });
  });

  // Click on modal backdrop to close
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      const dialogRect = modal.getBoundingClientRect();
      const isInDialog = (
        e.clientX >= dialogRect.left &&
        e.clientX <= dialogRect.right &&
        e.clientY >= dialogRect.top &&
        e.clientY <= dialogRect.bottom
      );
      if (!isInDialog) {
        modal.close();
        document.body.style.overflow = '';
      }
    });

    modal.addEventListener('close', () => {
      document.body.style.overflow = '';
    });
  });

  // ========================================
  // 7. ACTIVE NAVIGATION SCROLLSPY
  // ========================================
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-links .nav-link');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        desktopNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // ========================================
  // 8. AUTO-UPDATE COPYRIGHT YEAR
  // ========================================
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

});

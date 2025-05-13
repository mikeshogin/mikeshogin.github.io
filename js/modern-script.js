// Modern DocHub JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const navList = document.querySelector('.nav-list');
  
  if (mobileMenuBtn && sidebar && overlay && navList) {
    mobileMenuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('show');
      overlay.classList.toggle('show');
      navList.classList.toggle('show');
    });
    
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('show');
      overlay.classList.remove('show');
      navList.classList.remove('show');
    });
  }
  
  // Dark mode toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  
  if (darkModeToggle) {
    const darkModeIcon = darkModeToggle.querySelector('i');
    
    // Check for saved theme preference or respect OS preference
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
      enableDarkMode(darkModeIcon);
    }
    
    darkModeToggle.addEventListener('click', () => {
      if (body.classList.contains('dark-theme')) {
        disableDarkMode(darkModeIcon);
      } else {
        enableDarkMode(darkModeIcon);
      }
    });
  }
  
  // Accordion functionality
  const accordionButtons = document.querySelectorAll('.accordion-button');
  
  if (accordionButtons.length > 0) {
    accordionButtons.forEach(button => {
      button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        
        // Close all accordions
        accordionButtons.forEach(btn => {
          btn.setAttribute('aria-expanded', 'false');
          const targetId = btn.getAttribute('data-bs-target').substring(1);
          const target = document.getElementById(targetId);
          if (target) {
            target.style.display = 'none';
          }
        });
        
        // Toggle current accordion
        if (!expanded) {
          button.setAttribute('aria-expanded', 'true');
          const targetId = button.getAttribute('data-bs-target').substring(1);
          const target = document.getElementById(targetId);
          if (target) {
            target.style.display = 'block';
          }
        }
      });
    });
    
    // Initialize the first accordion as open
    const firstAccordionButton = accordionButtons[0];
    if (firstAccordionButton) {
      firstAccordionButton.setAttribute('aria-expanded', 'true');
      const targetId = firstAccordionButton.getAttribute('data-bs-target').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.style.display = 'block';
      }
    }
  }
  
  // Search functionality
  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    searchInput.addEventListener('keyup', function(e) {
      if (e.key === 'Enter') {
        // Implement search functionality here
        const searchTerm = this.value.trim();
        if (searchTerm) {
          console.log('Searching for:', searchTerm);
          // You would typically redirect to a search results page or show results inline
          // window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
        }
      }
    });
  }
  
  // Initialize code syntax highlighting if Prism.js is available
  if (typeof Prism !== 'undefined') {
    Prism.highlightAll();
  }
});

// Dark mode helper functions
function enableDarkMode(darkModeIcon) {
  document.body.classList.add('dark-theme');
  if (darkModeIcon) {
    darkModeIcon.classList.remove('bi-moon');
    darkModeIcon.classList.add('bi-sun');
  }
  localStorage.setItem('theme', 'dark');
}

function disableDarkMode(darkModeIcon) {
  document.body.classList.remove('dark-theme');
  if (darkModeIcon) {
    darkModeIcon.classList.remove('bi-sun');
    darkModeIcon.classList.add('bi-moon');
  }
  localStorage.setItem('theme', 'light');
}

// Handle smooth scrolling for anchor links
document.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      e.preventDefault();
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
    }
  }
});

// Highlight active sidebar item based on scroll position
function updateActiveNav() {
  const sections = document.querySelectorAll('h2, h3');
  const navLinks = document.querySelectorAll('.sidebar-link');
  
  if (sections.length && navLinks.length) {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href && href.substring(1) === current) {
        link.classList.add('active');
      }
    });
  }
}

// Initialize back-to-top button functionality
function initBackToTop() {
  const backToTopBtn = document.createElement('button');
  backToTopBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.style.display = 'none';
  document.body.appendChild(backToTopBtn);
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
}

// Initialize the back-to-top button functionality when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initBackToTop);

// Add CSS for back-to-top button
const style = document.createElement('style');
style.textContent = `
  .back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--primary-color);
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
    z-index: 999;
  }
  
  .back-to-top:hover {
    background-color: var(--primary-dark);
    transform: translateY(-3px);
  }
`;
document.head.appendChild(style);
/**
 * Modern enhancements for DocHub - works with existing HTML structure
 */

document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling to anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Add back-to-top button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.innerHTML = '↑';
  backToTopBtn.classList.add('back-to-top');
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

  // Add style for back-to-top button
  const style = document.createElement('style');
  style.textContent = `
    .back-to-top {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #0d6efd;
      color: white;
      border: none;
      cursor: pointer;
      display: none;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
      z-index: 9999;
      line-height: 1;
      text-align: center;
    }
    
    .back-to-top:hover {
      background-color: #0143a3;
      transform: translateY(-3px);
    }
  `;
  document.head.appendChild(style);

  // Add code block copy buttons
  const codeBlocks = document.querySelectorAll('pre');
  codeBlocks.forEach(block => {
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-code-button';
    copyButton.textContent = 'Copy';
    
    block.style.position = 'relative';
    block.insertBefore(copyButton, block.firstChild);
    
    copyButton.addEventListener('click', () => {
      const code = block.querySelector('code') ? 
        block.querySelector('code').innerText : 
        block.innerText;
      
      navigator.clipboard.writeText(code).then(() => {
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
          copyButton.textContent = 'Copy';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy code: ', err);
        copyButton.textContent = 'Failed';
        setTimeout(() => {
          copyButton.textContent = 'Copy';
        }, 2000);
      });
    });
  });

  // Add style for copy buttons
  const copyButtonStyle = document.createElement('style');
  copyButtonStyle.textContent = `
    .copy-code-button {
      position: absolute;
      top: 5px;
      right: 5px;
      padding: 3px 8px;
      font-size: 12px;
      color: #0d6efd;
      background-color: #fff;
      border: 1px solid #dee2e6;
      border-radius: 4px;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    pre:hover .copy-code-button {
      opacity: 1;
    }
    
    .copy-code-button:hover {
      background-color: #f8f9fa;
      border-color: #0d6efd;
    }
  `;
  document.head.appendChild(copyButtonStyle);
  
  // Make tables responsive
  const tables = document.querySelectorAll('table');
  tables.forEach(table => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('table-responsive');
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
  
  // Add style for responsive tables
  const tableStyle = document.createElement('style');
  tableStyle.textContent = `
    .table-responsive {
      overflow-x: auto;
      margin-bottom: 1.5rem;
    }
  `;
  document.head.appendChild(tableStyle);
  
  // Add hover effects to cards and sections
  const cards = document.querySelectorAll('.asyncapi__info, .asyncapi__message, .asyncapi__server, .asyncapi__schema');
  cards.forEach(card => {
    card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-3px)';
      card.style.boxShadow = '0 0.75rem 1.5rem rgba(0, 0, 0, 0.08)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '';
    });
  });
});
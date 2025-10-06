/**
 * Menu Responsivo - Controla a exibição entre menu desktop e mobile 
 */
(function () {
  let footerHighlightTimeout;

  function adjustMenus() {
    const isMobile = window.innerWidth <= 768;
    const desktopMenu = document.querySelector('.desktop-menu');
    const mobileMenu = document.querySelector('.mobile-tab-menu');

    if (desktopMenu && mobileMenu) {
      desktopMenu.style.display = isMobile ? 'none' : 'block';
      mobileMenu.style.display = isMobile ? 'flex' : 'none';

      if (isMobile) {
        mobileMenu.style.justifyContent = 'space-around';
        mobileMenu.style.alignItems = 'center';
      }
    }
  }

  function setupFooterHighlight() {
    const footerContainer = document.getElementById('footer');
    if (!footerContainer) {
      return;
    }

    const footerElement = footerContainer.querySelector('.footer');
    if (!footerElement) {
      return;
    }

    const contactLinks = document.querySelectorAll('.desktop-menu a[href="#footer"]');

    if (!contactLinks.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animationDuration = prefersReducedMotion ? 0 : 2600;

    contactLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        if (window.innerWidth <= 768) {
          return;
        }

        event.preventDefault();

        footerElement.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start',
        });

        footerElement.classList.remove('footer-highlight');
        void footerElement.offsetWidth;

        footerElement.classList.add('footer-highlight');

        if (footerHighlightTimeout) {
          clearTimeout(footerHighlightTimeout);
        }

        const highlightDuration = animationDuration || 1500;

        footerHighlightTimeout = setTimeout(() => {
          footerElement.classList.remove('footer-highlight');
        }, highlightDuration);
      });
    });
  }

  function initialize() {
    adjustMenus();
    setupFooterHighlight();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }

  window.addEventListener('resize', adjustMenus);
})();

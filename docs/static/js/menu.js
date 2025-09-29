/**
 * Menu Responsivo - Controla a exibição entre menu desktop e mobile 
 */
(function () {
  function adjustMenus() {
    const isMobile = window.innerWidth <= 768;
    const desktopMenu = document.querySelector(".desktop-menu");
    const mobileMenu = document.querySelector(".mobile-tab-menu");
    
    if (desktopMenu && mobileMenu) {
      desktopMenu.style.display = isMobile ? "none" : "block";
      mobileMenu.style.display = isMobile ? "flex" : "none";
      
      if (isMobile) {
        mobileMenu.style.justifyContent = "space-around";
        mobileMenu.style.alignItems = "center";
      }
    }
  }

  // Executa quando a página carrega
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", adjustMenus);
  } else {
    adjustMenus();
  }

  // Executa quando a janela é redimensionada
  window.addEventListener("resize", adjustMenus);
})();
/**
 * Navegação Suave e Scroll Tracking - Página de Projetos 
 */
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Navegação suave para as seções
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 100; // Ajuste para o menu fixo
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Destacar seção ativa durante o scroll
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.timeline-section');
    const scrollPos = window.scrollY + 150;
    
    sections.forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const correspondingLink = document.querySelector(`a[href="#${section.id}"]`);
      
      if (scrollPos >= top && scrollPos <= bottom) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (correspondingLink) {
          correspondingLink.classList.add('active');
        }
      }
    });
  });
});
// Scroll suave para o topo ao clicar no botão Voltar ao Início
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".btn-voltar-inicio").forEach(function (btn, idx) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelectorAll(".projeto-description")
        .forEach(function (desc) {
          desc.style.display = "none";
        });
      document
        .querySelectorAll(".btn-ver-detalhes")
        .forEach(function (btnDetalhe) {
          btnDetalhe.innerHTML =
            '<i class="fas fa-chevron-down"></i> Ver detalhes';
        });
      setTimeout(function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    });
  });
});
// Expansão/ocultação das descrições dos projetos
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".btn-ver-detalhes").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var desc = btn.nextElementSibling;
      if (desc && desc.classList.contains("projeto-description")) {
        if (desc.style.display === "none" || desc.style.display === "") {
          desc.style.display = "block";
          btn.innerHTML = '<i class="fas fa-chevron-up"></i> Ocultar detalhes';
        } else {
          desc.style.display = "none";
          btn.innerHTML = '<i class="fas fa-chevron-down"></i> Ver detalhes';
        }
      }
    });
  });
});
/**
 * Navegação Suave e Scroll Tracking - Página de Projetos
 */
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  // Navegação suave para as seções
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 100; // Ajuste para o menu fixo

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Destacar seção ativa durante o scroll
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".timeline-section");
    const scrollPos = window.scrollY + 150;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const correspondingLink = document.querySelector(
        `a[href="#${section.id}"]`
      );

      if (scrollPos >= top && scrollPos <= bottom) {
        navLinks.forEach((link) => link.classList.remove("active"));
        if (correspondingLink) {
          correspondingLink.classList.add("active");
        }
      }
    });
  });
});

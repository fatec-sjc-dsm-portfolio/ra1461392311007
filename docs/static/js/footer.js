// footer.js - insere o rodapé padronizado em todas as páginas
(function() {
  var footerHTML = `
    <footer class="footer">
      <div class="footer-content">
       <div class="footer-contact-info">
          <span><i class="fas fa-envelope"></i> <a href="mailto:katy_ane@yahoo.com.br">katy_ane@yahoo.com.br</a></span>
          <span><i class="fab fa-whatsapp"></i> <a href="https://wa.me/5511995357525?text=Olá! Vi seu portfólio e gostaria de conversar sobre oportunidades." target="_blank">WhatsApp</a></span>
          <a href="https://github.com/Katianefatec" target="_blank" title="GitHub"><i class="fab fa-github"></i> GitHub</a>
          <a href="https://www.linkedin.com/in/katiane-soares-4b8193245/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i> LinkedIn</a>
        </div>
        <div class="footer-copyright">© 2025 Katiane Soares | Desenvolvedora Full Stack</div>
        
        <div class="footer-social-links">
        <span><i class="fas fa-map-marker-alt"></i> <span>São José dos Campos - SP</span></span>  
        
        </div>
       
      </div>
    </footer>
  `;
  var footerDiv = document.getElementById('footer');
  if (footerDiv) {
    footerDiv.innerHTML = footerHTML;
  } else {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }
})();

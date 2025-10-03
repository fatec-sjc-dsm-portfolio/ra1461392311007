// footer.js - insere o rodapé padronizado em todas as páginas
(function() {
  var footerHTML = `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-main">
          <div class="footer-brand">
            <h3>Katiane Soares</h3>
            <p>Desenvolvedora Full Stack</p>
          </div>
          
          <div class="footer-links">
            <div class="footer-section">
              <h4>Contato</h4>
              <a href="mailto:katy_ane@yahoo.com.br"><i class="fas fa-envelope"></i> katy_ane@yahoo.com.br</a>
              <a href="https://wa.me/5511995357525?text=Olá! Vi seu portfólio e gostaria de conversar sobre oportunidades." target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp</a>
            </div>
            
            <div class="footer-section">
              <h4>Redes Sociais</h4>
              <a href="https://github.com/Katianefatec" target="_blank"><i class="fab fa-github"></i> GitHub</a>
              <a href="https://www.linkedin.com/in/katiane-soares-4b8193245/" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
            </div>
            
            <div class="footer-section">
              <h4>Localização</h4>
              <span><i class="fas fa-map-marker-alt"></i> São José dos Campos - SP</span>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>© 2025 Katiane Soares. Todos os direitos reservados.</p>
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

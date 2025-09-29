document.getElementById("formulario-contato").addEventListener("submit", function(e) {
  e.preventDefault(); 
  
  const formStatus = document.getElementById("form-status");
  const submitButton = document.querySelector(".btn-enviar");
  const form = this;
  
  // Estado de carregamento
  submitButton.disabled = true;
  submitButton.textContent = "Enviando...";
  submitButton.classList.add("loading");
  
  formStatus.textContent = "Enviando mensagem...";
  formStatus.className = "sending";
  formStatus.style.display = "block";
  
  // Envio do formulário
  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      // Sucesso
      formStatus.textContent = "Mensagem enviada com sucesso! Obrigada pelo contato.";
      formStatus.className = "sending";
      form.reset();
      
      // Redirecionamento após 2 segundos
      setTimeout(function() {
        window.location.href = "index.html";
      }, 2000);
    } else {
      // Erro na resposta
      response.json().then(data => {
        formStatus.textContent = "Ocorreu um erro. Por favor, tente novamente.";
        formStatus.className = "error";
      });
    }
  })
  .catch(error => {
    // Erro de conexão
    formStatus.textContent = "Ocorreu um erro na conexão. Por favor, tente novamente mais tarde.";
    formStatus.className = "error";
  })
  .finally(() => {
    // Restaurar estado do botão
    submitButton.disabled = false;
    submitButton.textContent = "Enviar Mensagem";
    submitButton.classList.remove("loading");
  });
});
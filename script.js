document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão de submissão do formulário

    // Obter os dados do formulário
    var formData = new FormData(this);

    // Enviar os dados via AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.staticforms.xyz/submit');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Mensagem enviada com sucesso!');
            // Redirecionar o usuário para a página anterior
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('subject').value = '';
      document.getElementById('message').value = '';
            window.history.back();
        } else {
            alert('Erro ao enviar mensagem. Por favor, tente novamente mais tarde.');
        }
    };
    xhr.send(JSON.stringify(Object.fromEntries(formData.entries())));
});

// ......

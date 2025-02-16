// Exemplo de interatividade com JavaScript
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    document.getElementById('contact-form').reset();
});
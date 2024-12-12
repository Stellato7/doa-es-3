document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('denunciaForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const data = document.getElementById('data').value;
        const endereco = document.getElementById('endereco').value.trim();
        const descricao = document.getElementById('descricao').value.trim();
        const tipoAnimal = document.getElementById('tipo_animal').value;

        if (!nome || !email || !telefone || !data || !endereco || !descricao || !tipoAnimal) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, insira um endereço de email válido.');
            return;
        }

        alert('Denúncia enviada com sucesso!');
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        return re.test(email);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const openModal = document.getElementById('openModal');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    const submitBtn = document.getElementById('submitBtn'); // Botão Enviar

    // Abrir modal
    openModal.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Fechar modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fechar ao clicar fora do modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Adicionar alerta no botão Enviar
    submitBtn.addEventListener('click', () => {
        alert('Animal cadastrado com sucesso!');
        modal.style.display = 'none'; // Fechar modal após envio
    });
});
// Exibe uma mensagem de boas-vindas ao carregar a página
window.onload = function() {
    alert("Bem-vindo ao nosso site! Esperamos que você se inspire com nossa causa.");
};

// Adiciona eventos para destacar dinamicamente os nomes ao passar o mouse
const ana = document.getElementById('ana');
const gustavo = document.getElementById('gustavo');
const guilherme = document.getElementById('guilherme');

// Função para alterar a cor do texto temporariamente
function highlightName(element) {
    element.style.color = '#FF5722';
}

function resetHighlight(element) {
    element.style.color = '#4CAF50';
}

// Adiciona os eventos aos nomes
ana.addEventListener('mouseover', () => highlightName(ana));
ana.addEventListener('mouseout', () => resetHighlight(ana));

gustavo.addEventListener('mouseover', () => highlightName(gustavo));
gustavo.addEventListener('mouseout', () => resetHighlight(gustavo));

guilherme.addEventListener('mouseover', () => highlightName(guilherme));
guilherme.addEventListener('mouseout', () => resetHighlight(guilherme));

// Modal
var modal = document.getElementById('simpleModal');
// Botão abrir modal
var modalBtn = document.getElementById('modalBtn');
// Botão fechar modal
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Vinculando evento a função para abrir modal
modalBtn.addEventListener('click', openModal);
// Vinculando evento a função para fechar modal
closeBtn.addEventListener('click', closeModal);
// Vinculando evento a função para fechar modal ao clicar fora
window.addEventListener('click', outsideClick);


function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
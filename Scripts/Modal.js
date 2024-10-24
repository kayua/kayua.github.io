const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModal = document.getElementsByClassName('close')[0];

openModalBtn.onclick = function () {modal.style.display = 'block'; };

closeModal.onclick = function () { modal.style.display = 'none'; };

window.onclick = function (event) {

  if (event.target == modal) { modal.style.display = 'none'; }

};

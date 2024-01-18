const modal = document.querySelector('.backdrop');
const modalBTNOpen = document.querySelector('.modal-btn-open');
const modalBTNClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBTNOpen.addEventListener('click', toggleModal);
modalBTNClose.addEventListener('click', toggleModal);

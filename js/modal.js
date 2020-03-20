window.onload = function() {

	//Variables
	var modal = document.querySelector('.modal');
	var modalBtn = document.querySelector('.modal-btn');
	var modalCloseBtn = document.querySelector('.modal__close');
	var body = document.querySelector('body');
	var modalOverlay = document.createElement('div');
	modalOverlay.className = 'modal-overlay';

	function openModal(e) {
		e.preventDefault();
		modalOverlay.classList.add('is-open');
		modal.classList.add('is-open');
		document.body.appendChild(modalOverlay);
	}

	function closeModal(e) {
		modalOverlay.classList.remove('is-open');
		modal.classList.remove('is-open');
		document.body.removeChild(modalOverlay);
	}

	modalCloseBtn.addEventListener('click', closeModal);
	modalOverlay.addEventListener('click', closeModal);
	modalBtn.addEventListener('click', openModal);

};

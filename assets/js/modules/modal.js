export default function modal(id) {
    const modalOverlay = document.querySelector('.modal-overlay');
    const modal = modalOverlay.querySelector('#' + id);
    const modalClose = modal.querySelector('.js-close-modal');

    modalOverlay.classList.add('modal-overlay--active');
    modal.classList.add('modal--active');
    document.body.classList.add('page--modal-open');
    setTimeout(() => {
        modalOverlay.classList.add('modal-overlay--fade-in');
        modal.classList.add('modal--fade-in');
    }, 10);
    
    modal.focus();
    modalOverlay.addEventListener('click', closeModal);
    modalOverlay.addEventListener('keydown', closeModal);

    function closeModal(evt) {
        if (evt.target === modalOverlay || evt.target === modalClose || evt.keyCode === 27) {
            modalOverlay.classList.remove('modal-overlay--active');
            modalOverlay.classList.remove('modal-overlay--fade-in');
            modal.classList.remove('modal--active');
            modal.classList.remove('modal--fade-in');
            document.body.classList.remove('page--modal-open');

            modalOverlay.removeEventListener('click', modalClose);
            modalOverlay.removeEventListener('keydown', modalClose);
        }
    }

}

//Доделать визуал у модалки.
//При успешной подписке менять стиль блока, без возможности подписки, запись в local storage
import modal from "./modal.js";

export default function subscribe() {

    const subscribeBlock = document.querySelector('.subscribe');
    const subscribeButton = subscribeBlock.querySelector('.js-subscribe-button');
    const subscribeEmail = subscribeBlock.querySelector('.js-subscribe-email');
    const subscribeInvalidText = subscribeBlock.querySelector('.js-subscribe-invalid');

    subscribeButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        emailValidation(this);
    });

    function emailValidation(handle) {
        if (subscribeEmail.validity.valid) {
            
            $.post("/test", { email: subscribeEmail.value },
                function (data) {
                    console.log(data);
                    modal(handle.dataset.target);
                }
            ).fail(function (error) {
                console.error(error.statusText);
            });
            
        } else {
            handle.disabled = true;
            subscribeEmail.classList.add('subscribe__input--invalid');
            subscribeInvalidText.classList.add('subscribe__info--active');
            subscribeInvalidText.textContent = subscribeEmail.validationMessage;
            setTimeout(() => {
                handle.disabled = false;
                subscribeEmail.classList.remove('subscribe__input--invalid');
                subscribeInvalidText.classList.remove('subscribe__info--active');
            }, 3000);
        }
    }
}
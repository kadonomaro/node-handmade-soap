export default function accordion(node) {
    const questions = [...node.children];


    questions.forEach(question => {
        question.children[0].addEventListener('click', function () {
            this.classList.toggle('accordion__toggle--active');
            this.nextElementSibling.classList.toggle('accordion__content--active');
            const height = this.nextElementSibling.scrollHeight;

            if (this.nextElementSibling.style.height) {
                this.nextElementSibling.style.height = null;

            } else {
                this.nextElementSibling.style.height = height + 'px';
            }
            
        });
    });
    
}
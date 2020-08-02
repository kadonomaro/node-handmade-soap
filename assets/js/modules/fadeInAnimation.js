export default function fadeInAnimation(section, elements, delay, delayStep, className, offset) {
    let scrollOffset;

    if (elements.length) {
        elements.forEach(element => {
            element.style.transitionDelay = delay + 's';
            delay += delayStep;
        });
        window.addEventListener('scroll', animate);
    }

    

    function animate() {
        scrollOffset = window.pageYOffset + window.innerHeight;
        if (scrollOffset >= (section.offsetTop + offset)) {
            elements.forEach(element => {
                element.classList.add(className);
                setTimeout(() => {
                    element.style.transitionDelay = '';
                }, 1000);
                
            });
            window.removeEventListener('scroll', animate);
        }
    }

}


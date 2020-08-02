export default function fadeObserver(elements, className, targetSelector) {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.75
    };

    function callback(items) {
        items.forEach(item => {
            if (item.intersectionRatio > 0 && targetSelector) {
                item.target.querySelectorAll(targetSelector)
                    .forEach(selector => {
                        selector.classList.add(className);
                    });
            }
            else if (item.intersectionRatio > 0) {
                item.target.classList.add(className);
            }  
        });
    }

    let observer = new IntersectionObserver(callback, options);


    elements.forEach(element => {
        observer.observe(element);
    });
    
}

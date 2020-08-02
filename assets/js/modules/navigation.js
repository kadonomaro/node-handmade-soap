export default function navigation() {
    const navToggle = document.querySelector('.navigation__toggle');
    const navList = document.querySelector('.navigation__list');
    const navItems = navList.querySelectorAll('.navigation__item');


    navToggle.addEventListener('click', function (evt) {
        evt.preventDefault();

        //fade-in animation of nav items
        navItems.forEach((item, index) => {
            item.style.transitionDelay = (index / 5).toFixed(2) + 's';
            
        });
        setTimeout(function () {
            navItems.forEach((item) => {
                item.classList.toggle('navigation__item--active');
                
                setTimeout(function () {
                    item.style.transitionDelay = '0s';
                }, 300);
                
            });
        }, 10);

        if (navList.classList.contains('navigation__list--active')) {
            navList.classList.remove('navigation__list--active');
            navToggle.classList.remove('navigation__toggle--active');
            setTimeout(function () {
                navList.style.display = 'none';
            },500);
        } else {
            navList.style.display = 'flex';
            setTimeout(function () {
                navList.classList.add('navigation__list--active');
                navToggle.classList.add('navigation__toggle--active');
            }, 100);
        }
        
    });
}
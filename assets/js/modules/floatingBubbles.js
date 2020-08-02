export default function floatingBubbles() {
    let canvas = document.querySelector('.js-header-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let ctx = canvas.getContext('2d');

    let bubble = new Image();
    bubble.src = './assets/images/bubbles/bubble.png';

    bubble.addEventListener('load', function () {
        ctx.drawImage(bubble, 220,680, 60,60);
        ctx.drawImage(bubble, 740,600, 60,60);

        ctx.drawImage(bubble, 1400,45, 100,100);
        ctx.drawImage(bubble, 1700,220, 100,100);
        ctx.drawImage(bubble, 1300, 570, 100, 100);
        ctx.drawImage(bubble, 900, 570,  100,100);

        ctx.drawImage(bubble, 130,90, 150,150);
        ctx.drawImage(bubble, 700,80, 150,150);
        ctx.drawImage(bubble, 600,730, 150,150);
        ctx.drawImage(bubble, 1300, 800, 150,150);
        ctx.drawImage(bubble, 300,280, 150,150);

        ctx.drawImage(bubble, 500,400, 225,225);
        ctx.drawImage(bubble, 1175,180, 225,225);
        ctx.drawImage(bubble, 1400, 400, 225, 225);
        ctx.drawImage(bubble, -100, 800, 225, 225);
        ctx.drawImage(bubble, 300, -100, 225, 225);
    });


    window.addEventListener('scroll', function () {
        if (this.window.pageYOffset <= this.window.innerHeight) {
            drawImages();
        }


    });

    function drawImages() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);


        ctx.drawImage(bubble, 220,680 - window.pageYOffset/6, 60,60);
        ctx.drawImage(bubble, 740,600 + window.pageYOffset/6, 60,60);

        ctx.drawImage(bubble, 1400,45 + window.pageYOffset/4, 100,100);
        ctx.drawImage(bubble, 1700,220 + window.pageYOffset/4, 100,100);
        ctx.drawImage(bubble, 1300, 570 - window.pageYOffset/8, 100, 100);
        ctx.drawImage(bubble, 900, 570 - window.pageYOffset/6,  100,100);

        ctx.drawImage(bubble, 130,90 + window.pageYOffset/3, 150,150);
        ctx.drawImage(bubble, 700,80 + window.pageYOffset/3, 150,150);
        ctx.drawImage(bubble, 600,730 + window.pageYOffset/3, 150,150);
        ctx.drawImage(bubble, 1300, 800 + window.pageYOffset/3, 150,150);
        ctx.drawImage(bubble, 300,280 + window.pageYOffset/3, 150,150);

        ctx.drawImage(bubble, 500,400 - window.pageYOffset/6, 225,225);
        ctx.drawImage(bubble, 1175,180 + window.pageYOffset/2, 225,225);
        ctx.drawImage(bubble, 1400, 400 + window.pageYOffset/4, 225, 225);
        ctx.drawImage(bubble, -100, 800 - window.pageYOffset / 6, 225, 225);
        ctx.drawImage(bubble, 300, -100 + window.pageYOffset/2, 225, 225);
    }

}

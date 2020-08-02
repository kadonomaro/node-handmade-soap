import galleryBox from "./modules/galleryBox.js";
import scrollTop from "./modules/scrollTop.js";
import fadeInAnimation from "./modules/fadeInAnimation.js";
import navigation from "./modules/navigation.js";
import subscribe from "./modules/subscribe.js";

document.addEventListener('DOMContentLoaded', function () {

	scrollTop(document.querySelector('.scroll-top'), 'scroll-top--active');
	navigation();

	//initialization gallery viewer
	galleryBox.init(
			document.querySelectorAll('.gallery-photos__image'),
			{
					imageIndex: true,
					openingSpeed: 300,
					slideSpeed: 500,
					easing: 'ease-in',
			}
	);


	//photo-cards block animation
	const photoCards = document.querySelectorAll('.photo-cards__item');
	photoCardsAnimation(photoCards, 1000);

	function photoCardsAnimation(cards, timeout) {

			setTimeout(() => {
					cards.forEach((card, index) => {
							let cardComputedStyle = window.getComputedStyle(card, null).getPropertyValue('transform');
							let rotateAngle = getDegrees(cardComputedStyle);
							card.style.transitionDelay = `${index/3}s`;
							card.style.opacity = 1;
							card.style.transform = `rotate(${rotateAngle}deg) translateX(0)`;
					});
			}, timeout);
	}

	function getDegrees(matrix) {
			matrix = matrix.split('(')[1].split(')')[0].split(',');
			return Math.round(Math.atan2(matrix[1], matrix[0]) * (180 / Math.PI));;
	}


	//fadeIn gallery photos scroll animation
	fadeInAnimation(
			document.querySelector('.gallery'),
			document.querySelectorAll('.gallery-photos__item'),
			0.2,
			0.2,
			'gallery-photos__item--active',
			100
	);

	subscribe()
});

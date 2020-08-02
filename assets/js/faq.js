import scrollTop from "./modules/scrollTop.js";
import navigation from "./modules/navigation.js";
import accordion from "./modules/accordion.js";
import subscribe from "./modules/subscribe.js";

document.addEventListener("DOMContentLoaded", function () {
	const faq = document.querySelector(".faq");
	const accordionBlock = document.querySelector(".accordion");

	scrollTop(document.querySelector(".scroll-top"), "scroll-top--active");
	navigation();
	accordion(accordionBlock);

	const faqFadeButton = document.querySelector(".faq__button");
	faqFadeButton.addEventListener("click", function () {
		faq.classList.add("faq--animated");
		this.style.opacity = 0;
		setTimeout(() => {
			accordionBlock.classList.remove("accordion--hidden");
			this.style.visibility = "hidden";
		}, 300);
	});

	subscribe();
});

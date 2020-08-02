import detectSwipeDirection from "./modules/detectSwipeDirection.js";
import scrollTop from "./modules/scrollTop.js";
import fadeInAnimation from "./modules/fadeInAnimation.js";
import tabs from "./modules/tabs.js";
import floatingBubbles from "./modules/floatingBubbles.js";
import fadeObserver from "./modules/fadeObserver.js";
import subscribe from "./modules/subscribe.js";

document.addEventListener("DOMContentLoaded", function () {
	scrollTop(document.querySelector(".scroll-top"), "scroll-top--active");
	floatingBubbles();

	// open/close navigation
	const headerNav = document.querySelector(".header-nav");
	const headerNavToggle = headerNav.querySelector(".header-nav__toggle");

	headerNavToggle.addEventListener("click", function () {
		headerNav.classList.toggle("header-nav--hidden");
		headerNavToggle.classList.toggle("header-nav__toggle--active");
	});
	window.addEventListener("scroll", function () {
		if (!headerNav.classList.contains("header-nav--hidden")) {
			headerNav.classList.add("header-nav--hidden");
			headerNavToggle.classList.remove("header-nav__toggle--active");
		}
	});

	// swipe detection and close navigation by swipe
	detectSwipeDirection(headerNav, "left", function () {
		headerNav.classList.add("header-nav--hidden");
		headerNavToggle.classList.remove("header-nav__toggle--active");
	});

	//active or hidden button for scroll page to top
	const scrollTopButton = document.querySelector(".scroll-top");
	window.addEventListener("scroll", function () {
		if (window.pageYOffset > window.innerHeight) {
			scrollTopButton.classList.add("scroll-top_active");
		} else {
			scrollTopButton.classList.remove("scroll-top_active");
		}
	});

	//features block animation
	fadeInAnimation(
		document.querySelector(".features"),
		document.querySelectorAll(".feature"),
		0.5,
		0.3,
		"feature--visible",
		300
	);

	const soapBaseTabsContainer = document.querySelector("#soap-base");
	const soapAromaTabsContainer = document.querySelector("#soap-aroma");
	const soapOilTabsContainer = document.querySelector("#soap-oil");

	tabs(
		soapBaseTabsContainer.querySelectorAll(".ingredients-types-item"),
		soapBaseTabsContainer.querySelectorAll(".ingredients-types__desc"),
		"ingredients-types-item--active",
		"ingredients-types__desc--active"
	);
	tabs(
		soapAromaTabsContainer.querySelectorAll(".ingredients-types-item"),
		soapAromaTabsContainer.querySelectorAll(".ingredients-types__desc"),
		"ingredients-types-item--active",
		"ingredients-types__desc--active"
	);
	tabs(
		soapOilTabsContainer.querySelectorAll(".ingredients-types-item"),
		soapOilTabsContainer.querySelectorAll(".ingredients-types__desc"),
		"ingredients-types-item--active",
		"ingredients-types__desc--active"
	);

	//fade observer
	const fadeItemsParent = document.querySelectorAll(".stages-item");
	fadeObserver(fadeItemsParent, "fade-in", ".stages-item__caption, .stages-item__image");

	//subscribe to newsletter
	subscribe();
});

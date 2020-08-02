import scrollTop from "./modules/scrollTop.js";
import typeWrite from "./modules/typeWrite.js";
import navigation from "./modules/navigation.js";
import subscribe from "./modules/subscribe.js";

document.addEventListener("DOMContentLoaded", function () {
	scrollTop(document.querySelector(".scroll-top"), "scroll-top--active");
	navigation();

	// type writting effect for header subtitle
	typeWrite(
		"Творческая мастерская",
		100,
		document.querySelector(".page-header__title"),
		function () {
			document
				.querySelector(".page-header__subtitle")
				.classList.remove("page-header__subtitle--hidden");
		}
	);

	//scrolling into every section with interval on click button
	let blogActionButton = document.querySelector(".js-blog-action");
	blogActionButton.addEventListener("click", function (evt) {
		evt.preventDefault();
		let sections = document.querySelectorAll(".blog-article");
		let sectionScrollSettings = {
			behavior: "smooth",
		};
		let scrollSpeed = 2000;
		let sectionCounter = 0;

		sections[sectionCounter].scrollIntoView(sectionScrollSettings);
		sectionCounter++;
		let scrollInterval = setInterval(() => {
			sections[sectionCounter].scrollIntoView(sectionScrollSettings);

			sectionCounter++;
			if (sectionCounter >= sections.length) {
				setTimeout(() => {
					window.scrollTo({
						top: 0,
						behavior: "smooth",
					});
					this.classList.add("page-header__button--hidden");
					this.addEventListener("transitionend", () => {
						this.style.display = "none";
					});
				}, scrollSpeed);

				clearInterval(scrollInterval);
			}
		}, scrollSpeed);

		window.addEventListener("mousedown", userActionHandler);
		window.addEventListener("touchstart", userActionHandler);
		window.addEventListener("mousewheel", userActionHandler);
		window.addEventListener("keydown", userActionHandler);

		function userActionHandler() {
			clearInterval(scrollInterval);
			window.removeEventListener("mousedown", userActionHandler);
			window.removeEventListener("touchstart", userActionHandler);
			window.removeEventListener("mousewheel", userActionHandler);
			window.removeEventListener("keydown", userActionHandler);
		}
	});

	subscribe();
});

let headerButton = document.querySelector(".header__top");
let headerPopup = document.querySelector(".header__popup");

headerButton.addEventListener("click", (event) => {
	event.stopPropagation();
	headerPopup.classList.toggle("show");
	headerButton.classList.toggle("active");
	headerButton.classList.toggle("show");
});

document.addEventListener("click", (event) => {
	if (
		!headerButton.contains(event.target) &&
		!headerPopup.contains(event.target)
	) {
		headerPopup.classList.remove("show");
	}
});

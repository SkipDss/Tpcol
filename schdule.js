let weekButtons = document.querySelectorAll(".button-week");

weekButtons.forEach(weekButton => {
    weekButton.addEventListener("click", () => {
        weekButtons.forEach(weekButton => {
            weekButton.classList.remove("button--active"); 
    });
        weekButton.classList.toggle("button--active");
    })
});
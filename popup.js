let mainButton = document.querySelector(".button-main");
let popup = document.querySelector(".choose-popup");
let popupClose = popup.querySelector(".choose-popup__close-btn");
let popupContent = popup.querySelector(".choose-popup__modal");
mainButton.addEventListener('click', () =>{
    popup.showModal();
})
popupClose.addEventListener("click", () => {
    popup.close();
})
console.log(popup);
popup.addEventListener('click', (e) => {
    if (e.target === popup) { // Кликнули именно на фон, а не на контент
      popup.close();
    }
  });
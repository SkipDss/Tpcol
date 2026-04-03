let mainButton = document.querySelector(".button-main");
let popup = document.querySelector(".choose-popup");
let popupClose = popup.querySelector(".choose-popup__close-btn");
let popupContent = popup.querySelector(".choose-popup__modal");
mainButton.addEventListener("click", () => {
	popup.showModal();
});
popupClose.addEventListener("click", () => {
	popup.close();
});
console.log(popup);
popup.addEventListener("click", (e) => {
	if (e.target === popup) {
		popup.close();
	}
});

// let API = {
// 	week_type: "красная",
// 	schedule: {
// 		monday: {
// 			date: "2025-03-24",
// 			pairs: [
// 				{
// 					number: 1,
// 					subject: "ОСИС",
// 					teacher: "Ферапонтов В.А.",
// 					time: "09:00-10:30",
// 					room: "108",
// 					substitution: null,
// 				},
// 				{
// 					number: 2,
// 					subject: "Физика",
// 					teacher: "Гвоздикова О.С.",
// 					time: "10:40-12:10",
// 					room: "408",
// 					substitution: "перенос в ауд. 410",
// 				},
// 			],
// 		},
// 		tuesday: { date: "2025-03-25", pairs: [] },
// 		wednesday: { date: "2025-03-26", pairs: [] },
// 		thursday: { date: "2025-03-27", pairs: [] },
// 		friday: { date: "2025-03-28", pairs: [] },
// 		saturday: { date: "2025-03-29", pairs: [] },
// 	},
// };

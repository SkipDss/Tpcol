let weekButtons = document.querySelectorAll(".button-week");
let scheduleContainer = document.querySelector(".section-schedule__lessons");
let scheduleTemplate = document.getElementById("lesson-card_template");
let lessonElement = scheduleTemplate.content.cloneNode(true);

weekButtons.forEach((weekButton) => {
	weekButton.addEventListener("click", () => {
		weekButtons.forEach((weekButton) => {
			weekButton.classList.remove("button--active");
		});
		weekButton.classList.toggle("button--active");
	});
});

const API = {
	week_type: "Красная",
	schedule: {
		monday: {
			date: "2025-03-24",
			pairs: [
				{
					number: 1,
					subject: "ОСИС",
					teacher: "Ферапонтов В.А.",
					time: "09:00-10:30",
					room: "108",
					substitution: null,
				},
				{
					number: 2,
					subject: "Физика",
					teacher: "Гвоздикова О.С.",
					time: "10:40-12:10",
					room: "408",
					substitution: {
						subject: "Программирование",
						teacher: "Иванова М.И.",
						time: "10:40-12:10",
						room: "205",
					},
				},
				{
					number: 3,
					subject: "Математика",
					teacher: "Петров А.А.",
					time: "12:20-13:50",
					room: "301",
					substitution: null,
				},
			],
		},
		tuesday: {
			date: "2025-03-25",
			pairs: [
				{
					number: 1,
					subject: "История",
					teacher: "Сидорова Е.В.",
					time: "09:00-10:30",
					room: "202",
					substitution: null,
				},
			],
		},
		wednesday: { date: "2025-03-26", pairs: [] },
		thursday: { date: "2025-03-27", pairs: [] },
		friday: { date: "2025-03-28", pairs: [] },
		saturday: { date: "2025-03-29", pairs: [] },
	},
};

function updateInfo(dayKey) {
	const dayData = API.schedule[dayKey];
	if (!dayData) return;

	const dateParts = dayData.date.split("-");
	const formattedDate = `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`;

	const dateElement = document.querySelector(
		".section-info__list .section-info__item-text:first-child",
	);
	const weekElement = document.querySelector(
		".section-info__list .section-info__item-text:last-child",
	);
	const groupButton = document.querySelector(
		".section-info__list .button-main",
	);

	if (dateElement) dateElement.textContent = formattedDate;
	if (weekElement) weekElement.textContent = `${API.week_type} неделя`;
	if (groupButton) groupButton.textContent = "ВП-22";
}

const dayMap = {
	Пн: "monday",
	Вт: "tuesday",
	Ср: "wednesday",
	Чт: "thursday",
	Пт: "friday",
	Сб: "saturday",
};

const container = document.querySelector(".section-schedule__container");
const template = document.getElementById("lesson-card_template");
const buttons = document.querySelectorAll(".button-week");

function renderSchedule(dayKey) {
	updateInfo(dayKey);
	const pairs = API.schedule[dayKey]?.pairs || [];
	container.innerHTML = "";

	if (pairs.length === 0) {
		container.innerHTML = '<p class="no-lessons">Нет пар</p>';
		return;
	}

	pairs.forEach((pair) => {
		const clone = template.content.cloneNode(true);
		clone.querySelector(".lesson-number p").textContent = pair.number;

		const displaySubject = pair.substitution
			? pair.substitution.subject
			: pair.subject;
		const displayTime = pair.substitution ? pair.substitution.time : pair.time;
		const displayTeacher = pair.substitution
			? pair.substitution.teacher
			: pair.teacher;
		const displayRoom = pair.substitution ? pair.substitution.room : pair.room;

		clone.querySelector(".lesson-card__subject").textContent = displaySubject;
		clone.querySelector(".lesson-card__time").textContent = displayTime;
		clone.querySelector(".lesson-card__teacher").textContent = displayTeacher;
		clone.querySelector(".lesson-card__room-value").textContent = displayRoom;

		if (pair.substitution) {
			const lessonNumberElement = clone.querySelector(".lesson-number");
			lessonNumberElement.style.backgroundColor = "red";
			// const subBadge = document.createElement('span');
			// subBadge.textContent = 'Зам.';
			// subBadge.style.fontSize = '10px';
			// lessonNumberElement.appendChild(subBadge);
		}

		container.appendChild(clone);
	});
}

buttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		buttons.forEach((b) => b.classList.remove("button--active"));
		btn.classList.add("button--active");
		const dayText = btn.textContent;
		const dayKey = dayMap[dayText];
		if (dayKey) renderSchedule(dayKey);
	});
});

function getTodayButtonText() {
	const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
	const today = new Date();
	const dayIndex = today.getDay();
	return days[dayIndex];
}

function getDayKeyFromButtonText(buttonText) {
	const map = {
		Пн: "monday",
		Вт: "tuesday",
		Ср: "wednesday",
		Чт: "thursday",
		Пт: "friday",
		Сб: "saturday",
	};
	return map[buttonText];
}

const todayButtonText = getTodayButtonText();
const todayKey = getDayKeyFromButtonText(todayButtonText);
if (todayKey) {
	buttons.forEach((btn) => {
		if (btn.textContent === todayButtonText) {
			btn.classList.add("button--active");
		} else {
			btn.classList.remove("button--active");
		}
	});
	renderSchedule(todayKey);
} else {
	const defaultButton = document.querySelector(".button-week");
	if (defaultButton) {
		defaultButton.classList.add("button--active");
		renderSchedule(getDayKeyFromButtonText(defaultButton.textContent));
	}
}

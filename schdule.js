let weekButtons = document.querySelectorAll(".button-week");
let scheduleContainer = document.querySelector(".section-schedule__lessons");
let scheduleTemplate = document.getElementById("lesson-card_template");
let lessonElement = scheduleTemplate.content.cloneNode(true);

weekButtons.forEach(weekButton => {
    weekButton.addEventListener("click", () => {
        weekButtons.forEach(weekButton => {
            weekButton.classList.remove("button--active"); 
    });
        weekButton.classList.toggle("button--active");
    })
});


const lessonsArray = [
    { number: 1, subject: "ОСИС", timeStart: "09:00", timeEnd: "10:30", teacher: "Ферапонтов В.А.", room: "108" },
    { number: 2, subject: "Физика", timeStart: "10:40", timeEnd: "12:10", teacher: "Гвоздикова О.С.", room: "408" },
];

lessonsArray.forEach(lesson => {
    let lessonElement = scheduleTemplate.content.cloneNode(true);
    lessonElement.querySelector('.lesson-number p').textContent = lesson.number;
    lessonElement.querySelector('.lesson-card__subject').textContent = lesson.subject;
    lessonElement.querySelector('.lesson-card__time').textContent = `${lesson.timeStart} - ${lesson.timeEnd}`;
    lessonElement.querySelector('.lesson-card__teacher').textContent = lesson.teacher;
    lessonElement.querySelector('.lesson-card__room-value').textContent = lesson.room;
    scheduleContainer.appendChild(lessonElement);
});
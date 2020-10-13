var button = document.querySelector("button");
var showArea = document.querySelector("div");
var days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]

button.addEventListener("click", showDayOfWeek);

function showDayOfWeek() {
    var userText = document.querySelector("input").value;
    var date = new Date(userText);
    var dayNumber = date.getDay();
    if (dayNumber === 0) {
        showArea.innerHTML = days[6];
    } else {
        showArea.innerHTML = days[dayNumber - 1]
    }
    document.querySelector("input").value = "";
}

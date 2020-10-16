var message = document.querySelector(".message");
var button = document.querySelector("input");
var login = prompt("Введите логин");
var cookieValue = findCookieValue("login");
document.cookie = "login=admin";

window.addEventListener("load", validate);
button.addEventListener("click", callModalWindow);

function callModalWindow() {
    login = prompt("Введите логин");
    validate()
};

function findCookieValue(cookieName) {
    var allcookies = document.cookie;
    var pos = allcookies.indexOf(cookieName + "=");

    if (pos != -1) {
        var start = pos + cookieName.length + 1;
        var end = allcookies.indexOf(";", start);

        if (end == -1) {
            end = allcookies.length;
        }

        var value = allcookies.substring(start, end);
        return value;
    }
};

function validate() {
    if (login.toLowerCase() === cookieValue) {
        message.innerHTML = "Пользоваетль " + login + " вошел в систему";
    } else {
        message.innerHTML = "Вход не выполнен";
    }
};
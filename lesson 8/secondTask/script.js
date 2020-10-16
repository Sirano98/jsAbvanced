localStorage.setItem("username", "admin");
var message = document.querySelector(".message");
var button = document.querySelector("input");
var login = prompt("Введите логин");
var storageValue = localStorage.getItem("username");

window.addEventListener("load", validate);
button.addEventListener("click", callModalWindow);

function callModalWindow() {
    login = prompt("Введите логин");
    validate()
};

function validate() {
    if (login.toLowerCase() === storageValue) {
        message.innerHTML = "Пользоваетль " + login + " вошел в систему";
    } else {
        message.innerHTML = "Вход не выполнен";
    }
};
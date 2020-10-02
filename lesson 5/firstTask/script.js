var elem = document.querySelector("div");
var link = document.querySelector("a");
var button = document.querySelector("input");

link.addEventListener("click", changeElement);
button.addEventListener("click", removeListener);

function changeElement(event) {
    elem.classList.toggle("active");
    event.preventDefault();
};

function removeListener() {
    link.removeEventListener("click", changeElement);
};
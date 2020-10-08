var element = document.querySelector(".element");
var button = document.querySelector("input");
var finalPosition = document.documentElement.clientWidth - element.clientWidth;
var timer;

element.addEventListener("click", moveElement);
button.addEventListener("click", stopElement);

function moveElement() {

    timer = setInterval(setPosition, 5);

    function setPosition() {
        var elementPosition = element.getBoundingClientRect().left;

        if (elementPosition < finalPosition) {
            element.style.left = elementPosition + 1 + "px";
        } else {
            element.style.left = "0px";
        }
    }
};

function stopElement() {
    var stopPosition = element.getBoundingClientRect().left;
    element.style.left = stopPosition + "px";
    clearInterval(timer)
};
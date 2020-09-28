window.onbeforeunload = function () {
    return true;
};

var divElements = document.getElementsByTagName("div");

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getColor(event) {
    var color = "rgb(" + getRandomInRange(0, 255) + ", " + getRandomInRange(0, 255) + ", " + getRandomInRange(0, 255) + ")";
    event.target.style.backgroundColor = color;
    event.target.innerHTML = color;
};

for (var i = 0; i < divElements.length; i++) {
    divElements[i].onmouseover = getColor;
};
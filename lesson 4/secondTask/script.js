var divElements = document.getElementsByTagName("div");

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getColor() {
    var color = "rgb(" + getRandomInRange(0, 255) + ", " + getRandomInRange(0, 255) + ", " + getRandomInRange(0, 255) + ")";
    return color;
};

for (var i = 0; i < divElements.length; i++) {
    divElements[i].onclick = function () {
        this.style.backgroundColor = getColor();
    }
};
function getFirst() {
    var first = document.getElementById("list").firstElementChild;
    first.classList.toggle("active");
};

function getLast() {
    var last = document.getElementById("list").lastElementChild;
    last.classList.toggle("active");
};

function getNext() {
    var list = document.getElementById("list").children;
    for (var i = 0; i < list.length; i++) {
        var currentElement = list[i];
        currentElement.nextElementSibling.classList.toggle("active");
        break
    };

};
function getFirst() {
    var first = document.getElementById("list").firstElementChild;
    first.classList.toggle("active");
};

function getLast() {
    var last = document.getElementById("list").lastElementChild;
    last.classList.toggle("active");
};

function getNext() {
    var item = document.getElementById("item").classList.add("active");

};
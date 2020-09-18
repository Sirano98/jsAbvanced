var list = document.getElementById("list");
var newItem = document.createElement("li");
newItem.innerHTML = "New item";

function getFirst() {
    var first = document.getElementById("list").firstElementChild;
    first.classList.toggle("active");
};

function getLast() {
    var last = document.getElementById("list").lastElementChild;
    last.classList.toggle("active");
};

function getNext() {
    var flag = -1;
    var element = list.children;
    if (flag += 1 < element.length) {
        var next = element[flag];
        next.classList.toggle("active");
        flag++;
    }
};

function addElement() {
    list.appendChild(newItem);
};

function removeElement() {
    var itemForRemoving = list.lastElementChild;
    list.removeChild(itemForRemoving);
};

function addTopElement() {
    var topItem = list.firstElementChild;
    document.body.insertBefore(newItem, list);
};

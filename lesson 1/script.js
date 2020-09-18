var list = document.getElementById("list");

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
        next.classList.add("selected");
        flag++;
    }
};

function addElement() {
    var newItem = document.createElement("li");
    newItem.innerHTML = "New item";
    list.appendChild(newItem);
};

function removeElement() {
    var itemForRemoving = list.lastElementChild;
    list.removeChild(itemForRemoving);
};

function addTopElement() {
    var newItem = document.createElement("li");
    newItem.innerHTML = "New item";
    var topItem = list.firstElementChild;
    list.insertBefore(newItem, topItem);
};

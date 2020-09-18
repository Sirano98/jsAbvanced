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
    // если ни один елемент не имеет класа присваиваем первому иначе следующему
    var flag = -1;
    var element = list.children;
    element.classList.remove("active");
    if (flag++ < element.length) {
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

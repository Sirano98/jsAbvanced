var list = document.getElementById("list");
var elements = list.children;
var counter = -1;

function getFirst() {
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("selected");
    };
    list.firstElementChild.classList.add("selected");

};

function getLast() {
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("selected");
    };
    list.lastElementChild.classList.add("selected");
};

function getNext() {
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].className === "selected") {
            counter = i;
        };
    };

    if (counter >= 0) {
        elements[counter].classList.remove("selected");
        if (counter >= elements.length - 1) {
            counter = -1;
            list.firstElementChild.classList.add("selected")
        } else {
            elements[counter].nextElementSibling.classList.add("selected");
        };
    } else {
        list.firstElementChild.classList.add("selected");
    };
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

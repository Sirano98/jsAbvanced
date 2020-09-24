var userText = prompt("Введите текст");
var substrs = userText.split(" ");
var ul = document.querySelector("ul");


for (var i = 0; i < substrs.length; i++) {
    if (substrs[i]) {
        var newItem = document.createElement("li");
        newItem.innerHTML = substrs[i];
        ul.appendChild(newItem);
    };
};

var firstItem = ul.firstElementChild;
firstItem.innerHTML = firstItem.innerHTML.toUpperCase();

var lastItem = ul.lastElementChild;
lastItem.innerHTML = lastItem.innerHTML.toLowerCase();

var previousItem = lastItem.previousElementSibling;
previousItem.innerHTML = previousItem.innerHTML.toLowerCase();

var patt = /a/gi;
var result = userText.match(patt).length;
alert("Введенный текст содержит " + result + " символов 'a'");
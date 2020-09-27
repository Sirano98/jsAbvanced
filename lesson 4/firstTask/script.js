var searchButton = document.querySelector("input");
var index = /\b\d{5}\b/g;
var ip = /\b(\d{3}\.){3}\d{3}\b/g;
var prices = /\$\d+(\.\d{2})?/g;
var dates = /\d{2}\/\d{2}\/\d{4}/g;

function search() {
    var userText = document.querySelector("#text").value;
    var indexResult = userText.match(index);
    console.log("Найденные индексы " + indexResult);
    var ipResult = userText.match(ip);
    console.log("Найденные ip " + ipResult);
    var pricesResult = userText.match(prices);
    console.log("Найденные цены " + pricesResult);
    var datesResult = userText.match(dates);
    console.log("Найденные даты " + datesResult);
};

searchButton.onclick = search;


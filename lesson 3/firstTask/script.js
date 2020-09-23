var string = document.querySelector("#number");
var startButton = document.querySelector("input[value='Start']");
var stopButton = document.querySelector("input[value='Stop']");
var resetButton = document.querySelector("input[value='Reset']");
var reversButton = document.querySelector("input[value='Revers']");
var counter = 0;
var reversCounter = 31;
var forStart, forStartRevers;


function forCounting() {
    counter++;
    string.innerHTML = counter;
    if (counter === 30) {
        clearInterval(forStart);
    }
};

function start() {
    forStart = setInterval(forCounting, 1000);
};

function stop() {
    clearInterval(forStart);
    clearInterval(forStartRevers);
};

function reset() {
    clearInterval(forStart);
    clearInterval(forStartRevers);
    counter = 0;
    reversCounter = 31;
    string.innerHTML = "";
};

function forCountingRevers() {
    reversCounter--;
    string.innerHTML = reversCounter;
    if (reversCounter === 1) {
        clearInterval(forStartRevers);
    }
};

function revers() {
    forStartRevers = setInterval(forCountingRevers, 1000);
};

startButton.onclick = start;
stopButton.onclick = stop;
resetButton.onclick = reset;
reversButton.onclick = revers;
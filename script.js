// Numbers on the display
let displayHours = document.getElementById("hours");
let displayMinutes = document.getElementById("minutes");
let displaySeconds = document.getElementById("seconds");
let displayTens = document.getElementById("tens");

// Buttons
let startButton = document.getElementById("timerStart");
let stopButton = document.getElementById("timerStop");
let resetButton = document.getElementById("timerReset");
let lapButton = document.getElementById("timerLap");

// Default values
var Interval;
var hours = "0";
var minutes = "0";
var seconds = "0";
var tens = "0";

// Start button function
startButton.addEventListener("click", function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    displaySeconds.innerHTML = seconds;
    displayTens.innerHTML = tens;
});

// Stop button function
stopButton.addEventListener("click", function () {
    // Stop the time
    clearInterval(Interval);

    // Stop button is clicked and start button is avaible
    stopButton.style.backgroundColor = "#2e2e2e";
    stopButton.style.pointerEvents = "none";
    startButton.style.backgroundColor = "#181818";
    startButton.style.pointerEvents = "visible";
});

// Reset button function 
resetButton.addEventListener("click", function () {
    // Delete lap list child elements
    let lapList = document.getElementById("lapList")
    while (lapList.firstChild) {
        lapList.removeChild(lapList.firstChild);
    }

    // Resets stopwatch
    clearInterval(Interval);
    hours = "0";
    minutes = "0";
    seconds = "0";
    tens = "0";
    displayTens.innerHTML = "0" + tens;
    displaySeconds.innerHTML = "0" + seconds;

    //Change color of start button
    startButton.style.backgroundColor = "#181818";
    startButton.style.pointerEvents = "visible";
});

// Lap button function
lapButton.addEventListener("click", function () {
    // Variables for saving laps
    if (tens <= 9) {
        valueTens = "0" + tens;
    } else {
        valueTens = tens;
    }

    if (seconds <= 9) {
        valueSeconds = "0" + seconds;
    } else {
        valueSeconds = seconds;
    }

    if (minutes <= 9) {
        valueMinutes = "0" + minutes;
    } else {
        valueMinutes = minutes;
    }

    if (hours <= 9) {
        valueHours = "0" + hours;
    } else {
        valueHours = hours;
    }

    // Create a new list element when clicking the lap button
    lapValue = valueHours + ":" + valueMinutes + ":" + valueSeconds + ":" + valueTens;
    var tag = document.createElement("li");
    var text = document.createTextNode(lapValue);
    tag.appendChild(text);
    var element = document.getElementById("lapList");
    element.appendChild(tag);
});

// Start timer function for the start button
function startTimer() {
    // Starts the chain
    tens++;

    if (tens <= 9) {
        displayTens.innerHTML = "0" + tens;
    } else {
        displayTens.innerHTML = tens;
    }

    if (tens >= 99) {
        seconds++;
        tens = "0";
    }

    if (seconds <= 9) {
        displaySeconds.innerHTML = "0" + seconds;
    } else {
        displaySeconds.innerHTML = seconds;
    }

    if (seconds >= 60) {
        seconds = 00;
        minutes++;
    }

    if (minutes <= 9) {
        displayMinutes.innerHTML = "0" + minutes;
    } else {
        displayMinutes.innerHTML = minutes;
    }

    if (minutes >= 60) {
        hours++;
        minutes = "0";
    }

    if (hours <= 9) {
        displayHours.innerHTML = "0" + hours;
    } else {
        displayHours.innerHTML = hours;
    }

    // Start button is clicked and stop button is avaible
    startButton.style.backgroundColor = "#2e2e2e";
    startButton.style.pointerEvents = "none";
    stopButton.style.backgroundColor = "#181818";
    stopButton.style.pointerEvents = "visible";
}
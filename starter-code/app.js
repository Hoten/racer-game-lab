var gameStarted = false;
var redBoxPosition = 0;

var numberOfBoxes = 17; // or ... querySelector(".red-track .box").length

function onPageLoaded() {
    console.log("Loaded!");

    var startButton = document.getElementById("start-button");
    console.log(startButton);

    startButton.addEventListener("click", onStartButtonClicked);

    // the event is called "keyup"
    // put event on the "document"

    document.addEventListener("keyup", onKeyUp);
}

function onStartButtonClicked() {
    gameStarted = true;

    var startMenu = document.getElementById("start-menu");
    var game = document.getElementById("game");

    // replaces all classes... probably not what we want.
    // startMenu.className = "hidden";

    startMenu.classList.add("hidden");
    game.classList.remove("hidden");
}

function onKeyUp(event) {
    if (gameStarted == false) {
        return;
    }

    if (event.key == "a" && redBoxPosition < numberOfBoxes - 1) {
        console.log("move the red player");

        var currentRedBoxDiv = document.getElementById("redBox");
        currentRedBoxDiv.id = "";
        // currentRedBoxDiv.removeAttribute("id"); // or this

        redBoxPosition += 1;

        var redTrackBoxes = document.querySelectorAll(".red-track .box");
        redTrackBoxes[redBoxPosition].id = "redBox";

        if (redBoxPosition == redTrackBoxes.length - 1) {
            console.log("red wins!");
        }
    } else if (event.key == "l") {
        console.log("move the blue player");
    }
}

document.addEventListener("DOMContentLoaded", onPageLoaded);

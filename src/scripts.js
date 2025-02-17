// // alert("Hello, World!");
// let brick = document.getElementById("brick");
// brick.addEventListener("click", function(){
//     alert("Hello, World!");
// })

// useless commit to wake up github

let score = -1;

const brickRotatingKeys = new Set(["ArrowLeft", "ArrowRight", "a", "d", "A", "D"]);


function updateScore() {
    scoreElement = document.getElementById("highScore");
    score++;
    if (score >= 100) {
        changeImageSource(brick, "images/bricks/0_hat.png");
    }
    scoreElement.innerText = "Score: " + score;
};

function randomNumber(max) {
    // javascript moment
    return Math.floor(Math.random() * max);
};

function rotateElement(element) {
    console.log("rotateElement");
    element.classList.toggle("tiltLeft");
    element.classList.toggle("tiltRight");
};

function brickGptInput() {
    inputField = document.getElementById("brickGptInput");
    console.log(inputField.value)
    alert(
        "BrickGpt says: 🧱🧱!  🧱🧱🧱🧱  🧱🧱  🧱🧱🧱,  🧱🧱🧱🧱🧱🧱  🧱🧱🧱🧱🧱🧱🧱.  🧱🧱🧱🧱🧱  🧱🧱  🧱🧱🧱🧱, 🧱🧱."
    )
}

function brickGptWasClicked() {
    console.log("brickGpt cliked");
}

function brickWasClicked() {
        console.log("brick cliked");
        rotateElement(brick);
        updateScore();
};

function addListenerToBrickGpt() {
    brickGpt = document.getElementById("brickGpt");
    brickGpt.addEventListener("click", brickGptWasClicked);
}

function addListenerToBrick() {
    console.log("addListenerToBrick");
    updateScore();
    let brick = document.getElementById("brick");
    console.log(brick);
    brick.addEventListener("click", brickWasClicked);
};

function changeImageSource(image, source) {
    image.src = source;
};

function addListeners() {
    addListenerToBrick();
    addListenerToBrickGpt();
}

function contentHasLoaded() {
    addListeners();
    brickGpt = document.getElementById("brickGptInput");
    brickGptInput.value = "";
}

document.addEventListener("DOMContentLoaded", contentHasLoaded);

document.addEventListener("keydown", function(event) {
    if (brickRotatingKeys.has(event.key)) {
        rotateElement(brick);
    } else if (event.key === "Enter") {
        brickGptInput();
    }
});

console.log("scripts.js loaded");


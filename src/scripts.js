// // alert("Hello, World!");
// let brick = document.getElementById("brick");
// brick.addEventListener("click", function(){
//     alert("Hello, World!");
// })

function updateScore() {
    scoreDisplay = document.getElementById("highScore");
    newScore = randomNumber(1000);
    scoreDisplay.innerText = "High score: " + newScore;
}

function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

function rotateElement(element) {
    console.log("rotateElement");
    element.classList.toggle("tiltLeft");
    element.classList.toggle("tiltRight");
}

function addListenerToBrick() {
    console.log("addListenerToBrick");
    updateScore();
    let brick = document.getElementById("brick");
    console.log(brick);
    brick.addEventListener("click", function() {
        console.log("brick cliked");
        rotateElement(brick);
        updateScore();
    });
};

document.addEventListener("DOMContentLoaded", addListenerToBrick);
console.log("scripts.js loaded");


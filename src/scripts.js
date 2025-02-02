// // alert("Hello, World!");
// let brick = document.getElementById("brick");
// brick.addEventListener("click", function(){
//     alert("Hello, World!");
// })

let score = -1;

const allowedKeys = new Set(["ArrowLeft", "ArrowRight", "a", "d", "A", "D"]);


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

function brickWasClicked() {
        console.log("brick cliked");
        rotateElement(brick);
        updateScore();
};


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

document.addEventListener("DOMContentLoaded", addListenerToBrick);

document.addEventListener("keydown", function(event) {
    pressedKey = allowedKeys.has(event.key);
    if (pressedKey) {
        brickWasClicked();
    }
});

console.log("scripts.js loaded");


// GRAPHICS LIBRARY TESTER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
initGraphics(800, 600);

// Global Variables
let staticCircle = {
    x: 200,
    y: 300,
    r: 50,
    col: "grey"
}

let movingCircle = {
    x: 200,
    y: 500,
    r: 25
}

let staticRect = {
    x: 520,
    y: 250,
    w: 160,
    h: 100,
    col: "grey"
}

let movingRect = {
    x: 520,
    y: 500,
    w: 80,
    h: 50,
    speed: 4
}

let leftArrowPressed = false;
let rightArrowPressed = false;
let upArrowPressed = false;
let downArrowPressed = false;

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // LOGIC
    circleLogic();
    rectLogic();

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    drawFrameObjects();

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

// Mouse Events
document.addEventListener("click", clickHandler);

function clickHandler(event) {
    // Check if Circle Clicked
    if (ctx.mouseInCircle(staticCircle)) {
        alert("Big Circle Clicked");
    }
    if (ctx.mouseInRect(staticRect)) {
        alert("Big Rectangle Clicked");
    }
}

// Key Events
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
    if (event.code == "ArrowLeft") {
        leftArrowPressed = true;
    } else if (event.code == "ArrowRight") {
        rightArrowPressed = true;
    } else if (event.code == "ArrowUp") {
        upArrowPressed = true;
    } else if (event.code == "ArrowDown") {
        downArrowPressed = true;
    }
}

function keyupHandler(event) {
    if (event.code == "ArrowLeft") {
        leftArrowPressed = false;
    } else if (event.code == "ArrowRight") {
        rightArrowPressed = false;
    } else if (event.code == "ArrowUp") {
        upArrowPressed = false;
    } else if (event.code == "ArrowDown") {
        downArrowPressed = false;
    }
}
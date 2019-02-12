function circleLogic() {
    // Set movingCircle to mouse position
    movingCircle.x = mouseX;
    movingCircle.y = mouseY;

    // Check Circle Collision
    if (ctx.circleCollide(movingCircle, staticCircle)) {
        staticCircle.col = "green";
    } else {
        staticCircle.col = "grey";
    }
}

function rectLogic() {
    // Use keys to move rectangle
    if (leftArrowPressed) {
        movingRect.x += -movingRect.speed;
    }
    if (rightArrowPressed) {
        movingRect.x += movingRect.speed;
    }
    if (upArrowPressed) {
        movingRect.y += -movingRect.speed;
    }
    if (downArrowPressed) {
        movingRect.y += movingRect.speed;
    }

    // Check Rectangle Collision
    if (ctx.rectCollide(movingRect, staticRect)) {
        staticRect.col = "blue";
    } else {
        staticRect.col = "grey";
    }
}

function drawFrameObjects() {
    // Draw Static Circle
    ctx.fillStyle = staticCircle.col;
    ctx.fillCircle(staticCircle.x, staticCircle.y, staticCircle.r);

    // Draw Moving Circle
    ctx.fillStyle = "green";
    ctx.fillCircle(movingCircle.x, movingCircle.y, movingCircle.r);

    // Draw Static Rectangle
    ctx.fillStyle = staticRect.col;
    ctx.fillRect(staticRect.x, staticRect.y, staticRect.w, staticRect.h);

    // Draw Moving Rectangle
    ctx.fillStyle = "blue";
    ctx.fillRect(movingRect.x, movingRect.y, movingRect.w, movingRect.h);
}
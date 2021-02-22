// define unit type that will be used every time
const global_unit_type = "px";

greenimg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRFALAAQ7+TYgAAAApJREFUeJxjYAAAAAIAAUivpHEAAAAASUVORK5CYII=";

// create canvas
mycanvas = new daize.displayCanvas(800, 500, global_unit_type);
document.body.appendChild(mycanvas);
mycanvas.style.backgroundImage = "linear-gradient(skyblue, deepskyblue)"; // change background

// create player sprite and add to canvas
mysprite = new daize.sprite(100, 100, 100, 100, 0, global_unit_type);
mycanvas.addsprite(mysprite);
mysprite.costume = "https://bit.ly/dumbguypng"; // set fill image

// create floor and add to canvas
floor = new daize.sprite(800, 100, 400, 450, 0, global_unit_type);
mycanvas.addsprite(floor);
floor.costume = greenimg; // set green fill

// record key presses
keysdown = {};
document.body.addEventListener("keydown", function(e) {
    if (!e.repeat) {
        keysdown[e.key] = true;
    }
});
document.body.addEventListener("keyup", function(e) {
    keysdown[e.key] = false;
});

// define variable for y velocity
velocity_up = 0;

function gameLoop() {
    if (keysdown.ArrowRight) {
        mysprite.x += 5;
    }
    if (keysdown.ArrowLeft) {
        mysprite.x -= 5;
    }

    // gravity
    if (!mysprite.boxcollision(floor)) {
        velocity_up -= 1;
    }
    else {
        // move sprite up until out of floor
        while (mysprite.boxcollision(floor)) {
            velocity_up = 0;
            mysprite.y -= 1;
        }
        mysprite.y += 1; // push sprite back to level
        //jump
        if (keysdown.x) {
            velocity_up = 10;
            keysdown.x = false; // prevent hold down
        }
    }
    mysprite.movevec(velocity_up, Math.PI / 2);
    requestAnimationFrame(gameLoop);
}

gameLoop();
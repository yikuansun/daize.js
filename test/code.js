const global_unit_type = "px";

greenimg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRFALAAQ7+TYgAAAApJREFUeJxjYAAAAAIAAUivpHEAAAAASUVORK5CYII=";

mycanvas = new daize.displayCanvas(800, 500, global_unit_type);
document.body.appendChild(mycanvas);

mysprite = new daize.sprite(100, 100, 100, 100, 0, global_unit_type);
mycanvas.addsprite(mysprite);
mysprite.costume = "https://bit.ly/dumbguypng";

floor = new daize.sprite(800, 100, 400, 450, 0, global_unit_type);
mycanvas.addsprite(floor);
floor.costume = greenimg;

keysdown = {};
document.body.addEventListener("keydown", function(e) {
    if (!e.repeat) {
        keysdown[e.key] = true;
    }
});
document.body.addEventListener("keyup", function(e) {
    keysdown[e.key] = false;
});

velocity_up = 0;

function gameLoop() {
    if (keysdown.ArrowRight) {
        mysprite.x += 5;
    }
    if (keysdown.ArrowLeft) {
        mysprite.x -= 5;
    }
    if (!mysprite.boxcollision(floor)) {
        velocity_up -= 1;
    }
    else {
        while (mysprite.boxcollision(floor)) {
            velocity_up = 0;
            mysprite.y -= 1;
        }
        mysprite.y += 1;
        if (keysdown.x) {
            velocity_up = 10;
            keysdown.x = false;
        }
    }
    mysprite.y -= velocity_up;
    requestAnimationFrame(gameLoop);
}

gameLoop();
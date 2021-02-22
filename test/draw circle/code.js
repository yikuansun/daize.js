// define unit type that will be used every time
const global_unit_type = "px";

greenimg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRFALAAQ7+TYgAAAApJREFUeJxjYAAAAAIAAUivpHEAAAAASUVORK5CYII=";

// create canvas
mycanvas = new daize.displayCanvas(800, 500, global_unit_type);
document.body.appendChild(mycanvas);

// create a brush to execute the stamping
brush = new daize.sprite(5, 5, 200, 200, 0, global_unit_type);
mycanvas.addsprite(brush);
brush.costume = greenimg; // set fill image

// draw a circle by continually rotating and stamping
const angle_to_rotate = Math.PI / 256
for (i = 0; i < 2 * Math.PI / angle_to_rotate; i++) {
    brush.angle += angle_to_rotate;
    brush.movevec(1, brush.angle);
    brush.stamp();
}
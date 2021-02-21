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
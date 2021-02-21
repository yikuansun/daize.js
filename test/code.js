const global_unit_type = "px";

mycanvas = new daize.displayCanvas(800, 500, global_unit_type);
document.body.appendChild(mycanvas);

mysprite = new daize.sprite(100, 100, 100, 100, 0, global_unit_type);
mycanvas.addsprite(mysprite);
mysprite.costume = "https://bit.ly/dumbguypng";

sprite2 = new daize.sprite(100, 100, 200, 200, 0, global_unit_type);
mycanvas.addsprite(sprite2);
sprite2.costume = "https://bit.ly/dumbguypng";
alert (mysprite.boxcollision(sprite2));
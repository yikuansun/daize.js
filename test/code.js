mycanvas = new daize.displayCanvas(800, 500, "px");
document.body.appendChild(mycanvas);

mysprite = new daize.sprite(100, 100, 100, 100, 0, "px");
mycanvas.addsprite(mysprite);
mysprite.costume = "https://bit.ly/dumbguypng";
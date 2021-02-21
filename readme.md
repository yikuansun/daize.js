## Download
[https://raw.githubusercontent.com/yikuansun/daize.js/master/daize.js](https://raw.githubusercontent.com/yikuansun/daize.js/master/daize.js)

# Documentation

## Setup
To import the library, use a `script` tag in the HTML.

## [Sample code](test/code.js)

## displayCanvas
> the HTML element containing the displayed sprites

create: `mycanvas = new daize.displayCanvas(width, height, unit_type)` where `width` and `height` are the dimensions and `unit_type` is the CSS unit type (`px`, `vw`...). We'd recommend storing a global constant unit type to reuse for every function requiring `unit_type`. You must use `HTMLElement.appendChild(displayCanvas)` to add the displayCanvas to the DOM.

## sprite
> objects to display within the displayCanvas

create: `mysprite = new daize.sprite(w, h, x, y, angle, unit_type)` where `w` and `h` are the dimensions, `x` and `y` specify the center position of the sprite on the canvas ((0, 0) is the top left corner), and `angle` is the sprite's rotation in radians. See [displayCanvas](#displayCanvas) for info on `unit_type`. To add `mysprite` to a displayCanvas, use `displayCanvas.addsprite(sprite)`.
  
Sprites have the following attributes:  
`sprite.costume` - the URI of the sprite's fill image  
`sprite.x` - the X position of the sprite. See [sprite](#sprite) for clarification.  
`sprite.y` - the Y position of the sprite. See [sprite](#sprite) for clarification.  
`sprite.width` - the width of the sprite. See [sprite](#sprite) for clarification.  
`sprite.height` - the height of the sprite. See [sprite](#sprite) for clarification.  
`sprite.angle` - the angle of the sprite. See [sprite](#sprite) for clarification.  
  
Sprites have the following methods:  
`sprite.remove()` - delete the sprite from its displayCanvas  
`sprite.boxcollision(othersprite)` - detect if two sprites' bounding boxes are touching.  
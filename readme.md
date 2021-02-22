# About
daize.js is an interactive graphics library for clientside JavaScript. It is light and easy to use. It was inspired by [Scratch](https://scratch.mit.edu)

# Download
[https://yikuansun.github.io/daize.js/daize.js](https://yikuansun.github.io/daize.js/daize.js)  
or import the library from online: `<script src="https://yikuansun.github.io/daize.js/daize.js"></script>`

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
`sprite.x` - the X position of the sprite.  
`sprite.y` - the Y position of the sprite.  
`sprite.width` - the width of the sprite.  
`sprite.height` - the height of the sprite.  
`sprite.angle` - the angle of the sprite.  
`sprite.costume` - the URI of the sprite's fill image.  
`sprite.visibility` - the visibility of the sprite; a number between 0 (hidden) and 1 (opaque).  
`sprite.layer` - the stack order of the sprite.  
  
Sprites have the following methods:  
`sprite.remove()` - delete the sprite from its displayCanvas.  
`sprite.movevec(magnitude, direction)` - move `magnitude` units at an angle of `direction` radians.  
`sprite.boxcollision(othersprite)` - detect if two sprites' bounding boxes are touching.  
`sprite.addEventListener(type, listener)` - add a `type` event listener which executes function `listener`. Types include onclick, onmouseover, etc.  
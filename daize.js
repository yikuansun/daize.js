/*
 daize.js
 an interactive graphics library
*/

const daize = {
    displayCanvas: class extends HTMLElement {
        constructor(width, height, unit_type) {
            super();
            this.width = width;
            this.height = height;
            this.unit_type = unit_type;
        }
        static get observedAttributes() { return ["width", "height"]; }
        attributeChangedCallback(name, oldValue, newValue) {
            switch(name) {
                case "width":
                    this.style.width = newValue.toString() + this.unit_type;
                    break;
                case "height":
                    this.style.height = newValue.toString() + this.unit_type;
                    break;
            }
        }
        connectedCallback() {
            this.style.width = this.width.toString() + this.unit_type;
            this.style.height = this.height.toString() + this.unit_type;
            this.style.backgroundColor = "aliceblue";
            this.style.display = "block";
            this.style.position = "relative";
            this.style.overflow = "hidden";
        }
        get width() {
            return parseFloat(this.getAttribute("width"));
        }
        get height() {
            return parseFloat(this.getAttribute("height"));
        }
        set width(newval) {
            this.setAttribute("width", newval);
        }
        set height(newval) {
            this.setAttribute("height", newval);
        }

        addsprite(sprite) {
            if (sprite.tagName.toLowerCase() == "daize-sprite") this.appendChild(sprite);
            else throw "daize error: not a sprite!";
        }
    },
    sprite: class extends HTMLElement {
        constructor(w, h, x, y, angle, unit_type) {
            super();
            this.width = w;
            this.height = h;
            this.x = x;
            this.y = y;
            this.angle = angle;
            this.unit_type = unit_type;
            this.costume = "";
            this.visibility = 1;
            this.layer = 1;
        }
        static get observedAttributes() { return ["width", "height", "x", "y", "angle", "costume", "visibility", "layer"]; }
        attributeChangedCallback(name, oldValue, newValue) {
            switch(name) {
                case "width":
                    this.style.width = newValue.toString() + this.unit_type;
                    break;
                case "height":
                    this.style.height = newValue.toString() + this.unit_type;
                    break;
                case "x":
                    this.style.left = (newValue - this.width / 2).toString() + this.unit_type;
                    break;
                case "y":
                    this.style.top = (newValue - this.height / 2).toString() + this.unit_type;
                    break;
                case "angle":
                    this.style.transform = "rotate(" + newValue.toString() + "rad)";
                    break;
                case "costume":
                    this.style.backgroundImage = "url('" + newValue + "')";
                    this.style.backgroundSize = "100% 100%";
                    this.style.backgroundRepeat = "no-repeat";
                    break;
                case "visibility":
                    this.style.opacity = this.visibility.toString();
                    break;
                case "layer":
                    this.style.zIndex = this.layer.toString();
                    break;
            }
        }
        connectedCallback() {
            this.style.width = this.width.toString() + this.unit_type;
            this.style.height = this.height.toString() + this.unit_type;
            this.style.top = (this.y - this.height / 2).toString() + this.unit_type;
            this.style.left = (this.x - this.width / 2).toString() + this.unit_type;
            this.style.transform = "rotate(" + this.angle.toString() + ")";
            this.style.position = "absolute";
        }
        get x() {
            return parseFloat(this.getAttribute("x"));
        }
        get y() {
            return parseFloat(this.getAttribute("y"));
        }
        get width() {
            return parseFloat(this.getAttribute("width"));
        }
        get height() {
            return parseFloat(this.getAttribute("height"));
        }
        get angle() {
            return parseFloat(this.getAttribute("angle"));
        }
        get costume() {
            return this.getAttribute("costume");
        }
        get visibility() {
            return parseFloat(this.getAttribute("visibility"));
        }
        get layer() {
            return parseFloat(this.getAttribute("layer"));
        }
        set x(newval) {
            this.setAttribute("x", newval);
        }
        set y(newval) {
            this.setAttribute("y", newval);
        }
        set width(newval) {
            this.setAttribute("width", newval);
        }
        set height(newval) {
            this.setAttribute("height", newval);
        }
        set angle(newval) {
            this.setAttribute("angle", newval);
        }
        set costume(newval) {
            this.setAttribute("costume", newval);
        }
        set visibility(newval) {
            this.setAttribute("visibility", newval);
        }
        set layer(newval) {
            this.setAttribute("layer", newval);
        }

        movevec(magnitude, direction) {
            this.x += Math.cos(direction) * magnitude;
            this.y -= Math.sin(direction) * magnitude;
        }
        boxcollision(othersprite) {
            return (
                parseFloat(this.style.top) + parseFloat(this.style.height) >= parseFloat(othersprite.style.top) &&
                parseFloat(this.style.left) + parseFloat(this.style.width) >= parseFloat(othersprite.style.left) &&
                parseFloat(this.style.top) <= parseFloat(othersprite.style.top) + parseFloat(othersprite.style.height) &&
                parseFloat(this.style.left) <= parseFloat(othersprite.style.left) + parseFloat(othersprite.style.width)
            );
        }
        stamp() {
            var cloned = this.cloneNode(true);
            cloned.setAttribute("class", "stamp");
            cloned.layer = 0;
            this.parentElement.appendChild(cloned);
        }
    }
};
customElements.define( "daize-canvas", daize.displayCanvas );
customElements.define( "daize-sprite", daize.sprite );
class Svg {
    constructor(text, tColor, sColor) {
        this.text = text;
        this.tColor = tColor;
        this.sColor = sColor;
        this.shape = '';
    }
    //update svg in promise chain structure
    shapeRender() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg">
        <${this.shape} fill="${this.sColor}"/> <text x="40" y="75" font-weight="bold" font-size= '2em' fill="${this.tColor}">${this.text}</text></svg>
        `
    }
}

class Triangle extends Svg{
    constructor(text, tColor, sColor) {
        super(text,tColor, sColor)
        this.shape = 'polygon points="200, 10 250, 190 160, 210"';
    }
}

class Square extends Svg{
    constructor(text, tColor, sColor) {
        super(text,tColor, sColor)
        this.shape = 'rect x="10" y="10" width="150" height="150"';
    }
}

class Circle extends Svg{
    constructor(text, tColor, sColor) {
        super(text,tColor, sColor)
        this.shape = 'circle cx="50" cy="70" r="50"';
    }
}

module.exports.Svg = Svg;
module.exports.Triangle = Triangle;
module.exports.Circle = Circle;
module.exports.Square = Square;

const shape = new Triangle('sss', 'black', 'blue');
console.log(shape.shapeRender());
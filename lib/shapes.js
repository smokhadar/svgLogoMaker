class Svg {
    constructor(text, tColor, sColor) {
        this.text = text;
        this.tColor = tColor;
        this.sColor = sColor;
        this.shape = '';
    }
    shapeRender() {
        return `
        <svg width="300" height="200">
        <${this.shape} ${this.sColor}"${this.text}</svg>
        `
    }
    setColor() {
        return this.sColor = `fill="${this.sColor}"/>`
    }
    setText() {
        return this.text = `<text x="45" y="75" font-weight="bold" font-size='2em' fill "${this.tColor}"> ${this.text}</text>`
    }
}

class Triangle extends Svg{
    constructor(text, tColor, sColor) {
        super(text,tColor, sColor)
        this.shape = 'polygon points="100, 0 100, 100 0, 100"';
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
        this.shape = 'circle cx="65" cy="70" r="50"';
    }
}

function generateShape({ text, tColor, shape, sColor }) {
    if(shape === 'Triangle') {
        const triangle = new Triangle(text, tColor, sColor );
        let shape = triangle.setColor().setText().shapeRender();
        return shape;
    } else if(shape === 'Circle') {
        const circle = new Circle(text, tColor, sColor );
        let shape = circle.setColor().setText().shapeRender();
        return shape;
    } else {
        const square = new Square(text, tColor, sColor );
        let shape = square.setColor().setText().shapeRender();
        return shape;
    }
}

module.exports.Svg = Svg;
module.exports.Triangle = Triangle;
module.exports.Circle = Circle;
module.exports.Square = Square;
module.exports.GenerateShape = generateShape;

class Svg {
    constructor(text, tColor, sColor) {
        this.text = text;
        this.tColor = tColor;
        this.sColor = sColor;
        this.shape = '';
    }
    shapeRender() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <${this.shape} fill="${this.sColor}"/><text x="45" y="75" font-weight="bold" font-size='2em' fill="${this.tColor}">${this.text}</text></svg>`
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
    const chosenShape = shape.toLowerCase();
    console.log("chosenShape",chosenShape)
    if(chosenShape === 'triangle') {
        let triangle = new Triangle(text, tColor, sColor);
        triangle = triangle.shapeRender();
        return triangle;
    } else if(chosenShape === 'circle') {
        let circle = new Circle(text, tColor, sColor);
        circle = circle.shapeRender();
        return circle;
    } else {
        let square = new Square(text, tColor, sColor);
        square = square.shapeRender();
        return square;
    }
}

module.exports.Svg = Svg;
module.exports.Triangle = Triangle;
module.exports.Circle = Circle;
module.exports.Square = Square;
module.exports.GenerateShape = generateShape;

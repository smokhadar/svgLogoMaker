const { Svg, Triangle, Circle, Square, GenerateShape} = require('../lib/shapes');

describe('Square', () => {
    it('shapeRender returns square svg code', () => {
        let square = new Square('IH', 'black', 'white').shapeRender();
        expect(square).toEqual(`
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="10" y="10" width="150" height="150" fill="white"/><text x="45" y="75" font-weight="bold" font-size='2em' fill="black">IH</text></svg>`);
    })
})

describe('Circle', () => {
    it('shapeRender returns circle svg code', () => {
        const circle = new Circle('IH', 'black', 'white').shapeRender();
        expect(circle).toEqual(`
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="65" cy="70" r="50" fill="white"/><text x="45" y="75" font-weight="bold" font-size='2em' fill="black">IH</text></svg>`);
    })
})

describe('Triangle', () => {
    it('shapeRender returns triangle svg code', () => {
        const triangle = new Triangle('LOL', 'blue', 'pink').shapeRender();
        expect(triangle).toEqual(`
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="100, 0 100, 100 0, 100" fill="pink"/><text x="45" y="75" font-weight="bold" font-size='2em' fill="blue">LOL</text></svg>`)
    })
})

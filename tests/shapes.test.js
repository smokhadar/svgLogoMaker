const svg = require('../lib/shapes');

describe('svg', () => {
    it('setColor returns svg code', () => {
        // const color = blue;
        const result = new svg.Svg().setColor('blue');
        expect(result).toEqual(`
        <svg xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="50" height="50" stroke="blue" fill="red" stroke-width: "15"/> </svg>
        `);
    })
})

describe('triangle', () => {
    it('create object with shape prop', () => {
        const triangle = new svg.Triangle('LOL', 'green', 'blue');
        expect(triangle).toEqual( { "text": "LOL", "tColor": "green", "sColor": "blue", "shape": "triangle" })
    })
})

// describe('svg', () => {
//     it('add color', () => {
//         const shape = new Triangle();
//         shape.setColor("blue");
//         expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
//     }
//     )
// })
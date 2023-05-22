describe('svg', () => {
    it('writeFile creates svg', () => {
        const svg = file.svg;
        expect(writeFile).to
    })
})

describe('svg', () => {
    it('add color', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    }
    )
})

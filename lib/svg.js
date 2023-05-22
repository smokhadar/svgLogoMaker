class Svg {
    constructor(text, tColor, shape, sColor) {
        this.text = text;
        this.tColor = tColor;
        this.shape = shape;
        this.sColor = sColor;
    }
    generateSvg( { sColor } ) {
        return `
        <svg xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="50" height="50" stroke=${sColor} fill="red" stroke-width: "15"/> </svg>
        `
    }
    writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!'));
    }
}

const samim = new Svg('sh', 'green', 'round', 'blue');
console.log(samim);
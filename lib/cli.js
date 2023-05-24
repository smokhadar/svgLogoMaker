const inquirer = require("inquirer");
const MaxLengthInput = require("inquirer-maxlength-input-prompt");
inquirer.registerPrompt('maxlength-input', MaxLengthInput);

const { join } = require('path');
const { writeFile } = require('fs/promises');
const shapes = require('./shapes');

class CLI {
    constructor() {
        this.title = '';
        this.color = '';
        this.shape = '';
    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'maxlength-input',
                    name: 'text',
                    message: 'Please enter up to three characters for your svg text.',
                    maxLength: 3,
                },
                {
                    type: 'list',
                    name: 'tColor',
                    message: 'Please select a color for your text',
                    choices: ['Black', new inquirer.Separator(), 'White', new inquirer.Separator(), 'Pink', new inquirer.Separator(), 'Yellow']
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Please select a shape from the options below.',
                    choices: ['Square', new inquirer.Separator(), 'Triangle', new inquirer.Separator(), 'Circle']
                },
                {
                    type: 'list',
                    name: 'sColor',
                    message: 'Please select a color for your shape',
                    choices: ['Red', new inquirer.Separator(), 'Orange', new inquirer.Separator(), 'Green', new inquirer.Separator(), 'Blue']
                },
             ])
             .then(function(answers) {
                console.log('answers', answers);
                const shape = generateShape(answers);
                writeToFile('logo.svg', shape);
                console.log('shape', shape)
             });
        }
}

function generateShape({ text, tColor, shape, sColor }) {
    if(shape === 'Triangle') {
        const triangle = new shapes.Triangle(text, sColor );
        let shape = triangle.shapeRender();
        return shape;
    } else if(shape === 'Circle') {
        const circle = new shapes.Circle(text, tColor, sColor );
        let shape = circle.shapeRender();
        return shape;
    } else {
        const square = new shapes.Square(text, tColor, sColor );
        let shape = square.shapeRender();
        return shape;
    }

}

function writeToFile(fileName, data) {
    writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!'));
}

const cli = new CLI();

cli.run();

module.exports = CLI

   // (userInput) => {
    //     userInput.shape === 'Triangle' && new shapes.Triangle()
    // }
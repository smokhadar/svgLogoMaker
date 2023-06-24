const inquirer = require("inquirer");
const MaxLengthInput = require("inquirer-maxlength-input-prompt");

inquirer.registerPrompt('maxlength-input', MaxLengthInput);

// const { join } = require('path');
const { writeFile } = require('fs/promises');
const shapes = require('./shapes');
const { cNames } = require('./colors');

class CLI {
    constructor() {
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
                    type: 'input',
                    name: 'tColor',
                    message: 'Please select a color for your text',
                    validate: tColorInput => {
                        //how to convert answer to lowercase?
                        if(cNames.indexOf(tColorInput) > -1 || colors.Regex.test(tColorInput) == true ) {
                            return true;
                        } else {
                            console.log('Please type a color name or hexidecimal value.')
                            return false;
                        }
                    }
                    // filter => trim
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Please select a shape from the options below.',
                    choices: ['Square', new inquirer.Separator(), 'Triangle', new inquirer.Separator(), 'Circle']
                },
                {
                    type: 'input',
                    name: 'sColor',
                    message: 'Please select a color for your shape',
                    validate: tColorInput => {
                        if(cNames.indexOf(tColorInput) > -1 || colors.Regex.test(tColorInput) == true ) {
                            return true;
                        } else {
                            console.log('Please type a color name or hexidecimal value.')
                            return false;
                        }
                     }
                }
             ])
             .then(function(answers) {
                const shape = shapes.GenerateShape(answers);
                writeToFile('logo.svg', shape);
                console.log('Generated logo.svg')
             });
        }
}

function writeToFile(fileName, data) {
    writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!'));
}

module.exports = CLI;
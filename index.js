const fs = require('fs').promises;
const inquirer = require('inquirer');
const { Triangle, Circle, Square, Rectangle, Ellipse, Heart } = require('./lib/shapes');

inquirer.prompt([
    {
        name: 'text',
        message: 'Enter the text for the logo (up to three characters):',
        validate: (input) => {
            return input.length > 0 && input.length <= 3;
        }
    },
    {
        name: 'textColor',
        message: 'Enter the text color or hexadecimal:',
        default: 'black'
    },
    {
        name: 'shape',
        message: 'Select a shape:',
        type: 'list',
        choices: ['Triangle', 'Circle', 'Square', 'Rectangle', 'Ellipse', 'Heart']
    },
    {
        name: 'shapeColor',
        message: 'Enter the shape color or hexadecimal:',
        default: 'blue'
    }
]).then((answers) => {
    const svgCode = generateSVG(answers.text, answers.textColor, answers.shape, answers.shapeColor);

    fs.writeFile('logo.svg', svgCode, (err) => {
        if (err) throw err;
        console.log('Logo saved as logo.svg');
    });
});

function generateSVG(text, textColor, shape, shapeColor) {
    let shapeInstance;

    switch (shape) {
        case 'Triangle':
            shapeInstance = new Triangle();
            break;
        case 'Circle':
            shapeInstance = new Circle();
            break;
        case 'Square':
            shapeInstance = new Square();
            break;
        case 'Rectangle':
            shapeInstance = new Rectangle();
            break;
        case 'Ellipse':
            shapeInstance = new Ellipse();
            break;
        case 'Heart':
            shapeInstance = new Heart();
            break;
        default:
            shapeInstance = null;
    }

    if (shapeInstance) {
        shapeInstance.setColor(shapeColor);
        const shapeSVG = shapeInstance.render();
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shapeSVG}<text x="150" y="110" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text></svg>`;
    } else {
        throw new Error('Invalid shape selected');
    }
}

import fs from 'fs';
import inquirer from 'inquirer';
import { Triangle, Circle, Square, Rectangle, Ellipse, Heart } from './lib/shapes.js';

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'What text do you want on the logo? (max 3 characters)',
        validate: input => input.length <= 3 || 'Text must be a maximum of 3 characters long'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want the text to be? (name or hex code)',
        default: 'black'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo:',
        choices: ['Triangle', 'Circle', 'Square', 'Rectangle', 'Ellipse', 'Heart']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want the shape to be? (name or hex code)',
        default: 'blue'
    }
]).then(answers => {
    createLogo(answers);
}).catch(error => {
    console.error('An error occurred:', error);
});

function createLogo(answers) {
    let shape;
    switch (answers.shape) {
        case 'Triangle':
            shape = new Triangle(answers.shapeColor);
            break;
        case 'Circle':
            shape = new Circle(answers.shapeColor);
            break;
        case 'Square':
            shape = new Square(answers.shapeColor);
            break;
        case 'Rectangle':
            shape = new Rectangle(answers.shapeColor);
            break;
        case 'Ellipse':
            shape = new Ellipse(answers.shapeColor);
            break;
        case 'Heart':
            shape = new Heart(answers.shapeColor);
            break;
    }

    const svgContent = shape.render();
    const finalSvg = svgContent.replace('</svg>', `<text x="50%" y="50%" fill="${answers.textColor}" dominant-baseline="middle" text-anchor="middle">${answers.text}</text></svg>`);

    fs.writeFile('logo.svg', finalSvg, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg');
    });
}

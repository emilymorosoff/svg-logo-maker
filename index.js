const inquirer = require('inquirer');
const { Triangle, Circle, Square, Rectangle, Ellipse, Heart } = require('./lib/shapes');

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

const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes.js');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Welcome to the logo maker. Please select a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter a shape color by name or hexidecimal code:',
        },
        {
            type: 'input',
            name: 'textContent',
            message: 'Please enter an abbreviation of 1-3 characters:',
            validate: async(input) => {
                if(input.length > 3 || input.length < 1){
                    return 'Please enter 1-3 characters';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Please enter a text color by name or hexidecimal code:',
        },
])
.then((data) => {
    const createSVG = (data) => {
        let textContent = data.textContent;
        let textColor = data.textColor;
        let shape = data.shape;
        let shapeColor = data.shapeColor;
        let shapeClass;

        if(shape === "circle"){
            shapeClass = new Circle();
        } else if(shape === "triangle"){
            shapeClass = new Triangle();
        } else if(shape === "square"){
            shapeClass = new Square();
        }
        shapeClass.setColor(shapeColor);

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeClass.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${textContent}</text>
        </svg>
        `
    };
    const svgCode = createSVG(data);
    const fileName = `./examples/${data.textContent.toLowerCase().split(' ').join('')}${data.shapeColor.toLowerCase().split(' ').join('')}${data.shape.toLowerCase().split(' ').join('')}logo.svg`;

    fs.writeFile(fileName, svgCode, (err) =>
        err ? console.log(err) : console.log(`Generated ${fileName} successfully`)
  );
});
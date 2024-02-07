const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text content',
            message: 'Please enter a company abbreviation of 1-3 characters',
        },
        {
            type: 'input',
            name: 'text color',
            message: 'Please enter a text color by name or hexidecimal code',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please select a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shape color',
            message: 'Please enter a shape color by name or hexidecimal code',
        }
])
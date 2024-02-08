# SVG Logo Maker

Video of the logo maker in action:
https://drive.google.com/file/d/1qqSwEqWOQB8MYLBOL_hH-xlvA3T6aDAm/view

## Description

This is a command line application that allows the user to create an SVG logo by answering four prompts for shape, fill color, text, and text color. 

- The application is designed for a freelance developer who wants to avoid hiring a graphic designer and generate simple logos.
- This application uses Node.js to run in the terminal, and uses Inquirer.js to create an interactive environment for the user. The application validates the user's entries and dynamically creates an SVG logo file using JavaScript. The SVG file is given a unique descriptive name based on the text, shape color, and shape of the logo to help distinguish file names when multiple logos are generated.
- The application lets the user create a logo quickly and efficiently. This logo can be used as a stand-in while designing websites around a specific color scheme, or as a final project logo if design quality is no object. 
- During this project, I learned the capabilities of Inquirer.js and the file system functionality of Node.js. I also learned the basics of how SVG code works and can be dynamically manipulated by JavaScript. 

## Installation

To run this project, Node.js and Inquirer.js must be installed.

## Usage

The project is run using the command "node index.js". The user must then follow the four prompts to choose a shape, shape color, text, and text color. The generated SVG logo file can be viewed in a web browser by selecting "copy path" and pasting the link in the browser search bar. 

## License

This project uses an MIT license. Please see license information project repository. 

## Tests

This project includes test written with the Jest testing framework to verify the correct functionality of the render method of each shape class, given color names as well as hexidecimal color codes. 
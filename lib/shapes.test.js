const { Circle, Triangle, Square } = require('./shapes.js');

describe('Circle class', () => {
    describe('render method', () => {
        it('should print the appropriate code for an SVG circle after use of setColor method', () => {
            const circle = new Circle();
            circle.setColor("blue");
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill = "blue"/>');
        })
    })

})
    
describe('Triangle class', () => {
    describe('render method', () => {
        it('should print the appropriate code for an SVG triangle after use of setColor method', () => {
            const triangle = new Triangle();
            triangle.setColor("green");
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill = "green"/>');
        })
    })
})

describe('Square class', () => {
    describe('render method', () => {
        it('should print the appropriate code for an SVG square after use of setColor method', () => {
            const square = new Square();
            square.setColor("red");
            expect(square.render()).toEqual('<rect x="50" y="20" width="200" height="200" fill = "red"/>');
        })
    })
})
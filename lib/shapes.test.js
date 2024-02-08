const { Circle, Triangle, Square } = require('./shapes.js');

describe('Circle class', () => {
    describe('render method', () => {
        it('should return the appropriate code for an SVG circle after use of setColor method with color word', () => {
            const circle = new Circle();
            circle.setColor("blue");
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill = "blue"/>');
        })
        it('should return the appropriate code for an SVG circle after use of setColor method with hexidecimal', () => {
            const circle = new Circle();
            circle.setColor("#8000ff");
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill = "#8000ff"/>');
        })
    })

})
    
describe('Triangle class', () => {
    describe('render method', () => {
        it('should return the appropriate code for an SVG triangle after use of setColor method with color word', () => {
            const triangle = new Triangle();
            triangle.setColor("green");
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill = "green"/>');
        })
        it('should return the appropriate code for an SVG triangle after use of setColor method with hexidecimal', () => {
            const triangle = new Triangle();
            triangle.setColor("#80ff00");
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill = "#80ff00"/>');
        })
    })
})

describe('Square class', () => {
    describe('render method', () => {
        it('should return the appropriate code for an SVG square after use of setColor method with color word', () => {
            const square = new Square();
            square.setColor("red");
            expect(square.render()).toEqual('<rect x="50" y="20" width="200" height="200" fill = "red"/>');
        })
        it('should return the appropriate code for an SVG square after use of setColor method with hexidecimal', () => {
            const square = new Square();
            square.setColor("#00bfff");
            expect(square.render()).toEqual('<rect x="50" y="20" width="200" height="200" fill = "#00bfff"/>');
        })
    })
})
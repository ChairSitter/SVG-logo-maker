class Circle {
    constructor(){
        this.shapeCode = 'cx="150" cy="100" r="80"';
        this.shapeName = "circle";
    }
    setColor(color){
        this.color = color;
    }
    render(){
        return `<${this.shapeName} ${this.shapeCode} fill = "${this.color}">`;
    }
}

class Triangle {
    constructor(){
        this.shapeCode = 'points="150, 18 244, 182 56, 182"';
        this.shapeName = "polygon";
    }
    setColor(color){
        this.color = color;
    }
    render(){
        return `<${this.shapeName} ${this.shapeCode} fill = "${this.color}">`;
    }
}

class Square {
    constructor(){
        this.shapeCode = 'x="10" y="10" width="30" height="30"';
        this.shapeName = "square";
    }
    setColor(color){
        this.color = color;
    }
    render(){
        return `<${this.shapeName} ${this.shapeCode} fill = "${this.color}">`;
    }
}

module.exports = { Circle, Triangle, Square };

// let bryansHead = new Circle();
// let pizza = new Triangle()
// let chessBoard = new Square()
// bryansHead.setColor("blue");
// pizza.setColor('green');
// chessBoard.setColor('yellow');


// console.log(bryansHead)
// console.log(pizza)
// console.log(chessBoard)
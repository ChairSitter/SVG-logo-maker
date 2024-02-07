class Shape {
    // constructor(){
    // }
    setColor(color){
        this.color = color;
    }
    render(){
        return `<${this.shapeName} ${this.shapecode} fill = "${this.color}"`;
    }
}

class Circle extends Shape {
    constructor(){
        this.shapeCode = 'cx="150" cy="100" r="80"';
        this.shapeName = "circle";
    }
}

class Triangle extends Shape {
    constructor(shapeCode){
        this.shapeCode = 'points="150, 18 244, 182 56, 182"';
        this.shapeName = "polygon";
    }
}

class Square extends Shape {
    constructor(shapeCode){
        this.shapeCode = 'x="10" y="10" width="30" height="30"';
        this.shapeName = "circle";
    }
}

// let bryansHead = new Circle('cx="25" cy="75" r="20"');
// bryansHead.setColor("blue");

// console.log(bryansHead)
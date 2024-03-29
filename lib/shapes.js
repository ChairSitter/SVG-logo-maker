class Circle {
    constructor(){
        this.shapeCode = 'cx="150" cy="100" r="80"';
        this.shapeName = "circle";
    }
    setColor(color){
        this.color = color;
    }
    render(){
        return `<${this.shapeName} ${this.shapeCode} fill = "${this.color}"/>`;
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
        return `<${this.shapeName} ${this.shapeCode} fill = "${this.color}"/>`;
    }
}

class Square {
    constructor(){
        this.shapeCode = 'x="50" y="20" width="200" height="200"';
        this.shapeName = "rect";
    }
    setColor(color){
        this.color = color;
    }
    render(){
        return `<${this.shapeName} ${this.shapeCode} fill = "${this.color}"/>`;
    }
}

module.exports = { Circle, Triangle, Square };
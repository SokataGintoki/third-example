'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(33, 17, 'Fuck off', 'brown');

div.showMyProps();
console.log(div.calcArea());

const square = new Rectangle(10, 10);
const romb = new Rectangle(15, 66);
const long = new Rectangle(52, 333);

console.log(long.calcArea());
console.log(square.calcArea());
console.log(romb.calcArea());
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

const square = new Rectangle(10, 10);
const romb = new Rectangle(15, 66);

console.log(square.calcArea());
console.log(romb.calcArea());
// no object
// can have abstract methods

abstract class Shape {
  abstract area(): number;
  describe() {
    console.log('This is a shape.');
  }
}

class Circle extends Shape {
  area(): number {
    return Math.PI * this.radius ** 2;
  }
  constructor(public radius: number) {
    super();
  }
}

const c = new Circle(5);
c.describe();
console.log(c.area());

abstract class Shape {
  constructor(public color: string) {}

  abstract area(): number;

  describe() {
    console.log(`This shape is ${this.color}`);
  }
}

class Rectangle extends Shape {
  constructor(color: string, public width: number, public height: number) {
    super(color);
  }
  area(): number {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(color: string, public radius: number) {
    super(color);
  }
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

const shapes: Shape[] = [
  new Rectangle('red', 10, 7),
  new Circle('blue', 7),
  new Rectangle('green', 4, 3),
];

shapes.forEach(shape => {
  shape.describe();
  console.log(`Area: ${shape.area()}`);
  console.log('---------------------');
});

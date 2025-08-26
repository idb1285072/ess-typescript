class Shape {
  area(): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  override area(): number {
    return Math.PI * this.radius ** 2;
  }
}

const c = new Circle(5);
console.log(c.area()); // 78.54
// subclass redefine a parent method
// override keyword optional

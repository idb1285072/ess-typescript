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

abstract class Vehicle {
  constructor(public brand: string) {}
  start() {
    console.log('Starting engine...');
  }
  abstract drive(): void;
}
class Car extends Vehicle {
  drive(): void {
    console.log(`${this.brand} car is driving.`);
  }
}
const car1 = new Car('Toyota');
car1.start();
car1.drive();
// polimorphism + encapsulation

const car2: Vehicle = new Car('BMW');
car2.drive();

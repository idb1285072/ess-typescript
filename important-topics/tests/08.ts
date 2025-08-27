class Animal {
  protected move() {
    console.log(`${this.name} animal moved`);
  }
  constructor(public name: string) {}
}

class Dog extends Animal {
  constructor(public name: string, private breed: string) {
    super(name);
  }
  move() {
    console.log(`${this.name} dog moved`);
  }
}

const dog1: Dog = new Dog('Rex', 'A');
dog1.move();

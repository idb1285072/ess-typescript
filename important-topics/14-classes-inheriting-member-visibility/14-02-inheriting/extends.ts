class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  move(distance: number) {
    console.log(`${this.name} moved ${distance} meters`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!');
  }
}

const dog1 = new Dog('Buddy');
dog1.bark();
dog1.move(10);

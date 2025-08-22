class Animal {
  name: string;
  public age: number = 43;
  constructor(name: string) {
    this.name = name;
    console.log('animal');
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  age: number = 55;
  constructor(name: string) {
    console.log('dog');
    super(name);
  }
  speak(): void {
    super.speak();
    console.log(`${this.name} barks.`);
  }
  getAge(): void {
    console.log(`dog age is ${this.age}`);
  }
}

const dog1 = new Dog('Rex');
dog1.speak();
dog1.getAge();

// super.constructor()
// super.method()
// super.getter

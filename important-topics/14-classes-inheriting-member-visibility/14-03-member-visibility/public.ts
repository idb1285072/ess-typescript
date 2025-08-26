class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public move() {
    console.log(`${this.name} is moving`);
  }
}

const a = new Animal('Dog');
console.log(a.name); // accessible
a.move(); // accessible

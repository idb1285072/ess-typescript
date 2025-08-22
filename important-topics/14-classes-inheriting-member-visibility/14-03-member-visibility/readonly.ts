class Car {
  readonly brand: string;

  constructor(brand: string) {
    this.brand = brand; // allowed in constructor
  }
}

const c = new Car('Toyota');
console.log(c.brand); // read
// c.brand = "Honda"; Error: readonly

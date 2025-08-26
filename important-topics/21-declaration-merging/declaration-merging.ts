class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number
  ) {}
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

namespace Person {
  export const species = 'Homo sapiens';
}

const p = new Person('Murad', 'Hossen', 54);
console.log(p.firstName);
console.log(Person.species);

enum Color {
  Red,
  Green,
  Blue,
}

namespace Color {
  export function toHex(c: Color) {
    switch (c) {
      case Color.Red:
        return '#ff0000';
      case Color.Green:
        return '#00ff00';
      case Color.Blue:
        return '#0000ff';
    }
  }
}

console.log(Color.toHex(Color.Green)); // "#00ff00"
console.log(Color.Blue);

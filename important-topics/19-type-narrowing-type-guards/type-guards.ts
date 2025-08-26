// built-in type guards: typeof, instanceof, in
// user-defined type guards: functions that return a type predicate

// typeof - primitive types
function logId(id: string | number) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase()); // string
  } else {
    console.log(id.toFixed(2)); // number
  }
}

// instanceof - class or constructor
class User {
  constructor(
    private firstName: string,
    private lastName: string,
    private age: number
  ) {}
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  constructor(private name: string, private registrationNumber: number) {}
  getCompanyInfo() {
    return `${this.name} (${this.registrationNumber})`;
  }
}

function printEntityInfo(entity: User | Company) {
  if (entity instanceof User) {
    console.log(`User: ${entity.getFullName()}`);
  } else {
    console.log(`Company: ${entity.getCompanyInfo()}`);
  }
}
printEntityInfo(new User('John', 'Doe', 30));
printEntityInfo(new Company('Acme Corp', 123456));

// in - object with specific property
interface Square {
  kind: 'square';
  size: number;
}
interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}
interface Circle {
  kind: 'circle';
  radius: number;
}
type Shape = Square | Rectangle | Circle;
function getArea(shape: Shape): number {
  if ('size' in shape) {
    return shape.size * shape.size; // Square
  } else if ('width' in shape && 'height' in shape) {
    return shape.width * shape.height; // Rectangle
  } else {
    return Math.PI * shape.radius ** 2; // Circle
  }
}
console.log(getArea({ kind: 'square', size: 4 })); // 16
console.log(getArea({ kind: 'rectangle', width: 4, height: 5 })); // 20
console.log(getArea({ kind: 'circle', radius: 3 })); // ~28.27

// user-defined type guards
interface Cat {
  meow: () => void;
}
interface Dog {
  bark: () => void;
}
function isCat(animal: Cat | Dog): animal is Cat { // param is SomeType
  return (animal as Cat).meow !== undefined;
}
function makeSound(animal: Cat | Dog) {
  if (isCat(animal)) {
    animal.meow(); // Cat
  } else {
    animal.bark(); // Dog
  }
}
makeSound({ meow: () => console.log('Meow!') });
makeSound({ bark: () => console.log('Woof!') });

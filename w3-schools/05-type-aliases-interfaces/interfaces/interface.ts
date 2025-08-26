interface Rectangle {
  height: number;
  width: number;
}
// extending interface
interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRectangle: ColoredRectangle = {
  height: 10,
  width: 7,
  color: 'red',
};

console.log(coloredRectangle);

// optional properties
interface Person {
  name: string;
  age?: number;
}
const person1: Person = { name: 'Murad', age: 30 };
const person2: Person = { name: 'Ali' };
console.log(person1);
console.log(person2);

// readonly properties
interface User {
  readonly id: number;
  username: string;
}
const user: User = { id: 1, username: 'Murad' };
user.username = 'Hossen';
// user.id = 2;
console.log(user);

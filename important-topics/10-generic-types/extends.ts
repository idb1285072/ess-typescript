// extends -> is assignable to
// class and interface inheritance
class Animal {
  move() {
    console.log('Moving...');
  }
}
class Dog extends Animal {
  bark() {
    console.log('Woof!');
  }
}

const d = new Dog();
d.move(); // from Animal
d.bark(); // from Dog
interface Person {
  name: string;
}
interface Employee extends Person {
  employeeId: number;
}
const e: Employee = { name: 'Alice', employeeId: 123 };

// generic constraints
function logLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}
logLength('hello'); // string has length
logLength([1, 2, 3]); // array has length
// logLength(42);  number has no length

function compare<T extends string | number>(a: T, b: T): boolean {
  return a === b;
}
compare(10, 20); // number
compare('a', 'b'); // string
// compare(true, false); not allowed

function getProp<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
const user = { id: 1, name: 'Alice' };
getProp(user, 'id'); // number
getProp(user, 'name'); // string
// getProp(user, "age"); Error

function merge<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}
const merged = merge({ name: 'Alice' }, { age: 25 });
// { name: string; age: number }

// conditional types
type IsNumber<T> = T extends number ? 'yes' : 'no'; // if T asignable to number ? "yes" : "no"
type A = IsNumber<number>; // "yes"
type B = IsNumber<string>; // "no"

type ExtractType<T, U> = T extends U ? T : never;
type Result = ExtractType<string | number | boolean, string | number>; // string | number

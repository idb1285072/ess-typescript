/*
Problem 2: Deep Merge Utility
Task:
Create a merge function with overloads:
- (a: object, b: object) => object
- (a: string[], b: string[]) => string[]
- (a: number[], b: number[]) => number[]
Challenge:
Ensure that merging incompatible types (e.g., string[] with number[]) throws a compile-time error. Use overloads and generic constraints.
*/

interface A {
  id: number;
  name: string;
  email: string;
}
interface B {
  name: string;
  country: string;
  isActive: boolean;
}

const a: A = {
  id: 2,
  name: 'Raj',
  email: 'raj@gmail.com',
};
const b: B = {
  name: 'Raja',
  country: 'Bangladesh',
  isActive: true,
};
const char1 = ['a', 'b', 'c'];
const char2 = ['d', 'f', 'c'];
const num1 = [1, 2, 3];
const num2 = [3, 4, 5, 6];

function merge<T>(a: T[], b: T[]): T[];
// function merge(a: number[], b: number[]): number[];
function merge(a: object, b: object): object;
function merge<T, U extends object>(a: T[] | U, b: T[] | U): T[] | U {
  if (Array.isArray(a) && Array.isArray(b)) return [...a, ...b];
  else return { ...a, ...b };
}
console.log(merge(char1, char2));
console.log(merge(num1, num2));
console.log(merge(char1, num1));
console.log(merge(a, b));

// a variable hold multiple types - pipe symbol
let value: string | number;
value = 'Hello';
value = 6;
// value = true;

type Status = 'success' | 'error' | 'pending'; // string literals
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9; // number literals
let currentStatus: Status;
currentStatus = 'success';
// currentStatus = 'fail';

type Admin = { role: 'admin'; level: number };
type User = { role: 'user'; name: string };
let person: Admin | User;
person = { role: 'admin', level: 1 };
person = { role: 'user', name: 'Alice' };

// boolean
type MyBool = true | false; // boolean

function wrapInArray(obj: string | string[]) {
  if (typeof obj === 'string') return [obj];
  return obj;
}
console.log(wrapInArray('Hello'));
console.log(wrapInArray(['a', 'b', 'c']));

function getLength(obj: string | string[]) {
  return obj.length;
}
console.log(getLength('Hello'));
console.log(getLength(['a', 'b', 'c']));


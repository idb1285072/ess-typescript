let userName: string;
let userAge = 64;
userName = 'Murad';

console.log(userName);

function add(a: number, b = 5) {
  return a + b;
}
console.log(add(10));
console.log(add(10, 3));
// console.log(add(10, '5'));

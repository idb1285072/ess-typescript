// return type
const printMessage = (message: string): void => console.log(message);
printMessage('Hello, World!');

// parameter type
const addNumbers = (a: number, b: number): number => a + b;
console.log(addNumbers(5, 10));

// optional parameter
const greet = (name: string, greeting?:string): string => `Hello, ${name}${greeting ? `, ${greeting}` : ''}!`;
console.log(greet('Alice'));
console.log(greet('Bob', 'Good morning'));

// default parameter
const multiply = (a: number, b: number = 2): number => a * b;
console.log(multiply(5));
console.log(multiply(5, 3));

// named parameter
const divide = ({dividend, divisor}: { dividend: number, divisor: number }): number => {
  if (divisor === 0) {
    throw new Error('Cannot divide by zero');
  }
  return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
console.log(divide({ dividend: 10, divisor: 5 }));
// console.log(divide({ dividend: 10, divisor: 0 })); // error: Cannot divide by zero

// rest parameter
const sum = (...numbers: number[]): number => numbers.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(10, 20, 30));
console.log(sum(100, 200, 300, 400, 500, 600, 700, 800, 900, 1000));

// multiple signatures for same function name
// number of arguments/type of arguments
function identity(x: number): number;
function identity(x: string): string;

function identity(x: number | string): number | string {
  return x;
}
let a = identity(45);
let b = identity('hi');

// Union type
function double(x: number | string): number | string {
  return typeof x === 'number' ? x * 2 : x + x;
}
let n = double(43); // n is number | string




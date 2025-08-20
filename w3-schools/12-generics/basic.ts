function identity<T>(arg: T): T {
  return arg;
}
let output = identity<string>("Hello"); // T is string
let num = identity<number>(123);        // T is number
console.log(output);
console.log(num)

// multiple parameter
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

// default value for generic parameter

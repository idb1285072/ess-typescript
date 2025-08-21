function identity<T>(arg: T): T {
  return arg;
}
let output1 = identity<string>('Hello');
let output2 = identity<number>(4343);
let output3 = identity(244435435234534345n); // inferred
console.log(output1, output2, output3);

// extends in generic type
function print<T extends string | number>(arg: T) {
  console.log(arg);
}
print<string>('Hello');
print<number>(251);
// print<boolean>(true);

// default type parameters
type ApiResponse<T = unknown> = {
  success: boolean;
  data: T;
};
const response: ApiResponse = {
  success: true,
  data: "Default to unknown",
};

// multiple type parameter
function merge<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}


/*
Naming Convensions
T => Type
K => Key
V => Value
E => Element
R => Return
*/

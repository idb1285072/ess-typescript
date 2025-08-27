let x: any = 32;
console.log(x.length); // no error in compile-time but run-time error occers

let y: unknown = 32;
// console.log(y.length); // compile-time error
if (typeof y === 'string') console.log(y.length);

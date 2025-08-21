type A = { a: string };
type B = { b: number };
let x: A | B; // A or B
let y: A & B; // must both a and b

x = { a: 'Hello' };
x = { b: 32 };
x = { a: 'Hello', b: 43 };
y = { a: 'Hello', b: 32 };

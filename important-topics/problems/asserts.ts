function assertString(value: any): asserts value is string {
  if (typeof value !== 'string') throw new Error('Not a string');
}

// discriminated union -> a union type with a unique literal property used for narrowing

// const enum -> erased completely at runtime and values are inlined. no runtime object created

// readonly applies to properties and arrays, const applies to variables. readonly vs const

let arr = [1, 2, 3] as const;
// as const

type Flatten<T> = T extends any[] ? T[number] : T;
type Result = Flatten<string[]>;

type X = { a: number } & { a: string };
// X: {a: never}

// element type of an array -> T[number]

type A = [];
type B = A[number]; // never

let x: unknown;
if (typeof x === 'string') {
  let y: string = x;
}

let a: void = undefined;

let d: never = (() => {
  throw new Error('never value');
})();
let c: never = d; // ✅ No error now
let b: void = c;

// never -> never 

type T1 = string | never; // string
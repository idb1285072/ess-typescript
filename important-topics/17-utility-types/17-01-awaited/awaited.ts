// await in async functions or .then() methods on Promises - unwrap Promise types
type A = Awaited<Promise<string>>;
type B = Awaited<Promise<Promise<number>>>;
type C = Awaited<string | Promise<number>>;
type D = Awaited<Promise<string | Promise<number>>>;
type E = Awaited<boolean>;
type F = Awaited<null>;
type G = Awaited<undefined>;
type H = Awaited<never>;

interface thenable {
  then(onfulfilled: (value: number) => void): void;
}
type I = Awaited<thenable>; // number

// before TS 4.5, people used custom utility types like UnwrapPromise<T> or wrote complex conditional types.

async function example(): Promise<string> {
  return 'Hello, World!';
}
type J = Awaited<typeof example>; // ()=>Promise<string>
type K = Awaited<ReturnType<typeof example>>; // string

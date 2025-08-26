// input function type and output return type

type Fn = (a: number, b: string) => boolean;
type R = ReturnType<Fn>; // boolean

function greet(name: string): string {
  return `Hello, ${name}!`;
}
type GreetReturnType = ReturnType<typeof greet>; // string

function rollDice() {
  return Math.random() > 0.5 ? 1 : 'six';
}
type DiceReturn = ReturnType<typeof rollDice>; // number | string

// async functions
async function fetchUser() {
  return { id: 1, name: 'Alice' };
}
type UserResponse = ReturnType<typeof fetchUser>; // Promise<{ id: number; name: string }>

// higher-order functions
function makeAdder(x: number) {
  return (y: number) => x + y;
}
type Adder = ReturnType<typeof makeAdder>; // (y: number) => number

// It captures the return type of the last overload signature, not all overloads
function fn(x: string): string;
function fn(x: number): number;
function fn(x: any) { return x; }
type F = ReturnType<typeof fn>; // number | string (but inferred from implementation signature, not declarations!)

// Why ReturnType?
function createConfig() {
  return { port: 8080, debug: true };
}
// BAD: manually duplicate the return type
// type Config = { port: number; debug: boolean };
type Config = ReturnType<typeof createConfig>;


interface User {
  name: string;
  age: number;
}
function f(user: User): void;
function f(name: string, age: number): void;
function f(user: User | string, age?: number): void {
  if (typeof user === 'string') console.log(`Name: ${user} Age: ${age}`);
  else console.log(`Name: ${user.name} Age: ${user.age}`);
}

const user1: User = { name: 'Raj', age: 32 };
f(user1);
f('Raj', 32);

type User = { name: string; age: number };
function f(user: User): void;
function f(name: string, age: number): void;
function f(user: User | string, age?: number): void {
  if (typeof user === 'string') {
    console.log(`name: ${name} age: ${age}`);
    return;
  }
  console.log(`name: ${user.name} age: ${age}`);
}

f('Raj', 50);
f({ name: 'Raj', age: 43 });

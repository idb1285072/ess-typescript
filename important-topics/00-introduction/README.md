# What is TypeScript?

- **TypeScript (TS)** is a programming language developed by Microsoft.
- It’s a **superset of JavaScript** → meaning any valid JavaScript code also works in TypeScript.
- The main difference: **TypeScript adds static typing**.

---

## Why use TypeScript?

1. **Type Safety** – helps catch errors at compile time instead of runtime.

   ```ts
   let age: number = 25;
   age = 'twenty-five'; // Error: Type 'string' is not assignable to type 'number'
   ```

2. **Better Tooling** – editors like VS Code provide autocompletion, refactoring, and type hints.

3. **Scalability** – large projects are easier to maintain when types are enforced.

4. **Modern JavaScript Features** – supports ES6+ features and compiles them to older JS if needed.

---

## Basic Features

### 1. Variables with Types

```ts
let username: string = 'Alice';
let age: number = 30;
let isAdmin: boolean = true;
```

### 2. Functions with Types

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

### 3. Arrays & Objects

```ts
let numbers: number[] = [1, 2, 3];
let person: { name: string; age: number } = {
  name: 'Alice',
  age: 30,
};
```

### 4. Interfaces

```ts
interface User {
  id: number;
  name: string;
  email?: string; // optional property
}

const user: User = { id: 1, name: 'Alice' };
```

### 5. Classes

```ts
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a noise`);
  }
}

let dog = new Animal('Dog');
dog.speak();
```

---

## 🛠 How TypeScript Works

1. You write `.ts` files with types.
2. TypeScript **compiles** them into plain JavaScript (`.js`).
3. That JavaScript runs in browsers or Node.js.

Example:

```sh
tsc index.ts   # compiles to index.js
```

---

**In short:**
TypeScript = JavaScript + **types** + **tooling support** → making code safer and more maintainable.

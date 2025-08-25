Variance in TypeScript is contextual:

- Covariant: Return types
- Contravariant: Function parameters
- Invariant: Generic type parameters by default

---

### 1. What is the type of `x`?

```ts
function identity<T>(arg: T): T {
  return arg;
}
let x = identity('hello');
```

A. `any`
B. `string`
C. `T`
D. `unknown`

---

### 2. What happens here?

```ts
function f<T extends number>(x: T) {
  return x;
}
f('hi');
```

A. Works fine.
B. Error: `"hi"` not assignable to `number`.
C. `"hi"` is coerced to number.
D. Runtime only.

---

### 3. Which is correct about constraints?

```ts
function f<T extends { length: number }>(x: T) {
  return x.length;
}
```

A. Works only with arrays.
B. Works with any type having `length`.
C. Error unless T is `Array`.
D. Runtime error.

---

### 4. What does this return?

```ts
function getProp<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
const x = getProp({ a: 1, b: 2 }, 'a');
```

A. `number`
B. `"a"`
C. `any`
D. `never`

---

### 5. What happens here?

```ts
function f<T = string>(x?: T): T {
  return (x ?? 'default') as T;
}
let y = f();
```

A. `y: string`
B. `y: any`
C. `y: unknown`
D. Error

---

### 6. What is true about variance in generics?

A. TypeScript generics are covariant by default.
B. TypeScript generics are invariant by default.
C. Depends on strict mode.
D. TypeScript generics are contravariant.

---

### 7. What happens with this?

```ts
interface Box<T> {
  value: T;
}
type A = Box<string> extends Box<unknown> ? true : false;
```

A. `true`
B. `false`
C. Error
D. `never`

---

### 8. What happens here?

```ts
function f<T>(x: T[]): T {
  return x[0];
}
let a = f([1, 2, 3]);
```

A. `a: any`
B. `a: number`
C. `a: T`
D. Error

---

### 9. What happens here?

```ts
function f<T extends string | number>(x: T): T {
  return x;
}
let y = f(true);
```

A. Works fine.
B. Error: `true` not assignable to `string | number`.
C. `y: boolean`.
D. Runtime only.

---

### 10. What happens with default generics?

```ts
interface Api<T = string> {
  value: T;
}
let obj: Api = { value: 'hi' };
```

A. `obj.value: string`
B. `obj.value: any`
C. Error: must provide type param.
D. `obj.value: unknown`

---

### 11. What does this mean?

```ts
type ExtractArray<T> = T extends (infer U)[] ? U : T;
type A = ExtractArray<number[]>;
```

A. `number[]`
B. `number`
C. `any`
D. `unknown`

---

### 12. What happens here?

```ts
type Foo<T> = T extends string ? 'yes' : 'no';
type A = Foo<'abc'>;
```

A. `"yes"`
B. `"no"`
C. `never`
D. Error

---

### 13. Which is true about distributive conditional types?

```ts
type Foo<T> = T extends string ? 'S' : 'N';
type A = Foo<string | number>;
```

A. `"S" | "N"`
B. `"S"`
C. `"N"`
D. Error

---

### 14. What happens here?

```ts
function f<T extends string | number>(x: T): string {
  return x.toString();
}
```

A. Works fine.
B. Error: T might not have toString.
C. Runtime error.
D. Needs explicit `any`.

---

### 15. What is true about `keyof` with generics?

```ts
function f<T>(obj: T, key: keyof T) {
  return obj[key];
}
```

A. Key is type-safe.
B. Key is `string`.
C. Key is `any`.
D. Key must be a number.

---

### 16. What happens here?

```ts
type Foo<T> = [T] extends [string] ? 'yes' : 'no';
type A = Foo<string | number>;
```

A. `"yes" | "no"`
B. `"no"`
C. `"yes"`
D. Error

---

### 17. Which works for recursive generics?

A.

```ts
interface Tree<T> {
  value: T;
  children?: Tree<T>[];
}
```

B.

```ts
type Tree<T> = T | Tree<T>[];
```

C. Both A and B
D. Neither

---

### 18. What is the type of `x`?

```ts
function f<T extends { id: number }>(obj: T): number {
  return obj.id;
}
let x = f({ id: 42, name: 'hi' });
```

A. `string`
B. `number`
C. `any`
D. Error

---

### 19. What is the output?

```ts
function f<T>(x: T): string {
  return typeof x;
}
console.log(f(123));
```

A. `"number"`
B. `"string"`
C. `T`
D. Error

---

### 20. Which is true about generic classes?

```ts
class Box<T> {
  constructor(public value: T) {}
}
```

A. Type param inferred at construction.
B. Must always explicitly provide type param.
C. Type param erased at runtime.
D. Both A and C.

## 🔹 `any` vs `unknown`

### 1. Which statement about `any` is correct?

A. Disables all type checking.
B. Requires type narrowing before use.
C. Cannot be assigned to `unknown`.
D. Causes compile-time errors.

---

### 2. Which statement about `unknown` is true?

A. Behaves identically to `any`.
B. Must be type-checked before use.
C. Cannot be assigned to any type.
D. Can be directly used as a number.

---

### 3. What happens here?

```ts
let x: any = 5;
let y: number = x;
```

A. Compiles successfully.
B. Compilation error.
C. Runtime error.
D. Converts `x` to `string`.

---

### 4. What happens here?

```ts
let x: unknown = 5;
let y: number = x;
```

A. Compiles successfully.
B. Compilation error.
C. Runtime error.
D. Converts `x` to `number`.

---

### 5. Which assignment is valid?

```ts
let a: any = 10;
let b: unknown = 20;
let c: string;
```

A. `c = a;`
B. `c = b;`
C. Both A and B
D. Neither

---

### 6. Which is safer for API response typing?

A. `any`
B. `unknown`
C. `never`
D. `void`

---

---

## 🔹 `undefined` and `null`

### 7. In **strict mode** (`strictNullChecks: true`), what is the type of an uninitialized variable?

```ts
let x;
```

A. `any`
B. `undefined`
C. `null`
D. `never`

---

### 8. What is the default type of `undefined` in TypeScript?

A. `any`
B. `undefined`
C. `null | undefined`
D. `void`

---

### 9. What happens here?

```ts
let a: undefined = undefined;
let b: null = null;
a = b;
```

A. Compiles successfully.
B. Compilation error.
C. Runtime error.
D. `a` becomes `null`.

---

### 10. With `strictNullChecks: false`, what is allowed?

A. `let x: number = null;`
B. `let x: number = undefined;`
C. Both A and B
D. Neither

---

### 11. Which utility type removes `null` and `undefined`?

A. `Partial<T>`
B. `Omit<T, K>`
C. `NonNullable<T>`
D. `Required<T>`

---

### 12. What is the type of this variable?

```ts
let x: string | undefined = undefined;
```

A. `string`
B. `undefined`
C. `string | undefined`
D. `never`

---

---

## 🔹 `void`

### 13. What is the purpose of `void` in functions?

A. Function never returns.
B. Function returns no meaningful value.
C. Function always throws.
D. Function returns `undefined` explicitly.

---

### 14. What is the actual runtime return of a `void` function?

```ts
function log(): void {
  console.log('hi');
}
```

A. `null`
B. `undefined`
C. `void`
D. `never`

---

### 15. What happens here?

```ts
let x: void = undefined;
let y: void = null; // strictNullChecks: false
```

A. Both compile.
B. Only first compiles.
C. Only second compiles.
D. Neither compiles.

---

### 16. Which is valid?

A. Assigning `void` to `number`.
B. Assigning `undefined` to `void`.
C. Returning `number` in a `void` function.
D. Declaring variable as `let x: void = 5;`

---

### 17. Which statement about `void` vs `undefined` is true?

A. They are identical.
B. `void` is only for function return types.
C. `undefined` is assignable to `void`.
D. Both B and C.

---

---

## 🔹 `never`

### 18. Which best describes `never`?

A. A type that can represent `null`.
B. A type that represents no value and never occurs.
C. Equivalent to `void`.
D. Runtime-only type.

---

### 19. What is the result of this alias?

```ts
type A = string & number;
```

A. `string | number`
B. `never`
C. `any`
D. `unknown`

---

### 20. Which function has return type `never`?

A.

```ts
function a(): never {
  throw new Error('fail');
}
```

B.

```ts
function b(): never {
  while (true) {}
}
```

C. Both A and B
D. Neither

---

### 21. What happens here?

```ts
let x: never;
x = 1;
```

A. Compiles.
B. Compilation error.
C. Runtime error.
D. Converts `1` to `never`.

---

### 22. Which is true about exhaustiveness checks with `never`?

A. `never` can be used to ensure all cases are handled in unions.
B. `never` is interchangeable with `unknown`.
C. `never` can be assigned to all types.
D. `never` can hold values at runtime.

---

### 23. Which is assignable to `never`?

A. `undefined`
B. `null`
C. `number`
D. None

---

### 24. Which type is assignable to every other type?

A. `any`
B. `unknown`
C. `never`
D. `void`

---

---

## 🔹 Mixed Edge Cases

### 25. What is the type of `T`?

```ts
type T = void | undefined;
```

A. `void` only
B. `undefined` only
C. `void | undefined`
D. `never`

---

### 26. What is the inferred type of `f`?

```ts
function f(): undefined {
  return;
}
```

A. `undefined`
B. `void`
C. `never`
D. `null`

---

### 27. What is the inferred type here?

```ts
function g() {
  throw new Error('fail');
}
```

A. `any`
B. `void`
C. `never`
D. `unknown`

---

### 28. What is the type of `arr`?

```ts
let arr: never[] = [];
```

A. Empty array only
B. Array of any type
C. Array of `never`, always empty
D. `unknown[]`

---

### 29. Which statement is correct about `unknown` vs `never`?

A. `unknown` is top type, `never` is bottom type.
B. Both are top types.
C. Both are bottom types.
D. They are interchangeable.

---

### 30. Which is allowed in strict mode?

A. `let x: void = null;`
B. `let y: undefined = null;`
C. `let z: never = null;`
D. `let a: unknown = null;`

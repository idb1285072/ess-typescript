### 1. What is the type of `x`?

```ts
let x: string | number;
x = 'hi';
x = 42;
```

A. `string`
B. `number`
C. `string | number`
D. `any`

---

### 2. What happens here?

```ts
type A = string | number;
let x: A = true;
```

A. Compiles successfully.
B. Compilation error: `boolean` not assignable.
C. Runtime error.
D. Converts `true` to `"true"`.

---

### 3. What is the result?

```ts
type A = 'a' | 'b';
type B = 'b' | 'c';
type C = A | B;
```

A. `"a" | "b" | "c"`
B. `"a" | "b"`
C. `"b" | "c"`
D. `never`

---

### 4. What is the result?

```ts
type A = 'a' | 'b';
type B = 'b' | 'c';
type C = A & B;
```

A. `"a" | "b" | "c"`
B. `"b"`
C. `"a" | "c"`
D. `never`

---

### 5. What is the type of `arr`?

```ts
let arr: (string | number)[] = ['hi', 1, 'bye', 2];
```

A. `string[] | number[]`
B. `(string | number)[]`
C. `[string, number, string, number]`
D. `any[]`

---

### 6. What happens when narrowing with `typeof`?

```ts
function f(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return x.toFixed(2);
}
```

A. Error: `toUpperCase` not on `string`.
B. Error: `toFixed` not on `number`.
C. Compiles fine.
D. Returns `string | number`.

---

### 7. What’s the type of `res`?

```ts
type A = { kind: 'a'; value: number };
type B = { kind: 'b'; value: string };
type U = A | B;

function f(x: U) {
  return x.value;
}
```

A. `number`
B. `string`
C. `number | string`
D. `any`

---

### 8. What is a **discriminated union**?

A. A union type where all members share at least one property with literal values for narrowing.
B. A union of only primitives.
C. A union of any functions.
D. A union resolved at runtime only.

---

### 9. What is the type of `T`?

```ts
type T = string | never;
```

A. `string`
B. `never`
C. `string | never`
D. `any`

---

### 10. What does `Exclude<"a" | "b" | "c", "b">` produce?

A. `"a" | "c"`
B. `"a" | "b"`
C. `"c"`
D. `never`

---

### 11. What does `Extract<"a" | "b" | "c", "b" | "d">` produce?

A. `"a" | "c"`
B. `"b"`
C. `"d"`
D. `never`

---

### 12. What is the inferred type of `u`?

```ts
let u = Math.random() > 0.5 ? 'hello' : 42;
```

A. `any`
B. `string | number`
C. `string`
D. `number`

---

### 13. What is the inferred type of `res`?

```ts
const arr = [1, 'a'];
const res = arr[0];
```

A. `1 | "a"`
B. `string | number`
C. `any`
D. `unknown`

---

### 14. Which utility distributes over unions?

A. `keyof`
B. Conditional Types (`extends ? :`)
C. `typeof`
D. `instanceof`

---

### 15. What’s the type of `R`?

```ts
type R<T> = T extends string ? number : boolean;
type X = R<string | boolean>;
```

A. `number | boolean`
B. `boolean`
C. `number`
D. `never`

---

### 16. What happens here?

```ts
type A = { x: number } | { y: string };
let a: A = { x: 42, y: 'hi' };
```

A. Compiles successfully.
B. Compilation error.
C. Runtime error.
D. Narrows to `{ x: number, y: string }`.

---

### 17. What does this produce?

```ts
type Flatten<T> = T extends any[] ? T[number] : T;
type R = Flatten<string[] | number[]>;
```

A. `string | number`
B. `string[] | number[]`
C. `any`
D. `never`

---

### 18. What is the type of `foo`?

```ts
function foo(x: 'a' | 'b') {
  if (x === 'a') return 1;
  return 'str';
}
```

A. `number`
B. `string`
C. `number | string`
D. `any`

---

### 19. Which operator can be used for **type narrowing on unions**?

A. `typeof`
B. `in`
C. Equality check (`===`)
D. All of the above

---

### 20. What does this evaluate to?

```ts
type U = 'a' | 'b' | 'c';
type Mapped = { [K in U]: K };
```

A. `{ a: "a", b: "b", c: "c" }`
B. `{ a: string, b: string, c: string }`
C. `{ K: "a" | "b" | "c" }`
D. `never`

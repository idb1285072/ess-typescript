### 1. Which is the correct way to declare an array of numbers in TypeScript?

A. `let arr: number[] = [1, 2, 3];`
B. `let arr: Array<number> = [1, 2, 3];`
C. Both A and B
D. Only A

---

### 2. What is the type of `arr`?

```ts
const arr = [1, "a", true];
```

A. `(string | number | boolean)[]`
B. `any[]`
C. `[number, string, boolean]`
D. `unknown[]`

---

### 3. What happens here?

```ts
let arr: number[] = [1, 2, 3];
arr.push("x");
```

A. Compiles successfully.
B. Compilation error: `"x"` not assignable to `number`.
C. Runtime error only.
D. Converts `"x"` to `NaN`.

---

### 4. What is the type of `arr`?

```ts
const arr = [1, 2, 3] as const;
```

A. `number[]`
B. `readonly [1, 2, 3]`
C. `[number, number, number]`
D. `readonly number[]`

---

### 5. Which utility type extracts the element type of an array?

A. `Extract<T, U>`
B. `ArrayType<T>`
C. `T[number]`
D. `typeof T`

---

### 6. Consider:

```ts
type Elem<T> = T extends (infer U)[] ? U : never;
type R = Elem<string[]>;
```

What is `R`?
A. `string[]`
B. `string`
C. `never`
D. `any`

---

### 7. What does this type alias represent?

```ts
type NonEmptyArray<T> = [T, ...T[]];
```

A. An array that may be empty.
B. A tuple of exactly two elements.
C. An array that must have at least one element.
D. A fixed-length array.

---

### 8. What’s the difference between `readonly number[]` and `number[]`?

A. `readonly number[]` cannot be mutated.
B. `readonly number[]` can be reassigned.
C. They are identical.
D. `readonly number[]` is faster.

---

### 9. What does the `length` property type resolve to for `number[]`?

A. `number`
B. `literal length`
C. `never`
D. `bigint`

---

### 10. What happens here?

```ts
type A = [number, string];
type B = [...A, boolean];
```

What is `B`?
A. `[number, string, boolean]`
B. `[number, string] | boolean[]`
C. `[boolean, number, string]`
D. `never`

---

### 11. What is the type of `arr`?

```ts
let arr = [] as string[];
arr.push("hello");
```

A. `any[]`
B. `string[]`
C. `unknown[]`
D. `[string]`

---

### 12. Which operator extracts all possible array indices?

A. `typeof`
B. `keyof`
C. `instanceof`
D. `extends`

---

### 13. What happens here?

```ts
type A = [];
type B = A[number];
```

A. `B` = `never`
B. `B` = `unknown`
C. `B` = `any`
D. `B` = `null`

---

### 14. What is the result of this alias?

```ts
type A = [1, 2, 3][number];
```

A. `1 | 2 | 3`
B. `number`
C. `[1, 2, 3]`
D. `any`

---

### 15. What’s the type of `args`?

```ts
function foo(...args: [number, string, boolean]) {}
```

A. `(number | string | boolean)[]`
B. `[number, string, boolean]`
C. `any[]`
D. `unknown[]`

---

### 16. What’s the difference between `Tuple` and `Array` in TS?

A. Tuple has fixed length and specific types, Array is dynamic.
B. Tuple can grow, Array cannot.
C. Tuple only supports numbers.
D. Array only supports strings.

---

### 17. What’s the inferred type of `arr`?

```ts
const arr = [10, 20] as const;
```

A. `number[]`
B. `readonly [10, 20]`
C. `[number, number]`
D. `readonly number[]`

---

### 18. Which type represents an array of objects with `id: number`?

A. `{ id: number }[]`
B. `Array<{ id: number }>`
C. Both A and B
D. `Record<number, { id: number }>`

---

### 19. What is the type of `R`?

```ts
type R = Parameters<(...args: string[]) => void>[0];
```

A. `string`
B. `string[]`
C. `any`
D. `unknown`

---

### 20. Which statement about `ReadonlyArray<T>` is true?

A. It is identical to `T[]`.
B. It disallows mutations like `push`, `pop`.
C. It can only hold numbers.
D. It is faster at runtime.


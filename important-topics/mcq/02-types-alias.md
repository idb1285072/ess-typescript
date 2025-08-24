### 1. Which statement is **true** about a `type` alias in TypeScript?

A. `type` can represent primitives, unions, intersections, and tuples.
B. `type` is restricted only to object structures.
C. `type` supports declaration merging.
D. `type` is identical to `interface`.

---

### 2. What is the result of this alias?

```ts
type A = string | number;
let x: A = true;
```

A. Compiles, `x` can be any type.
B. Error: `boolean` not assignable to `string | number`.
C. Compiles but `x` is coerced to `string`.
D. Runtime error only.

---

### 3. Which of the following demonstrates an **intersection type alias**?

A. `type Person = { name: string } | { age: number }`
B. `type Person = { name: string } & { age: number }`
C. `type Person = string | number`
D. `type Person = never`

---

### 4. Consider:

```ts
type A = { a: number };
type B = { b: string };
type C = A & B;
```

What does `C` represent?
A. `{ a: number } | { b: string }`
B. `{ a: number, b: string }`
C. `number | string`
D. `never`

---

### 5. Which statement is **true** about recursive type aliases?

A. TypeScript supports fully recursive aliases with no limits.
B. TypeScript allows recursion but with compiler depth limits.
C. Recursive aliases are forbidden.
D. They automatically convert to interfaces.

---

### 6. What does this alias produce?

```ts
type Flatten<T> = T extends any[] ? T[number] : T;
type Result = Flatten<string[]>;
```

A. `string`
B. `string[]`
C. `any`
D. `never`

---

### 7. What happens here?

```ts
type X = { a: number } & { a: string };
```

A. `X` resolves to `{ a: number | string }`.
B. `X` resolves to `never`.
C. `X` resolves to `{ a: never }`.
D. Compiler error.

---

### 8. Which keyword allows extracting keys from a type alias?

A. `typeof`
B. `keyof`
C. `instanceof`
D. `extends`

---

### 9. What does this alias represent?

```ts
type ReadonlyKeys<T> = {
  [K in keyof T]-?: IfEquals<
    { [Q in K]: T[K] },
    { readonly [Q in K]: T[K] },
    K,
    never
  >;
}[keyof T];
```

A. Produces all keys of `T`.
B. Produces keys of `T` that are `readonly`.
C. Produces keys of `T` that are optional.
D. Produces values of `T`.

---

### 10. Which alias correctly extracts **return type** of a function?

A. `type Return<T> = T["return"];`
B. `type Return<T> = T extends (...args: any[]) => infer R ? R : never;`
C. `type Return<T> = typeof T;`
D. `type Return<T> = R<T>;`

---

### 11. What is the result?

```ts
type A = 'a' | 'b';
type B = 'b' | 'c';
type C = Exclude<A, B>;
```

A. `"a"`
B. `"b"`
C. `"c"`
D. `"a" | "c"`

---

### 12. Which alias produces a **union of property names of T with string values**?

A.

```ts
type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];
```

B.

```ts
type StringKeys<T> = keyof T;
```

C.

```ts
type StringKeys<T> = T[keyof T];
```

D.

```ts
type StringKeys<T> = never;
```

---

### 13. Which is **not possible** with `type` aliases?

A. Create conditional types.
B. Create union types.
C. Create primitive aliases.
D. Merge declarations across multiple files.

---

### 14. What does this alias mean?

```ts
type NonEmptyArray<T> = [T, ...T[]];
```

A. An array that may be empty.
B. An array that must have at least one element.
C. A tuple of length 2.
D. A fixed-length array.

---

### 15. What happens here?

```ts
type X = { a: number } & { a?: string };
```

A. `X` resolves to `{ a: number }`.
B. `X` resolves to `{ a: never }`.
C. `X` resolves to `{ a: number & string }`.
D. Compiler error.

---

### 16. Which alias utility removes `null` and `undefined`?

A. `Omit<T, K>`
B. `Partial<T>`
C. `NonNullable<T>`
D. `Required<T>`

---

### 17. What is the result?

```ts
type A = Extract<'x' | 'y' | 'z', 'y' | 'a'>;
```

A. `"x" | "y" | "z"`
B. `"y"`
C. `"a"`
D. `never`

---

### 18. Which alias infers the element type of an array?

A.

```ts
type Elem<T> = T extends (infer U)[] ? U : never;
```

B.

```ts
type Elem<T> = T extends Array<infer U> ? U : never;
```

C. Both A and B
D. Neither

---

### 19. Consider:

```ts
type UnionToIntersection<U> = (U extends any ? (x: U) => void : never) extends (
  x: infer R
) => void
  ? R
  : never;

type Result = UnionToIntersection<{ a: 1 } | { b: 2 }>;
```

What does `Result` become?
A. `{ a: 1 } | { b: 2 }`
B. `{ a: 1, b: 2 }`
C. `never`
D. `{}`

---

### 20. Which statement best explains why `type` aliases are sometimes preferred over `interface`?

A. `type` aliases are faster at runtime.
B. `type` aliases support unions, intersections, conditional types, and primitives.
C. `type` aliases can be extended by declaration merging.
D. `type` aliases are required for classes.

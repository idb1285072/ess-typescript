### 1. Which of the following statements about **TypeScript’s type erasure** is correct?

A. Types are preserved in the compiled JavaScript.
B. Types are removed at compile-time and do not exist in runtime.
C. Type annotations generate additional runtime checks.
D. Types are converted into JSON schemas.

---

### 2. What is the **main purpose of `never` type** in TypeScript?

A. To represent nullable values.
B. To represent values that never occur, e.g., functions that throw or infinite loops.
C. To declare unknown values.
D. To denote optional properties.

---

### 3. Given the code below, what is the output type of `getData`?

```ts
async function getData() {
  return 42;
}
```

A. `number`
B. `Promise<number>`
C. `any`
D. `unknown`

---

### 4. Which operator allows **conditional types** in TypeScript?

A. `if-else`
B. `? :` (ternary)
C. `extends` with `? :`
D. `typeof`

---

### 5. What does the `keyof` operator return for this interface?

```ts
interface User {
  id: number;
  name: string;
}
```

A. `"id" | "name"`
B. `number | string`
C. `User[]`
D. `Record<string, any>`

---

### 6. What’s the difference between `unknown` and `any`?

A. Both allow unsafe assignments.
B. `unknown` requires type checking before usage, `any` does not.
C. `any` is safer than `unknown`.
D. They behave identically at runtime.

---

### 7. Which feature allows **type-safe mapping over keys of a type**?

A. Conditional Types
B. Mapped Types
C. Union Types
D. Type Assertions

---

### 8. What will `Partial<T>` utility type do?

A. Makes all properties of `T` optional.
B. Makes all properties of `T` required.
C. Excludes all properties of `T`.
D. Freezes the object type.

---

### 9. Which decorator type is used to annotate **class methods**?

A. Class Decorator
B. Property Decorator
C. Method Decorator
D. Parameter Decorator

---

### 10. What’s the difference between `interface` and `type`?

A. `interface` can only be used for objects, `type` can represent primitives, unions, etc.
B. `type` supports declaration merging, `interface` does not.
C. `type` is always faster than `interface`.
D. They are 100% identical.

---

### 11. Consider this function:

```ts
function assertString(value: any): asserts value is string {
  if (typeof value !== "string") throw new Error("Not a string");
}
```

What’s the role of `asserts` keyword?
A. Performs runtime validation only.
B. Narrows the type of `value` after function execution.
C. Converts the type to `any`.
D. Works only with interfaces.

---

### 12. What is the **default access modifier** for class members in TypeScript?

A. `private`
B. `protected`
C. `public`
D. `readonly`

---

### 13. What is a **discriminated union** in TypeScript?

A. A union type with a unique literal property used for narrowing.
B. A union type where all members share the same fields.
C. A union type with only primitive types.
D. A generic type union.

---

### 14. Which statement about `const enum` is correct?

A. It is erased completely at runtime and values are inlined.
B. It behaves the same as `enum`.
C. It creates a runtime object.
D. It cannot be compiled to JavaScript.

---

### 15. What’s the difference between `readonly` property and `const` variable?

A. `readonly` applies to properties, `const` applies to variables.
B. `const` can be reassigned, `readonly` cannot.
C. They are interchangeable.
D. Both apply only to arrays.

---

### 16. What’s the result of this type expression?

```ts
type A = Exclude<"a" | "b" | "c", "a">;
```

A. `"a" | "b" | "c"`
B. `"b" | "c"`
C. `"a"`
D. `never`

---

### 17. Which TypeScript configuration (`tsconfig.json`) option ensures **strict null checks**?

A. `"noImplicitAny": true`
B. `"strictNullChecks": true`
C. `"strict": false`
D. `"alwaysStrict": true`

---

### 18. What is the output of this code?

```ts
let arr = [1, 2, 3] as const;
```

A. `number[]`
B. `readonly [number, number, number]`
C. `any[]`
D. `tuple` but mutable

---

### 19. What’s the purpose of the `infer` keyword in conditional types?

A. To define runtime inference logic.
B. To extract a type from another type in a generic context.
C. To cast types.
D. To import external types.

---

### 20. Which utility type removes `null` and `undefined` from a type?

A. `Required<T>`
B. `Omit<T, K>`
C. `NonNullable<T>`
D. `Pick<T, K>`

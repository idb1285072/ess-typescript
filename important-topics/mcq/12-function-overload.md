### 1. Which statement about function overloading in TypeScript is correct?

A. Multiple implementations can be provided for different overloads.
B. Only one implementation is allowed, with multiple type signatures.
C. Overloads generate separate functions in compiled JavaScript.
D. Overloads are resolved dynamically at runtime.

---

### 2. What happens if you define an overload signature but forget to implement it?

A. Compilation error
B. Runtime error only
C. Automatically defaults to `any` return type
D. TypeScript infers implementation from signatures

---

### 3. Consider this code:

```ts
function fn(x: number): string;
function fn(x: string): number;
function fn(x: any): any { return x; }
```

What is the return type of `fn(42)`?
A. `any`
B. `string`
C. `number`
D. Compile error

---

### 4. In TypeScript, the **order of overload signatures** matters because:

A. They are evaluated top to bottom during type resolution.
B. They are compiled into separate runtime functions.
C. The first overload is always chosen.
D. The last overload always overrides the others.

---

### 5. Which statement about overload implementation signatures is true?

A. The implementation must be a superset of all overload signatures.
B. The implementation can match any one overload signature.
C. The implementation must exactly match the first overload.
D. Overload signatures and implementation signatures are independent.

---

### 6. Which utility type can help derive overload parameters from a function?

A. `Parameters<T>`
B. `ReturnType<T>`
C. `ConstructorParameters<T>`
D. `InstanceType<T>`

---

### 7. Given:

```ts
function parse(x: string): number;
function parse(x: number): string;
function parse(x: any): any { return x; }
```

What is the type of `parse(true)`?
A. `never`
B. `any`
C. `boolean`
D. Compile error

---

### 8. Which restriction applies to overload signatures?

A. They must differ only in parameter **types or counts**.
B. They must have different return types only.
C. They must have different names.
D. They must be implemented separately.

---

### 9. In TypeScript, overload resolution occurs:

A. At compile time based on argument types
B. At runtime by inspecting actual values
C. When the function is first called
D. Only for async functions

---

### 10. Which of the following allows function overloads in TypeScript?

A. Functions only
B. Methods only
C. Both functions and methods
D. Only interfaces

---

### 11. Given:

```ts
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any { return a + b; }
```

What is the return type of `add("hi", 42)`?
A. `string`
B. `number`
C. `any`
D. Compile error

---

### 12. Which of the following can also express overloads in TypeScript?

A. Union types in a single signature
B. Generics with constraints
C. Intersection types
D. All of the above

---

### 13. What is the role of the **implementation signature** in overloads?

A. It defines which overload will be used first.
B. It provides the actual function body.
C. It is optional.
D. It is erased completely after type checking.

---

### 14. Why is this code invalid?

```ts
function fn(x: string): string;
function fn(x: string): number;
function fn(x: string): any { return x; }
```

A. Identical parameter lists are not allowed for overloads.
B. Return type must differ in every overload.
C. Multiple overloads with the same signature cause ambiguity.
D. Overloads must always use `any`.

---

### 15. Consider:

```ts
interface Converter {
  (x: string): number;
  (x: number): string;
}
```

What is `Converter`?
A. A class type
B. An overloaded function type
C. A union of functions
D. A mapped type

---

### 16. Which is true about overloads inside classes?

A. They must appear before the implementation method.
B. They cannot use `private` or `protected`.
C. They must be static.
D. They can only use union return types.

---

### 17. Which compiler option improves safety for overloads with narrowing?

A. `"strictFunctionTypes": true`
B. `"noImplicitAny": true`
C. `"alwaysStrict": true`
D. `"skipLibCheck": false`

---

### 18. Consider:

```ts
function identity<T>(x: T): T;
function identity(x: any): any { return x; }
```

Which overload is preferred when calling `identity(42)`?
A. The generic overload
B. The implementation signature
C. The `any` overload
D. Both are merged

---

### 19. What will happen if overloads are declared but the implementation is missing?

A. TypeScript infers `any` implementation.
B. Compilation error.
C. Runtime fallback to first overload.
D. Overloads act like interfaces.

---

### 20. Which of the following best describes overload signatures in `.d.ts` files?

A. They provide runtime implementations.
B. They describe multiple callable shapes for a function.
C. They replace the implementation signature.
D. They allow recursive type inference.


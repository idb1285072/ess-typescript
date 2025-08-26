### 1. What is the default value of the first member in a numeric enum?

A. `0`
B. `1`
C. `undefined`
D. Must be explicitly assigned

---

### 2. What happens here?

```ts
enum Color {
  Red,
  Green,
  Blue,
}
console.log(Color.Red, Color[0]);
```

A. `0, "Red"`
B. `"Red", 0`
C. `undefined, undefined`
D. `"Red", "Red"`

---

### 3. What is true about string enums?

A. They support reverse mapping.
B. They do not support reverse mapping.
C. They auto-increment like numbers.
D. They are const-only.

---

### 4. What happens here?

```ts
enum A {
  X = 10,
  Y,
  Z,
}
console.log(A.Y);
```

A. `11`
B. `10`
C. `undefined`
D. Error

---

### 5. Which is valid?

A.

```ts
enum A {
  X = 'hi',
  Y,
}
```

B.

```ts
enum A {
  X = 1,
  Y = X + 1,
}
```

C. Both A and B
D. Neither

---

### 6. What happens with computed values?

```ts
enum A {
  X = 'abc'.length,
  Y,
}
```

A. Works fine.
B. Error: enum member must have initializer.
C. Y = 4
D. Runtime only.

---

### 7. What is special about `const enum`?

A. Removed at compile time, inlined values.
B. Works only with strings.
C. Cannot be exported.
D. Runtime-only feature.

---

### 8. What happens here?

```ts
const enum A {
  X = 1,
  Y = 2,
}
let val = A.X;
```

A. Compiles to `var val = A.X;`
B. Compiles to `var val = 1;`
C. Error: cannot use const enum.
D. Runtime lookup.

---

### 9. What happens with mixed enums?

```ts
enum A {
  X = 1,
  Y = 'hello',
}
```

A. Works fine.
B. Error: cannot mix string and number.
C. Converts Y to number.
D. Runtime error.

---

### 10. What happens in ambient enums?

```ts
declare enum A {
  X = 1,
  Y,
}
```

A. `Y` is inferred as 2.
B. `Y` is `any`.
C. Error: must provide all initializers.
D. Runtime error.

---

### 11. Which is true about reverse mapping?

A. Works only for numeric enums.
B. Works only for string enums.
C. Works for both.
D. Works for const enums.

---

### 12. What happens here?

```ts
enum A {
  X,
}
let a: keyof typeof A;
```

A. Type is `"X"`.
B. Type is `"X" | 0`.
C. Type is `"X" | "0"`.
D. Type is `"X" | number`.

---

### 13. Which is true about `enum` vs `union type`?

A. Enum creates a runtime object, union does not.
B. Enum allows reverse lookup, union does not.
C. Union types are erased at runtime.
D. All of the above.

---

### 14. What happens here?

```ts
enum A {
  X,
  Y,
}
function f(x: A) {
  if (x === A.X) return 'X';
  return 'Y';
}
```

A. Exhaustive check guaranteed.
B. Needs `never` check for completeness.
C. Works fine.
D. Error.

---

### 15. What is `typeof Enum` useful for?

A. Getting enum member values.
B. Creating a union of keys.
C. Getting runtime object type.
D. All of the above.

---

### 16. What is the output?

```ts
enum A {
  X = 1,
  Y = 2,
}
console.log(Object.keys(A));
```

A. `["X","Y"]`
B. `["1","2","X","Y"]`
C. `["1","2"]`
D. `["X","Y","Z"]`

---

### 17. What is the output?

```ts
enum A {
  X,
}
console.log(A[0]);
```

A. `"X"`
B. `0`
C. `undefined`
D. Error

---

### 18. What happens here?

```ts
enum A {
  X = 'a',
  Y = 'b',
}
console.log(A['a']);
```

A. `"X"`
B. `undefined`
C. `"a"`
D. Error

---

### 19. What is true about enums in `strictNullChecks` mode?

A. Enums cannot be null.
B. Enum variables can be `undefined` if not initialized.
C. Enum variables can accept `null` if unioned.
D. Both B and C.

---

### 20. What is the output?

```ts
enum A {
  X = 0,
  Y = 2,
  Z,
}
console.log(A.Z);
```

A. `3`
B. `2`
C. `undefined`
D. `1`

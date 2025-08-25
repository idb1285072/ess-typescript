```ts
interface A {
  [key: string]: number | string;
  x: string;
}
const obj: A = {
  x: 'hello',
  age: 25,
  status: 'active',
};
```

- interface (`extends`), type (`&`)

```ts
class Base {
  id: number = 0;
}
interface A extends Base {
  name: string;
}
```

- The interface copies the shape of the class's public instance members, but not the constructor or methods.
- It does not inherit static members or private/protected members.

---

### 1. What happens here?

```ts
interface A {
  x: number;
}
interface A {
  y: string;
}
let obj: A = { x: 1, y: 'hi' };
```

A. Compilation error: duplicate interface.
B. Merges into `{ x: number; y: string }`.
C. Only last interface counts.
D. Runtime error.

---

### 2. What is the difference between `interface` and `type`?

A. `type` can represent unions, `interface` cannot.
B. `interface` supports declaration merging, `type` cannot.
C. Both A and B.
D. No difference at all.

---

### 3. What happens here?

```ts
interface A {
  x: number;
}
interface B extends A {
  y: string;
}
let obj: B = { x: 1, y: 'hi' };
```

A. Error: cannot extend interface.
B. Works fine.
C. Works only if `implements`.
D. Runtime error.

---

### 4. Which is valid for an index signature?

A.

```ts
interface A {
  [key: string]: number;
}
```

B.

```ts
interface A {
  [key: number]: string;
}
```

C. Both A and B.
D. Neither A nor B.

---

### 5. What happens with incompatible index signatures?

```ts
interface A {
  [key: string]: number;
  x: string;
}
```

A. Error: property `x` is not assignable to number.
B. Works fine.
C. Runtime error.
D. Merges into union.

---

### 6. What is allowed in an interface that a type alias cannot do?

A. Extend multiple other declarations via `extends`.
B. Represent unions.
C. Represent tuples.
D. None.

---

### 7. What happens here?

```ts
interface A {
  x: number;
}
class B implements A {
  x = 1;
}
```

A. Error: class cannot implement interface.
B. Works fine.
C. Only works if `readonly`.
D. Runtime error.

---

### 8. What is the result of excess property check?

```ts
interface A {
  x: number;
}
let obj: A = { x: 1, y: 2 };
```

A. Error: `y` not assignable.
B. Works fine.
C. Strips `y`.
D. Runtime error.

---

### 9. Which avoids excess property check?

```ts
interface A {
  x: number;
}
let obj = { x: 1, y: 2 };
let a: A = obj;
```

A. Error.
B. Works fine.
C. Works only with `as A`.
D. Works only with `implements`.

---

### 10. What happens with optional properties?

```ts
interface A {
  x?: number;
}
let obj: A = {};
```

A. Error: must provide `x`.
B. Works fine.
C. `x` defaults to 0.
D. Runtime error.

---

### 11. What is a **hybrid type** in interfaces?

A. Interface that combines function and object.
B. Interface with multiple index signatures.
C. Interface extending multiple others.
D. Interface with generics.

---

### 12. What happens here?

```ts
interface F {
  (x: number): string;
  prop: number;
}
```

A. Error: cannot combine function and property.
B. Valid hybrid interface.
C. Runtime error.
D. Only works with `class`.

---

### 13. What does this mean?

```ts
interface A<T extends string | number> {
  value: T;
}
```

A. Interface with constrained generic type.
B. Interface with multiple inheritance.
C. Error: cannot constrain generic.
D. Runtime only constraint.

---

### 14. Which is true about interface merging?

A. Interfaces with same name merge.
B. Properties with same name but different type cause error.
C. Both A and B.
D. Neither.

---

### 15. What happens when an interface extends a class?

```ts
class Base {
  id: number = 0;
}
interface A extends Base {
  name: string;
}
```

A. Error: interface cannot extend class.
B. Valid: interface copies members of class.
C. Works only with `abstract`.
D. Runtime error.

---

### 16. What is the type of `foo`?

```ts
interface A {
  x: number;
}
interface B {
  y: string;
}
type C = A & B;
let foo: C = { x: 1, y: 'hi' };
```

A. Intersection of A and B.
B. Union of A and B.
C. Error.
D. Any.

---

### 17. What happens here?

```ts
interface A {
  x: number;
}
interface B {
  x: string;
}
interface C extends A, B {}
```

A. `C` has `x: number | string`.
B. `C` has `x: never`.
C. Error: incompatible properties.
D. Works fine.

---

### 18. What is a marker interface?

A. An interface with no members, used for tagging.
B. Interface with only `readonly` members.
C. Interface with index signature.
D. Interface only for functions.

---

### 19. Which is true about `implements` with class?

A. Class must strictly satisfy interface contract.
B. Optional members in interface can be skipped.
C. Extra members in class are allowed.
D. All of the above.

---

### 20. What is the type of `x`?

```ts
interface A {
  readonly x: number;
}
let obj: A = { x: 1 };
obj.x = 2;
```

A. Works fine.
B. Error: cannot assign to `x`.
C. Runtime error only.
D. Turns `x` into mutable.

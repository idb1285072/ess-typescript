### 1. Which of the following is the correct syntax to declare an optional parameter in TypeScript?

A. `function f(a?: number) {}`
B. `function f(?a: number) {}`
C. `function f(a: number=?) {}`
D. `function f(a: number?) {}`

---

### 2. In TypeScript, what type is assigned to an **optional parameter** `x?: number`?

A. `number`
B. `number | undefined`
C. `undefined`
D. `any`

---

### 3. Consider:

```ts
function log(x?: string) {
  console.log(x);
}
```

What values can be passed into `log`?

A. Only `string`
B. `string | undefined`
C. `string | null | undefined`
D. Only `undefined`

---

### 4. What happens if an **optional parameter** is placed before a required parameter?

A. Compilation error
B. Optional parameter becomes required
C. Required parameter is treated as optional
D. Allowed only with default values

---

### 5. Which declaration is valid in **strict mode** (`strictNullChecks: true`)?

A. `function f(x?: string, y: number) {}`
B. `function f(x: string, y?: number) {}`
C. Both A and B
D. Neither A nor B

---

### 6. What’s the relationship between **optional parameters** and **default parameters** in TypeScript?

A. Default parameters are implicitly optional.
B. Optional parameters must always follow default parameters.
C. They cannot coexist in the same function.
D. Optional parameters override default parameters.

---

### 7. What is the inferred type of `y` here?

```ts
function f(x = 10, y?: number) {}
```

A. `number`
B. `number | undefined`
C. `any`
D. `unknown`

---

### 8. In an overload set, what happens if an optional parameter is defined differently across signatures?

A. Compiler chooses the most permissive type.
B. Compilation error.
C. The last overload always wins.
D. Optional parameters cannot be overloaded.

---

### 9. What’s the type of parameter `a` in this case?

```ts
function f(a?: never) {}
```

A. Always `never`
B. Always `undefined`
C. Always `null`
D. It cannot be declared.

---

### 10. How are optional parameters represented in JavaScript after compilation?

A. They are removed completely.
B. They are compiled into default values.
C. They are treated as normal parameters with `undefined` if not passed.
D. They are wrapped in runtime checks.

---

### 11. Which is true about optional parameters and rest parameters?

A. Rest parameters must always come before optional parameters.
B. Optional parameters can appear before rest parameters.
C. Rest parameters can appear before optional parameters.
D. They cannot coexist.

---

### 12. What happens if an optional parameter is given a default value?

```ts
function f(x?: number = 5) {}
```

A. Valid syntax, behaves like default parameter.
B. Invalid syntax, compiler error.
C. Treated as `number | undefined`.
D. Only works if `strict` is disabled.

---

### 13. Consider:

```ts
function f(a: number, b?: number) {}
f(1);
f(1, undefined);
```

Which statements are true?

A. Both calls are valid.
B. Second call is invalid.
C. Both calls pass the same effective arguments.
D. `f(1)` and `f(1, undefined)` behave differently.

---

### 14. What is the output type of `typeof g`?

```ts
function g(x?: string): void {}
```

A. `(x: string) => void`
B. `(x?: string | undefined) => void`
C. `(x?: string) => void`
D. `(x: string | undefined) => void`

---

### 15. Which case makes optional parameters **unsafe** in TypeScript?

A. When they are used with `any`.
B. When they precede required parameters.
C. When combined with default values.
D. When used with `strictNullChecks: false`.

---

### 16. In this code:

```ts
function foo(x?: string, y?: number) {
  return [x, y];
}
```

What’s the inferred return type?

A. `[string | undefined, number | undefined]`
B. `(string | undefined)[]`
C. `[string, number]`
D. `[any, any]`

---

### 17. What happens if you call an optional parameter function with `null` explicitly?

```ts
function h(x?: string) {}
h(null);
```

A. Compiles always, because `null` is allowed.
B. Errors if `strictNullChecks` is enabled.
C. Always errors regardless of settings.
D. Treats `null` as `undefined`.

---

### 18. What is the difference between `f(x?: string)` and `f(x: string | undefined)`?

A. No difference at all.
B. With `strictNullChecks`, optional parameter allows omission, union type requires explicit `undefined`.
C. Optional parameter is stricter.
D. Union type allows omission.

---

### 19. Consider:

```ts
function k<T>(a?: T): T | undefined {
  return a;
}
```

What happens if you call `k()` with no arguments?

A. Returns `undefined` of type `never`.
B. Returns `undefined` of type `undefined`.
C. Returns `undefined` of type `T | undefined`.
D. Compilation error.

---

### 20. Which rule must optional parameters follow in TypeScript?

A. They must always be first in parameter list.
B. They must always come after required parameters.
C. They can appear anywhere.
D. They must be paired with rest parameters.

## `Awaited<T>`

- recursively extracts the resolved value type from a Promise, including nested or thenable types
  - If `T` is a `Promise<U>`, `Awaited<T>` gives you U.
  - If `U` itself is a `Promise<V>`, it unwraps recursively until it finds the final resolved value.
  - If `T` is not a promise, you just get `T`.

## `Partial<T>`

- all properties of `T` are **optional (?)**
- Update Objects (patch pattern)
- Building objects step by step
- CreateDTO to UpdateDTO

## `Required<T>`

- make all properties **required (-?)**

## `Readonly<T>`

- make all properties **readonly** - immutable
- `const` - variable, `readonly` - property
- preventing accidental mutation in function parameters

## `Pick<T, K>` and `Omit<T, K>`

- Constructs a type by picking the set of properties `Keys` (string literal or union of string literals) from `Type`
- Constructs a type by picking all properties from `Type` and then removing `Keys` (string literal or union of string literals). The opposite of Pick.
- `Pick<T, K>` constructs a type by selecting the keys `K` from type `T`.
- `Omit<T,K>` constructs a type by removing the keys `K` from type `T`
- DTO
- hide sensitive data

## `Record<K, V>`

- constructs an dynamic object type. Key type is `K` and value type is `V`

## `NonNullable<T>`

- remove/exclude `null` and `undefined` from a type
- `NonNullable<T>` is basically a shortcut for `Exclude<T, null | undefined>`.
- `never` if input `null` or `undefined` or `never`

## `ReturnType<T>`

- get the return type of a function type
- if we pass non-function type, throw compile-time error

## `Exclude<T, U>` and `Extract<T, U>`

- `Exclude<T, U>` constructs a type by removing from `T` any types that are assignable to `U`.
- `Extract<T, U>` constructs a type by retaining from `T` only the types that are assignable to `U`.
- returns `never` if no match

## `Omit<T, K>` vs `Exclude<T, U>`

- `Omit<T, K>` works on Object Type and `Exclude<T, U>` works on Union Type

```ts
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

- `Partial<T>`, `Required<T>`, `Readonly<T>` shallow not deep.

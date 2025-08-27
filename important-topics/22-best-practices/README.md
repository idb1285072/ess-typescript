# Best Practices

## avoid

- `any` - prefer proper type or `unknown`
- `String`, `Number`, `Boolean` - use lowwercase `string`, `number`, `boolean`
- Redundant type definitions - type **Inferences** wisely
- `as` avoid without proper checks
- non-null assertions `!` can hide runtime errors

---

## best
- `"strict": true` enable strict mode
- **Generics (constraints)**, **Utility Types**, **type guards** use when need
- `interface` for **Object Shapes**, `type` for **Unions/Intersections**
- always type function **parameters** and **return** values
- use **overloads** for precise signatures instead of **unions in return types**
- always type thrown errors as `unknown` like this - `try { ... } catch (err: unknown) { ... }`
- use **Discriminated Unions** instead of boolean flags.
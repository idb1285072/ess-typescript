# Decorator

- A decorator is just a special function that can be attached to a declaration with `@` syntax.
- great for meta-programming, adding metadata, injecting behavior.
- Decorators are executed when the class or member is defined at runtime, not when you create instances.
- five main kinds of decorators in TypeScript

  - class decorator
  - method decorator
  - accessor decorator
  - property decorator
  - parameter decorator

- must enable `tsconfig.json`

```json
{
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true
}
```

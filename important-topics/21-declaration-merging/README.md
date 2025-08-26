# Declaration Merging

- Declaration merging happens when two or more declarations with the same name exists in the same scope and automatically merges/combines them into a single definition.
- Interfaces, Namespaces, Functions+Namespaces, Classes+Namespaces, Enums+Namespaces
- If properties **conflict**, TypesScript throws an error. Members must be compatible.

## Interface Merging

```ts
interface User {
  id: number;
}

// another declaration with same name
interface User {
  name: string;
  age: number;
}

// merged result:
const user1: User = {
  id: 1,
  name: 'Alice',
  age: 34,
};
```

## Namespace Merging

```ts
namespace Lib {
  export const version = '1.0';
}

namespace Lib {
  export function greet(name: string) {
    return `Hello, ${name}`;
  }
}

// merged result:
console.log(Lib.version); // "1.0"
console.log(Lib.greet('TS')); // "Hello, TS"
```

## Class + Namespace Merging

```ts
class Person {
  constructor(public name: string) {}
}

namespace Person {
  export const species = 'Homo sapiens';
}

const p = new Person('Alice');
console.log(p.name); // "Alice"
console.log(Person.species); // "Homo sapiens"
```

## Enum + Namespace Merging
```ts
enum Color {
  Red,
  Green,
  Blue
}

namespace Color {
  export function toHex(c: Color) {
    switch (c) {
      case Color.Red: return "#ff0000";
      case Color.Green: return "#00ff00";
      case Color.Blue: return "#0000ff";
    }
  }
}

console.log(Color.toHex(Color.Green)); // "#00ff00"
```


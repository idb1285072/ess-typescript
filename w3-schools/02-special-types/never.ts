const throwError = (message: string): never => {
  throw new Error(message);
};

function infiniteLoop(): never {
  while (true) {}
}

// exhaustiveness check for union
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; size: number }
  | { kind: 'triangle'; base: number; height: number };
const area = (shape: Shape) => {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.size ** 2;
    case 'triangle':
      return 0.5 * shape.base * shape.height;
    default:
      const exhaustiveCheck:never = shape;
      return exhaustiveCheck;
  }
};

const processValue = (value: string | number) => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value.toFixed(2);
  } else {
    const exhaustiveCheck: never = value;
  }
};

// never is subtype of every type
let x: never = (() => {
  throw new Error('Never value');
})();
let y: void = x;

let impossibleValue: never;
// impossibleValue = 123; // Error
// impossibleValue = "hello"; // Error

// never - functions that never return (throw, infinite loop)

// void - return but no value
// never - doesn't return at all
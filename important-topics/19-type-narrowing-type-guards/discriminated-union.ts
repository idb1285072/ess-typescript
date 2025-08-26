type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; size: number }
  | { kind: 'rectangle'; width: number; height: number };
function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.size * shape.size;
    case 'rectangle':
      return shape.width * shape.height;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck; // Ensures all cases are handled - never check
  }
}

// truthiness narrowing
function printMessage(msg?: string) {
  if (msg) {
    console.log(msg.toUpperCase()); // string (not undefined)
  }
}
printMessage('Hello, World!');
printMessage(); // No output

// equality narrowing (===, !==)
function compareValues(a: string | number, b: string | number) {
  if (a === b) {
    console.log(`Equal: ${a.toString()}`); // a and b are the same type
  } else {
    console.log(`Not equal: ${a.toString()} and ${b.toString()}`);
  }
}

function handle(x: 'yes' | 'no' | 'maybe') {
  if (x === 'yes') {
    // "yes"
  } else {
    // "no" | "maybe"
  }
}
handle('yes');
handle('no');

// exhaustiveness checking with never
function assertNever(x: never): never {
  throw new Error(`Unexpected value: ${x}`);
} 
function handleResponse(response: 'success' | 'error' | 'loading') {
  switch (response) {
    case 'success':
      console.log('Operation was successful.');
      break;
    case 'error':
      console.log('An error occurred.');
      break;
    case 'loading':
      console.log('Loading...');
      break;
    default:
      assertNever(response); // Ensures all cases are handled
  }
}
handleResponse('success');
handleResponse('error');
handleResponse('loading');

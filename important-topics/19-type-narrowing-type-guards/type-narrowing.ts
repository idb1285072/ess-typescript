// Type narrowing is when TypeScript takes a broad type (union, unknown, etc.) and refines it to a more specific type based on control flow analysis.

function printLength(value: string | string[]) {
  if (typeof value === 'string') {
    console.log(value.length); // value is narrowed to string
  } else {
    console.log(value.join(', ')); // value is narrowed to string[]
  }
}
printLength('Hello');
printLength(['Hello', 'World']);
printLength([]);

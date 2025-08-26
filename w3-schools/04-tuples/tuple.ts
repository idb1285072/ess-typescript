const ourTuple: [number, string, boolean] = [1, 'Hello', true];
ourTuple.push(42);
console.log(ourTuple);

// readonly tuple
const readonlyTuple: readonly [number, string, boolean] = [2, 'World', false];
// readonlyTuple.push(100);

// named tuple
const graph: [x: number, y: number] = [10, 20];
console.log(graph);

// optional elements in tuple
let RGB: readonly [red: number, green: number, blue: number, alpha?: number] = [255, 0, 0];
console.log(RGB);
RGB = [0, 255, 0, 0.5];
console.log(RGB);

// tuple with rest elements
let scores: [string, ...number[]] = ['Alice', 95, 85, 90];
scores.push(88, 92);
console.log(scores);


// fixed length, fixed type index
let tuple: [string, number?];
tuple = ['Alice', 54];
tuple = ['Alice'];
// tuple = [43, 'Alice'];

console.log(tuple[0]);
console.log(tuple[1]);

// optional(?) and rest elements(...)
let tuple1: [string, ...number[]];
tuple1 = ['a'];
tuple1 = ['a', 1, 2, 3];

// readonly tuple
let tuple2: readonly [string, number];
tuple2 = ['Alice', 64];
// tuple2[0] = 'Raj';
// tuple2.push('Raj');

let unionTuple: [string | number, boolean] = [42, true];
console.log(unionTuple);

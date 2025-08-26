const hobbies = ['Sports', 'Cooking'];
// hobbies.push(10);
hobbies.push('Reading');

const numbers: number[] = [];
numbers.push(10);
// numbers.push('20');

// let users: (string | number)[];
let users: Array<string | number>; // Generic Type
users = ['A', 'B', 'C'];
users = ['A', 10, 30];

let possibleResults: [1 | -1, 1 | -1]; // [1, -1]
possibleResults = [1, -1];
possibleResults = [-1, 1];
// possibleResults = [1, -1, 1];
// possibleResults = [2, 1];

// tuple -> fixed length array
let tuple: [number, string];
tuple = [21, '23'];
// tuple = [21, "23", 53]
tuple.push(32);
tuple.push('32');
console.log(tuple);

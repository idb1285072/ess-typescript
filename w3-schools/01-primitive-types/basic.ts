// implicit type: guess type from assignment (infer)
let name = 'abc-12345'; // inferred as string
let age = 30; // inferred as number
let isAdmin = true; // inferred as boolean
console.log(typeof name, typeof age, typeof isAdmin);

// explicit type
let isActive: boolean = true;
let userName: string = 'Murad';
let userAge: number = 30;
console.log(`User: ${userName}, Age: ${userAge}, Active: ${isActive}`);

let bigIntValue: bigint = 1234567890123456789012345678901234567890n;
let symbolValue: symbol = Symbol('uniqueIdentifier');
console.log(`BigInt: ${bigIntValue}, Symbol: ${String(symbolValue)}`);
console.log(`BigInt: ${bigIntValue}, Symbol: ${symbolValue.toString()}`);
console.log(symbolValue);

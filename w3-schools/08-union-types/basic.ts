// |
let id: string | number;
id = 'abc-12345';
id = 12345;
console.log(typeof id);

/*
const printStatusCode = (code: string | number): void =>
   console.log(`Status code: ${code.toUpperCase()}`);
*/

const printStatusCode = (code: string | number): void => {
  if (typeof code === 'string') {
    console.log(`Status code: ${code.toUpperCase()}`);
  } else {
    console.log(`Status code: ${code}`);
  }
}
printStatusCode('200');
printStatusCode(404);
function logFirstTwo([first, second]: [string, string]) {
  console.log(`First: ${first}, Second: ${second}`);
}
logFirstTwo(['TypeScript', 'JavaScript']);

function greet([name = 'Guest', lang = 'en']: [string?, string?]) {
  console.log(`Hello ${name}, language: ${lang}`);
}
greet(['Murad']); // lang defaults to 'en'

function collectTags([mainTag, ...otherTags]: [string, ...string[]]) {
  console.log(`Main: ${mainTag}, Others: ${otherTags.join(', ')}`);
}
collectTags(['typescript', 'strict', 'generics']);

const printLanguages = ([first, second]: [string, string]) =>
  console.log(`Languages: ${first}, ${second}`);
printLanguages(['Bangla', 'English']);

function f({ x = 1 }: { x?: number }) {}
// f();
f({}); // x becomes 1
f({ x: undefined }); // x becomes 1
f({ x: 0 }); // x stays 0
f({ x: null as any }); // x is null at runtime;
// Parameter default (= {}) runs when the entire argument is missing.

type User = { id: string; name: string; age: number };
const user: User = { id: 'abc-43', name: 'Raj', age: 654 };
function printUser({ id: userId, name }: { id: string; name: string }) {
  console.log(`ID: ${userId} name: ${name}`);
}
printUser(user);

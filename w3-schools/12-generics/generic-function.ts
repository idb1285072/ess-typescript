const swap = <T, U>(a: T, b: U) => [b, a];
console.log(swap<number, string>(1, 'one'));

const merge = <T, U>(obj1: T, obj2: U) => ({ ...obj1, ...obj2 });
const result = merge({ name: 'Murad' }, { age: 27 });
console.log(result);

function filterArray<T>(arr: T[], predicate: (item: T) => boolean) {
  return arr.filter(predicate);
}
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, number => number % 2 === 0);
console.log(evenNumbers);

function mapArray<T, U>(arr: T[], callback: (item: T) => U): U[] {
  return arr.map(callback);
}
const names = ["Alice", "Bob", "Charlie"];
const nameLengths = mapArray(names, name => name.length);
console.log(nameLengths); // [5, 3, 7]
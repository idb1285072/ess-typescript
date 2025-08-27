const obj1 = {
  id: 2,
  name: 'Raj',
  address: 'Dhaka',
};
const obj2 = {
  address: 'Khulna',
  phone: '01734534544',
};

function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}
console.log(mergeObjects(obj1, obj2));

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
function mergeArrays<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
  return [...arr1, ...arr2];
}
console.log(mergeArrays(arr1, arr2));

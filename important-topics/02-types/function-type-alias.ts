type MathOperation = (a: number, b: number) => number;
const add: MathOperation = (x, y) => x + y;
const multiply: MathOperation = (x, y) => x * y;
console.log(add(3, 5));
console.log(multiply(2, 5));

type StringTransformer = (input: string) => string;
const uppercase: StringTransformer = str => str.toUpperCase();
const reverse: StringTransformer = str => str.split('').reverse().join('');
console.log(uppercase('master'));
console.log(reverse('master'));

type Identity<T> = (input: T) => T;
const stringIdentity: Identity<string> = (str: string) => str;
const numberIdentity: Identity<number> = (num: number) => num;
console.log(stringIdentity('master'));
console.log(numberIdentity(43));

type AsyncOperation = (url: string) => Promise<string>;
const fetchDate: AsyncOperation = async (url: string) => {
  const response = await fetch(url);
  return await response.json();
};
fetchDate('https://jsonplaceholder.typicode.com/todos/')
  .then(data => console.log(data))
  .catch(error => console.log(error));


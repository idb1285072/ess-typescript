const names: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
names.push('Frank');
console.log(names);

const numbers: number[] = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);
numbers.pop();
console.log(numbers);

const mixedArray: (string | number)[] = ['Alice', 42, 'Bob', 100];
mixedArray.push('Charlie');
mixedArray.push(200);
console.log(mixedArray);

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
// readonly array
const users: readonly User[] = [
  {
    id: 1,
    name: 'Alice',
    email: 'alice@gmail.com',
    isActive: true,
  },
  {
    id: 2,
    name: 'Bob',
    email: 'bob@gmail.com',
    isActive: false,
  },
];
console.log(users);
let newUser: User = {
  id: 3,
  name: 'Charlie',
  email: 'charlie@gmail.com',
  isActive: true,
}
// users.push(newUser); // Error: Property 'push' does not exist on type 'readonly User[]'.

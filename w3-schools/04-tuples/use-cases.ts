interface User {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
}
const users: User[] = [
  { id: 1, name: 'Alice', age: 30, isActive: true },
  { id: 2, name: 'Bob', age: 25, isActive: false },
  { id: 3, name: 'Charlie', age: 28, isActive: true },
];

/* return multiple values from a function */
const getUser = (id: number, users: User[]): [string, number] => {
  const user = users.find(user => user.id === id);
  if (user) {
    return [user.name, user.age];
  }
  return ['User not found', -1];
};
console.log(getUser(1, users));
console.log(getUser(4, users));


type RGB = [red: number, green: number, blue: number, alpha?: number];
const red: RGB = [255, 0, 0, 1]; 
const green: RGB = [0, 255, 0];
const blue: RGB = [0, 0, 255, 1];
console.log(red, green, blue);
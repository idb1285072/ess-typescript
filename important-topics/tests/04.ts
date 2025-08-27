interface User {
  name: string;
  age?: number;
  email?: string | null;
}

function describeUser(user: User, message = 'default message'):string {
  if (user.email === null || user.email === undefined) return message;
  return `Name: ${user.name} Age: ${user.age} Email: ${user.email}`;
}
const user1: User = {
  name: 'Raj',
  age: 32,
  email: 'raj@gmail.com',
};
const user2: User = {
  name: 'Raja',
  email: null,
};
console.log(describeUser(user1));
console.log(describeUser(user2));

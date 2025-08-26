// type narrowing - process of refining a variable's type from a broad union type to a more specific type.

const printId = (id: string | number) => {
  if (typeof id === 'string') console.log(id.toUpperCase());
  else console.log(id.toFixed(2));
};
printId(23);
printId('abc-5345');

// instanceof
// class User {
//   name: string = 'Alice';
// }
// class Admin {
//   role: string = 'admin';
// }
// function getInfo(obj: User | Admin) {
//   if (obj instanceof User) console.log(obj.name);
//   else console.log(obj.role);
// }
// console.log(getInfo(new User()));

// in
type User = { name: string; age: number };
type Admin = { role: string; level: number };

function printRole(person: User | Admin) {
  if ('role' in person) {
    console.log(person.role);
  } else {
    console.log(person.name);
  }
}

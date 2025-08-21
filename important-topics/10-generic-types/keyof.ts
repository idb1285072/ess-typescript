type Person = {
  name: string;
  age: number;
  active: boolean;
}
type Keys = keyof Person; // "name"|"age"|"active"

const user = {
  id: 101,
  name: 'Raj',
  isAdmin: true,
};
type UserKeys = keyof typeof user; // "id"|"name"|"idAdmin"

function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
const name = prop(user, 'name');
const isAdmin = prop(user, 'isAdmin');
// const age = prop(user, 'age');

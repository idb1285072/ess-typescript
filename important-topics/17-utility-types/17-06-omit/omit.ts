// interface User {
//   id: number;
//   name: string;
//   age: number;
//   email: string;
//   password: string;
// }
// // omit password and email
// type UserWithoutSensitiveInfo = Omit<User, 'password' | 'email'>;
// const user: UserWithoutSensitiveInfo = {
//   id: 1,
//   name: 'Alice',
//   age: 30,
// };

// remove sensitive info

interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
}
type EditableUser = Omit<
  User,
  'id' | 'passwordHash' | 'createdAt' | 'updatedAt'
>;
/*
type EditableUser = {
  name: string;
  email: string;
  role: "admin" | "user";
};
*/

function updateUser(id: string, updates: EditableUser) {
  // Only name, email, and role can be updated
  // id is passed separately and passwordHash is untouched
}

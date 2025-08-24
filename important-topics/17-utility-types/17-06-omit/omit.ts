interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
}
// omit password and email
type UserWithoutSensitiveInfo = Omit<User, 'password' | 'email'>;
const user: UserWithoutSensitiveInfo = {
  id: 1,
  name: 'Alice',
  age: 30,
};

// remove sensitive info
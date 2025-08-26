// primitive type
type ID = string | number;
let userId: ID = 'abc-12345';

// object type
type User = {
  id: number;
  name: string;
  isActive: boolean;
};
const users: User[] = [
  { id: 1, name: 'Alice', isActive: true },
  { id: 2, name: 'Bob', isActive: false },
  { id: 3, name: 'Charlie', isActive: true },
];
const activeUsers: User[] = users.filter(user => user.isActive);
console.log(activeUsers);

// generic type
type ApiResponse<T> = {
  data: T;
  
  error?: string;
};
const userResponse: ApiResponse<User> = {
  data: { id: 1, name: 'Murad', isActive: true },
};

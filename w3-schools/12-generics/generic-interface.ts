interface Repository<T> {
  getAll(): T[];
  getById(id: number): T | undefined;
  add(item: T): void;
}
interface User {
  id: number;
  name: string;
}
const UserRepo: Repository<User> = {
  getAll: () => [{ id: 1, name: 'Alice' }],
  getById: id => ({ id, name: 'Bob' }),
  add: user => console.log('Added', user),
};

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
const response: ApiResponse<string[]> = {
  data: ['apple', 'banana'],
  status: 200,
  message: 'Success',
};

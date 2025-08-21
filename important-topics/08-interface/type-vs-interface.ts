// type - union, tuple
type ID = number | string;
type Point = [number, number];
const userId: ID = 'abc123';
const point: Point = [3, 5];

// interface - extends, declaration merging
interface User {
  name: string;
  age: number;
}
interface User {
  email?: string;
}
interface Employee extends User {
  employeeId: number;
}
const emp1: Employee = {
  name: 'Alice',
  age: 43,
  employeeId: 434,
};
console.log(emp1);

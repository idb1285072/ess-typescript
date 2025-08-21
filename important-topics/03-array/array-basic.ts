const users: string[] = ['user1', 'user2', 'user3']; // type annotation
const marks: number[] = [94, 54, 77, 65];

users.push('user4');
// users.push(43);
marks.push(75);

const students: Array<string> = ['student1', 'student2', 'student3']; // generic
console.log(students.length);

// heterogeneous array
const heterogeneous: (string | number)[] = ['str1', 43, 'str2', 'str3', 5];
console.log(heterogeneous);
heterogeneous.push('str4');
heterogeneous.push(55);
// heterogeneous.push(false);

// readonly array
let readonlyNumbers: readonly number[] = [1, 2, 3];
// readonlyNumbers.push(5);
// readonlyNumbers.pop();


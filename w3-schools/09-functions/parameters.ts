// optional parameters
const greet = (name: string, title?: string) => {
  return title ? `Hello, ${title} ${name}` : `Hello, ${name}`;
};
console.log(greet('Alice'));
console.log(greet('Alice', 'Dr. '));

// default parameters
const log = (message: string, level: 'info' | 'warn' | 'error' = 'info') => {
  console.log(`[${level.toUpperCase()}] ${message}`);
};
log('Server started');
log('Something went wrong', 'error');

// rest parameters
const sum = (...numbers: number[]): number =>
  numbers.reduce((sum, number) => sum + number, 0);
console.log(sum(1, 2, 3, 4, 5));

// destructured parameters
const createUser = ({username, user}:{username:string; user:string})=>{

}
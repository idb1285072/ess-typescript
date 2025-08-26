let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: 'Murad',
  age: 34,
  hobbies: ['Sports', 'Cooking', 'Reading'],
  role: {
    description: 'admin',
    id: 5,
  },
};

// {} -> not null or undefined
let val: {} = 'Hello';
val = [];
// val = null;
// val = undefined;

let data: Record<string, number | string>; // Record should be object 
data = {
  entry1: 1,
  entry2: "some string"
}
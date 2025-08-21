type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

let user: User | null = null;
user = {
  id: 101,
  name: 'Raj',
  email: 'raj@gmail.com',
  isActive: true,
};
console.log(user);
user = null;

// null - intentional absence,
// explicitly set,
// reset or clear a variable

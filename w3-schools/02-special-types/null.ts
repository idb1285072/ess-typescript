type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

let users: User | null = null;

// null - intentional absence, 
// explicitly set, 
// reset or clear a variable
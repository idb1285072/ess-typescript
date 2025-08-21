type User = {
  name: string;
  age: number;
  isAdmin?: boolean;
};
const john: User = {
  name: 'John',
  age: 33,
};
console.log(john.name);
console.log(john.age);

// nested object
type Post = {
  id: number;
  title: string;
  author: {
    id: number;
    name: string;
  };
};
const blogPost: Post = {
  id: 1,
  title: 'TypeScript Basic',
  author: {
    id: 3,
    name: 'Master',
  },
};
console.log(blogPost);

type Timestamps = {
  createdAt: Date;
  updatedAt: Date;
};
type Article = {
  id: number;
  title: string;
} & Timestamps;
const article: Article = {
  id: 1,
  title: 'Type Aliases in TS',
  createdAt: new Date(),
  updatedAt: new Date(),
};

// readonly and optional property
type Prodcut = {
  readonly id: number;
  name: string;
  description?: string;
};
const item: Prodcut = {
  id: 101,
  name: 'Laptop',
};
// item.id = 435
item.name = 'Desktop';
console.log(item.id);
console.log(item.description);

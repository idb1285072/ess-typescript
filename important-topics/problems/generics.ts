// 1.
function swap<T, U>([a, b]: [T, U]): [U, T] {
  return [b, a];
}
console.log(swap([1, 'hello']));

// 2.
class Stack<T> {
  constructor(public items: T[]) {}
  push(item: T): void {
    this.items.push(item);
  }
  pop(): T | undefined {
    return this.items.pop();
  }
  peek(): T | undefined {
    return this.items.at(-1);
  }
  size(): number {
    return this.items.length;
  }
}
const stack1 = new Stack<number>([1, 2, 4]);
console.log(stack1.peek());
console.log(stack1.items);
console.log(stack1.pop());
console.log(stack1.items);
console.log(stack1.size());

// 3.
function mergeWithId<I>(
  obj1: { id: I },
  obj2: { id: I }
): { id: I } & typeof obj1 & typeof obj2 {
  return { ...obj1, ...obj2 };
}
const user = {
  id: 1,
  name: 'Murad',
  age: 32,
};
const person = {
  id: 3,
  name: 'Raj',
  address: {
    city: 'Dhaka',
    country: 'Bangladesh',
  },
};
console.log(mergeWithId(user, person));

// 4.
function pluck<T, K extends keyof T>(args: T[], prop: K): T[K][] {
  return args.map(arg => {
    return arg[prop];
  });
}

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
];
console.log(pluck(users, 'name')); // string[]
console.log(pluck(users, 'age')); // number[]

// 5.
function createPair<T = string, U = number>(arg1: T, arg2: U): [T, U] {
  return [arg1, arg2];
}
console.log(createPair(3, 5));
console.log(createPair('master', 4));

// 6.
type User = {
  id: number;
  name: string;
  address: {
    city: string;
    country: string;
  };
};
// type DeepPartial<T extends object> = {
//   [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
// };
// type A = DeepPartial<User>;

/*
DeepPartial<User>
{
  id?: number;
  name?: string;
  address?: {
    city?: string;
    country?: string;
  }
}
*/

// 7.

// TupleToObject<typeof keys> should be { id: "id"; name: "name" }
const keys = ['id', 'name'] as const;
type TupleToObject<T extends readonly string[]> = { [K in T[number]]: K };
type B = TupleToObject<typeof keys>;

// Partial<T>
const user1 = {
  name: 'master',
  age: 32,
  address: {
    city: 'Dhaka',
    country: 'Bangladesh',
  },
  hobbies: ['swimming', 'reading']
};
type ShallowPartial<T extends Record<string | number | symbol, unknown>> = {
  [K in keyof T]?: T[K];
};
type T1 = ShallowPartial<typeof user1>;
// type T2 = ShallowPartial<string[]>;
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
type T3 = DeepPartial<typeof user1>;
const user2: T3 = {
  address: {
    city: 'Dhaka',
  },
};
console.log(user2);

// ShallowRequired<T>

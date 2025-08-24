interface User {
  id: number;
  name?: string;
  age?: number;
  email?: string;
}

type RequiredUser = Required<User>;
const newUser: RequiredUser = {
  id: 1,
  name: 'Alice',
  age: 30,
  email: 'alice@gmail.com',
};
// strip off optional marker

// does not deep required
interface Person {
  name?: string;
  address?: {
    street?: string;
    city?: string;
  };
}
type RequiredPerson = Required<Person>;
/*
type RequiredPerson = {
    name: string;
    address: {
        street?: string | undefined;
        city?: string | undefined;
    };
}
*/

interface Example {
  name?: string | undefined;
}
type X = Required<Example>;
// const x : X = {name: undefined};
// all property becomes optional

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

type PartialUser = Partial<User>;
const updateUser: PartialUser = { name: 'Alice' };

// readonly
interface Config {
  readonly host: string;
  port: number;
}
type MutableConfig = Partial<Config>;
const configUpdate: MutableConfig = { port: 8080 };
// configUpdate.host = 'localhost'; // optional but readonly

// updating objects
// optional configuration

// does not deep partial
interface Person {
  name: string;
  address: {
    street: string;
    city: string;
  };
}
type PartialPerson = Partial<Person>;
/*
type PartialPerson = {
    name?: string | undefined;
    address?: {
        street: string;
        city: string;
    } | undefined;
}
*/

type x = Partial<string>; // string

// update, config, flexible input
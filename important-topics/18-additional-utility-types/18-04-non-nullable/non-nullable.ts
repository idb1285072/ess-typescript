// remove null and undefined from a type

type A = NonNullable<string | number | null | undefined>; // string | number
type B = NonNullable<string | null | undefined>; // string
type D = NonNullable<string>; // string;
type C = NonNullable<null | undefined>; // never
type E = NonNullable<null>; // never
type F = NonNullable<undefined>; // never
type G = NonNullable<never>; // never
type H = NonNullable<void>; // void

// strict null checks
function ensure<T>(value: T): NonNullable<T> {
  if (value == null) {
    throw new Error("Value is null or undefined");
  }
  return value as NonNullable<T>;
}

const x = ensure("hello");   // string
const y = ensure(null);      // runtime error

// narrowing optional properties
interface User {
  id: string;
  name?: string | null;
}
type CleanUser = {
  id: string;
  name: NonNullable<User["name"]>;
};

function processUser(user: User) {
  const cleanUser: CleanUser = {
    id: user.id,
    name: ensure(user.name),
  };
  // ...
}
processUser({ id: "1", name: "Alice" });
processUser({ id: "2", name: null }); // runtime error


type X = { x: string | null };
type Y = NonNullable<X>; // { x: string | null }still contains null

interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

type UserPublic = Pick<User, 'id' | 'name'>;
/* Equivalent to:
type UserPublic = {
  id: number;
  name: string;
};
*/
const user: UserPublic = { id: 1, name: 'Alice' };

// DTO

// empty pick
type Empty = Pick<User, never>; // {}

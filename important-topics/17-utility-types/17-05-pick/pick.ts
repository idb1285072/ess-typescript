interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
}

type PublicUserProfile = Pick<User, 'id' | 'name' | 'role' | 'createdAt'>;
/* Equivalent to:
type PublicUserProfile = {
  id: string;
  name: string;
  role: "admin" | "user";
  createdAt: Date;
};
*/
function toPublicProfile(user: User): PublicUserProfile {
  const { id, name, role, createdAt } = user;
  return { id, name, role, createdAt };
}

interface Post {
  id: string;
  title: string;
  content: string;
  author: User;
}

type PostSummary = Pick<Post, 'id' | 'title'> & {
  author: Pick<User, 'id' | 'name'>;
};

const summary: PostSummary = {
  id: 'p1',
  title: 'Clean Architecture in TypeScript',
  author: {
    id: 'u1',
    name: 'Murad',
  },
};

// DTO

// empty pick
type Empty = Pick<User, never>; // {}

// type alias vs interface -> declaration merging
// interface can use as type alias
interface Authenticable {
  username: string;
  password: string;
}

interface Authenticable {
  login(): boolean;
  logout(): void;
}

const user1: Authenticable = {
  username: 'john_doe',
  password: 'securePassword123',
  login: function () {
    // Simulate a login process
    console.log(`${this.username} logged in.`);
    return true;
  },
  logout: function () {
    // Simulate a logout process
    console.log(`${this.username} logged out.`);
  },
};

console.log(user1.login()); // Output: john_doe logged in.
user1.logout(); // Output: john_doe logged out.

class AuthenticableUser implements Authenticable {
  constructor(public username: string, public password: string) {}

  login(): boolean {
    console.log(`${this.username} logged in.`);
    return true;
  }

  logout(): void {
    console.log(`${this.username} logged out.`);
  }
}

const user2 = new AuthenticableUser('jane_doe', 'anotherSecurePassword456');
console.log(user2.login()); // Output: jane_doe logged in.
user2.logout(); // Output: jane_doe logged out.

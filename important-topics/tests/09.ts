interface User {
  id: number;
  name: string;
}
abstract class Repository<T> {
  static instanceCount = 0;
  public items: T[] = [];
  abstract addItem(item: T): void;
  constructor() {
    Repository.instanceCount++;
  }
}

class UserRepository extends Repository<User> {
  constructor() {
    super();
  }
  addItem(item: User): void {
    this.items.push(item);
  }
}

const user1: User = { id: 1, name: 'raj' };
const user2: User = { id: 2, name: 'raja' };
const user3: User = { id: 3, name: 'rajon' };
const userRepository1: UserRepository = new UserRepository();
const userRepository2: UserRepository = new UserRepository();
console.log(Repository.instanceCount);
userRepository1.addItem(user1);
userRepository1.addItem(user2);
userRepository1.addItem(user3);
console.log(userRepository1.items);
console.log(userRepository2.items);

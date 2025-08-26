class User {
  id: number;
  firstName: string;
  lastName: string;
  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName.toUpperCase();
    this.lastName = lastName.toUpperCase();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const user1 = new User(1, 'raj', 'khan');
console.log(user1);
console.log(user1.getFullName());

// readonly
// getter setter

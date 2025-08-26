// class -> blue print
class Person {
  firstName: string;
  lastName: string;
  age: number;
  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person('John', 'Doe', 30);
console.log(person1);
console.log(person1.fullName());
person1.firstName = 'Jane';
console.log(person1.fullName());
person1.age = 31;
console.log(person1);

// shorthand syntax
class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number
  ) {}
  // constructor === function. So default/optional parameters can be used
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
const user1 = new User('Alice', 'Smith', 25);
console.log(user1);
console.log(user1.fullName());
user1.firstName = 'Bob';
console.log(user1.fullName());
user1.age = 26;
console.log(user1);

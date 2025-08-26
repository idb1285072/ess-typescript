// Access Modifiers, Getters, Setters, Inheritance, Method Overriding
class Person {
  private readonly hobbies: string[] = [];

  constructor(
    protected firstName: string,
    protected lastName: string,
    private age: number
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  get personAge(): number {
    return this.age;
  }

  set personAge(newAge: number) {
    if (newAge > 0) {
      this.age = newAge;
    }
  }

  addHobby(hobby: string): void {
    this.hobbies.push(hobby);
  }

  getHobbies(): string[] {
    return [...this.hobbies]; // return copy (immutable)
  }
}

class Employee extends Person {
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    public jobTitle: string
  ) {
    super(firstName, lastName, age);
  }

  // override
  get fullName(): string {
    return `Employee: ${this.firstName} ${this.lastName}, Job Title: ${this.jobTitle}`;
  }
}

// Usage
const emp1 = new Employee('John', 'Doe', 30, 'Software Engineer');

emp1.addHobby('Coding');
emp1.addHobby('Gaming');

console.log(emp1.fullName); // uses overridden getter
console.log('Age:', emp1.personAge);
console.log('Hobbies:', emp1.getHobbies());

// update age safely
emp1.personAge = 31;
console.log('Updated Age:', emp1.personAge);

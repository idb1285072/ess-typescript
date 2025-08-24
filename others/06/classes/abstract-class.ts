abstract class Person {
  constructor(protected firstName: string, protected lastName: string) {}

  abstract getDescription(): string;
  get getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    super(firstName, lastName);
  }

  getDescription(): string {
    return `${this.getFullName} is a ${this.jobTitle}.`;
  }
}

class Student extends Person {
  constructor(firstName: string, lastName: string, private major: string) {
    super(firstName, lastName);
  }

  getDescription(): string {
    return `${this.getFullName} is studying ${this.major}.`;
  }
}

const emp = new Employee('John', 'Doe', 'Software Engineer');
console.log(emp.getDescription());
const student = new Student('Jane', 'Smith', 'Computer Science');
console.log(student.getDescription());

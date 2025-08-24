// Base interface
interface Person {
  firstName: string;
  lastName: string;
  fullName(): string;
}

// Employee interface extends Person
interface Employee extends Person {
  jobTitle: string;
  getDetails(): string;
}

// Implementation
class Developer implements Employee {
  constructor(
    public firstName: string,
    public lastName: string,
    public jobTitle: string
  ) {}

  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getDetails(): string {
    return `Employee: ${this.fullName()}, Job Title: ${this.jobTitle}`;
  }
}

// Usage
const dev = new Developer('Alice', 'Johnson', 'Frontend Developer');

console.log(dev.fullName()); // Alice Johnson
console.log(dev.getDetails()); // Employee: Alice Johnson, Job Title: Frontend Developer

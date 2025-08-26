class Employee {
  protected salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }
}

class Manager extends Employee {
  showSalary() {
    console.log(`Manager's salary: ${this.salary}`); // allowed
  }
}

const m = new Manager(5000);
m.showSalary(); // works
// console.log(m.salary); Error: protected

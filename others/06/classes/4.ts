// static members
class Employee {
  private static employeeCount: number = 0;
  constructor(
    private firstName: string,
    private lastName: string,
    private jobTitle: string
  ) {
    Employee.employeeCount++;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  static getEmployeeCount(): number {
    return Employee.employeeCount;
  }
}

const emp1 = new Employee('John', 'Doe', 'Software Engineer');
const emp2 = new Employee('Jane', 'Smith', 'Product Manager');
console.log(emp1.fullName);
console.log(emp2.fullName);
console.log('Total Employees:', Employee.getEmployeeCount());

// getters and setters
class Person {
  private _firstName: string = '';
  private _lastName: string = '';
  private _age: number = 0;

  set firstName(firstName: string) {
    if (firstName.trim() === '') {
      throw new Error('First name cannot be empty');
    }
    this._firstName = firstName;
  }
  set lastName(lastName: string) {
    if (lastName.trim() === '') {
      throw new Error('Last name cannot be empty');
    }
    this._lastName = lastName;
  }
  set age(age: number) {
    if (age < 0 || age > 120) {
      throw new Error('Age must be between 0 and 120');
    }
    this._age = age;
  }
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person();
person1.firstName = 'John';
person1.lastName = 'Doe';
person1.age = 30;
console.log(person1);
console.log(person1.fullName);
person1.firstName = 'Jane';
console.log(person1.fullName);
person1.age = 31;
console.log(person1);

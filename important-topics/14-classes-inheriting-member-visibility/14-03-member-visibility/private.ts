class Person {
  private ssn: string;

  constructor(ssn: string) {
    this.ssn = ssn;
  }

  private getSSN() {
    return this.ssn;
  }

  show() {
    console.log(this.getSSN()); // allowed inside
  }
}

const p = new Person('123-45-6789');
// console.log(p.ssn);    Error: private
// console.log(p.getSSN()); Error: private
p.show(); // works

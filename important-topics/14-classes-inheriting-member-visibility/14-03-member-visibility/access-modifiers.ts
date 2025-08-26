class BankAccount {
  public accountNumber: string; // accessible everywhere
  private balance: number; // only inside this class
  protected owner: string; // inside class + subclasses
  readonly bankName: string = 'MyBank'; // constant

  constructor(acc: string, owner: string, balance: number) {
    this.accountNumber = acc;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance += amount; // allowed
  }

  showBalance() {
    return this.balance; // allowed inside
  }
}

class SavingsAccount extends BankAccount {
  addInterest() {
    // this.balance += 100;  Error: balance is private
    console.log(`Owner is ${this.owner}`); // allowed (protected)
  }
}

const acc = new SavingsAccount('12345', 'Alice', 1000);
console.log(acc.accountNumber); // public
console.log(acc.bankName); // readonly
// console.log(acc.balance);     Error: private
// console.log(acc.owner);       Error: protected

abstract class Payment {
  constructor(public amount: number) {}
  abstract process(): void;
  generateReceipt(): void {
    console.log(`Receipt: Pain ${this.amount} successfully.`);
  }
}

class CreditCardPayment extends Payment {
  process(): void {
    console.log(`Processing credit card payment of ${this.amount}`);
    this.generateReceipt();
  }
}
class PayPalPayment extends Payment {
  process() {
    console.log(`Processing PayPal payment of ${this.amount}`);
    this.generateReceipt();
  }
}

const cc = new CreditCardPayment(100);
cc.process();

const paypal = new PayPalPayment(200);
paypal.process();

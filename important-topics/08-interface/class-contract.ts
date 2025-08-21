interface Logger {
  log(message: string): void;
}
class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}
const consoleLogger = new ConsoleLogger();
consoleLogger.log('this is logged');

// optional and readonly property
interface User {
  readonly id: number;
  name: string;
  email?: string;
}
class RegisteredUser implements User {
  readonly id: number;
  name: string;
  email?: string;
  constructor(id: number, name: string, email?: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

// class implements multiple interface
interface Flyable {
  fly(): void;
}
interface Swimmable {
  swim(): void;
}
class Duck implements Flyable, Swimmable {
  fly(): void {
    console.log('Duck is flying');
  }
  swim(): void {
    console.log('Duck is swimming');
  }
}

// interface extends
interface Entity {
  id: number;
}
interface Product extends Entity {
  name: string;
  price: number;
}
class StoreItem implements Product {
  id: number;
  name: string;
  price: number;
  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

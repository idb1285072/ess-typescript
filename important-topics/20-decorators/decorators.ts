// class decorator
function Logger(constructor: Function) {
  console.log('Class created:', constructor.name);
}

@Logger
class Person {
  constructor(public name: string) {}
}

// method decorator
function Log(prefix: string) {
  return function (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`${prefix}${propertyKey} called with`, args);
      return original.apply(this, args);
    };
  };
}

class Calculator {
  @Log('[DEBUG] ')
  add(a: number, b: number) {
    return a + b;
  }
}

const calculator1 = new Calculator();
console.log(calculator1.add(3, 4));

// accessor decorator
function ReadOnly(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  descriptor.set = function () {
    throw new Error('This property is read-only!');
  };
}

class User {
  private _name = 'Murad';

  @ReadOnly
  set name(value: string) {
    this._name = value;
  }
}

const user1 = new User();
console.log(user1.name);
// user1.name = 'Murad';
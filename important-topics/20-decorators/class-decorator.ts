function frozen(target: Function){
  Object.freeze(target);
  Object.freeze(target.prototype)
}

function required(target: any, key: string){
  let currentValue = target[key];

  Object.defineProperty(target, key, {
    set: (newValue: string)=>{
      if(!newValue){
        throw new Error(`${key} is required.`)
      }
      currentValue = newValue;
    },
    get:()=>currentValue
  })
}

function enumerable(isEnumerable: boolean) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    descriptor.enumerable = isEnumerable;
    console.log(
      "The enumerable property of this member is set to: " +
        descriptor.enumerable,
    );
  };
}

function deprecated(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalDef = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Warning: ${key}() is deprecated. Use other methods instead.`);
    return originalDef.apply(this, args);
  };
  return descriptor;
}

@frozen
class User {
  private static userType: string = 'Generic';
  @required
  private _email: string;

  @required
  public username: string;
  public addressLine1: string = '';
  public addressLine2: string = '';
  public country: string = '';

  constructor(username: string, email: string) {
    this.username = username;
    this._email = email;
  }

  @enumerable(false)
  get userType(): string {
    return this.userType;
  }
  get email(): string {
    return this._email;
  }
  set email(newEmail: string) {
    this._email = newEmail;
  }
  @deprecated
  address(): string {
    return `${this.addressLine1}\n${this.addressLine2}\n${this.country}`;
  }
}

const p = new User('user1', 'user1@gmail.com');
p.addressLine1 = '1, New Avenue';
p.addressLine2 = 'Bahcelievler, Istanbul';
p.country = 'Turkistan';
console.log(p.address());


console.log(Object.isFrozen(User)); // true
// User.addNewProp = "Trying to add new prop value";

const user3 = new User("", "example@example.com"); // [ERR]: username is required.
const user4 = new User("example", ""); // [ERR]: _email is required.

console.log(user3, user4);
class Counter {
  static count: number = 0;
  static increment() {
    Counter.count++;
  }
  static getCount() {
    return Counter.count;
  }
}

Counter.increment();
Counter.increment();
Counter.increment();
console.log(Counter.getCount());
const c = new Counter();
// console.log(c.increment());

console.log(Math.PI); // static property
console.log(Math.max(4, 6, 7, 4)); // static method

// shared data/state
// helper methods
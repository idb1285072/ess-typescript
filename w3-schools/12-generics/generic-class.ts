class Stack<T> {
  private items: T[] = [];
  push(item: T) {
    this.items.push(item);
  }
  pop(): T | undefined {
    return this.items.pop();
  }
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}
const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop()); // 20

class Queue<T> {
  private items: T[] = [];
  enqueue(item: T) {
    this.items.push(item);
  }
  dequeue(): T | undefined {
    return this.items.shift();
  }
  size(): number {
    return this.items.length;
  }
}
const stringQueue = new Queue<string>();
stringQueue.enqueue('A');
stringQueue.enqueue('B');
console.log(stringQueue.dequeue()); // "A"

class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
  display() {
    console.log(`${this.key} => ${this.value}`);
  }
}
const kv = new KeyValuePair<string, number>('age', 25);
kv.display();

class Pair<T, U> {
  constructor(public first: T, public second: U) {}
  swap(): [U, T] {
    return [this.second, this.first];
  }
}
const pair = new Pair<number, string>(42, 'Answer');
console.log(pair.swap()); // ["Answer", 42]

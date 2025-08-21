const enum Direction {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction.Up); // 0

// no runtime object for const enums - faster performance
// no reverse mapping

enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}
console.log(Day.Monday); // 1
console.log(Day[1]); // 'Monday'
// reverse mapping
// runtime object created -> slow

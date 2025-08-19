// enum = set of named constants
// numeric enums
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction.Up); // 1
console.log(Direction.Down);

// string enums
enum Day {
  Sunday = 'SUN',
  Monday = 'MON',
  Tuesday = 'TUE',
  Wednesday = 'WED',
  Thursday = 'THU',
  Friday = 'FRI',
  Saturday = 'SAT',
}
console.log(Day.Monday); // 'MON'
console.log(Day.Friday); // 'FRI'

enum StatusCode {
  Success = 200,
  BadRequest = 400,
  NotFound = 404,
  InternalServerError = 500,
}
console.log(StatusCode.Success); // 200
console.log(StatusCode.NotFound); // 404

// heterogeneous enums - rarely used (not recommended)
enum Mixed {
  No = 0,
  Yes = 'YES',
}
console.log(Mixed.No); // 0
console.log(Mixed.Yes); // 'YES'
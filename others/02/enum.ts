// enum Role {
//   Admin,
//   Editor,
//   Guest,
// }
// let userRole: Role = 0;
// let uRole = Role.Admin;

// union type (string leteral)
let userRole: 'Admin' | 'Editor' | 'Guest';
userRole = 'Guest';
console.log(userRole);

// mimic enums
const Status = {
  Pending: "PENDING",
  InProgress: "IN_PROGRESS",
  Done: "DONE"
} as const;

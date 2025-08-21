// computed enum with bit flags
enum Permission {
  Read = 1 << 0, // 1
  Write = 1 << 1, // 2
  Execute = 1 << 2, // 4
  Delete = 1 << 3, // 8
  Share = 1 << 4, // 16
}
let permission: Permission = Permission.Read | Permission.Execute; // 0001 | 0100 = 0101 (5)
if (permission & Permission.Write) {
  console.log('Has Write');
} else {
  console.log('No Write');
}

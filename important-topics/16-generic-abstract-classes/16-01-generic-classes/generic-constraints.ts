// structural constraints
interface HasId {
  id: string;
}
function getId<T extends HasId>(obj: T): string {
  return obj.id;
}
console.log(getId({ id: 'abc-123', name: 'user1' }));

// primitive constraints
function double<T extends number>(value: T): number {
  return value * 2;
}
console.log(double(3));

// union constraints
type Role = 'admin' | 'editor' | 'viewer';
function canEdit<T extends Role>(role: T): boolean {
  return role === 'admin' || role === 'editor';
}
console.log(canEdit('admin'));

// keyof constraints
type User = { id: number; name: string };
function getValue<T extends keyof User>(key: T): string {
  return `Key is: ${key}`;
}
console.log(getValue('name'));

// generic constraints
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
console.log(getProperty({ id: 1, username: 'raj', age: 43 }, 'username'));

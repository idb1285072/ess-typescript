function mergeObject<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}
const user = { id: 1, name: 'Raj' };
const meta = { lastLogin: new Date(), isAdmin: true };
const merged = mergeObject(user, meta);
console.log(merged);

function pluck<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    result[key] = obj[key];
  }
  return result;
}
const fullUser = {
  id: 42,
  name: 'Raj',
  email: 'raj@gamil.com',
  role: 'mentor',
};
const partial = pluck(fullUser, ['id', 'name']);
console.log(partial);

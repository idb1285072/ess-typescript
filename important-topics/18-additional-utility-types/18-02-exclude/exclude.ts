type A = Exclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'
type B = Exclude<'a'|'b'|'c', 'a'|'c'>; // 'b'
type C = Exclude<'a'|'b', 'a'|'c'>; // 'b'
type D = Exclude<'a'|'b', 'c'>; // 'a'|'b'
type E = Exclude<'a'|'b', 'a'|'b'>; // never
type F = Exclude<string | number | (() => void), Function>; // string | number

// remove unwanted union members
type Status = 'pending'|'success'|'error';
type WithoutError = Exclude<Status, 'error'>; // 'pending'|'success'

// stripping null/undefined
type NonNullable<T> = Exclude<T, null | undefined>;
type T1 = NonNullable<string | number | null | undefined>; // string | number

// omit
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

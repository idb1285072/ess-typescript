type A = Extract<'a' | 'b' | 'c', 'a'>; // 'a'
type B = Extract<'a'|'b'|'c', 'a'|'c'>; // 'a'|'c'
type C = Extract<'a'|'b', 'a'|'c'>; // 'a'
type D = Extract<'a'|'b', 'c'>; // never
type E = Extract<'a'|'b', 'a'|'b'>; // 'a'|'b'
type F = Extract<string | number | (() => void), Function>; // () => void

// filtering union members
// narrowing event types

// Extract<T, U> => everything in T that matches U
// Exclude<T, U> => everything in T except that matches U
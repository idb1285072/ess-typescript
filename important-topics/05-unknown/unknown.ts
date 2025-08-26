let value: unknown;
value = 'Hello';
// value = 42;

if (typeof value === 'string') {
  console.log(value.toUpperCase());
}

value = [1, 2, 3];

if (Array.isArray(value)) {
  console.log(value.length);
}

// instead of any, use unknown
// must check type before using

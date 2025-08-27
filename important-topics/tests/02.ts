function f(args: (string | number)[]): (string | number)[] {
  return args.map(arg => {
    if (typeof arg === 'string') return arg.toUpperCase();
    else return arg * 2;
  });
}
const arr1 = [0, NaN, 'raj', undefined, 5];
const arr2 = [0, 2, 'raj', NaN, '', 5];
const arr3 = [0, NaN, 'raj', undefined, 5];

// console.log(f(arr1));
console.log(f(arr2));

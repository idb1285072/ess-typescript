const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type MyReturnType<T extends Function> = T extends (...args: any) => infer R
  ? R
  : never;

type A = MyReturnType<typeof fn>;
type B = ReturnType<typeof fn>;
type C = ReturnType<() => void>;

// Awaited<T> -> resolve value of Promise or nested Promise (recursively)

type X = Pick<{name:string, id:number, password: string}, 'name'|'id'>;
type Y = Omit<{name:string, id:number, password: string}, 'name'|'id'>;

type A = ReturnType<()=>void>
const f = (num1:number, num2:number)=>num1+num2
type B = ReturnType<typeof f>
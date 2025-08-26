let name: string = 'Murad';
let greeting: string = `Hello, ${name}`;
console.log(greeting);

type Event = `on${Capitalize<string>}`;
interface Handlers {
  [key: Event]: () => void;
}
const handlers: Handlers = {
  onClick: () => console.log('Clicked'),
  onSubmit: () => console.log('Submitted'),
  // onblur: () => console.log('Blured'),
};
if (handlers.onClick) {
  handlers.onClick();
}

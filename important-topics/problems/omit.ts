interface Todo {
  title: string
  description: string
  completed: boolean
}
type MyOmit<T, U extends keyof T> = {[K in keyof T]: K extends U ? T[K] : undefined} 

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

// const todo: TodoPreview = {
//   completed: false,
// }
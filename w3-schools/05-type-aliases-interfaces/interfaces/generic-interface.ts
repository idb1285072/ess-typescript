interface ApiResponse<T> {
  status: string;
  data: T;
  error?: string;
}

interface User {
  id: number;
  name: string;
}

const response: ApiResponse<User> = {
  status: 'success',
  data: { id: 1, name: 'John Doe' },
};

console.log(response);
console.log("Murad");
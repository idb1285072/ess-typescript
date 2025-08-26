interface User {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
}

function printUser(user: User) {
  console.log(user.name);
}

const product: Product = { id: 1, name: 'Laptop' };
printUser(product); // User and Product compatible

const user1 = { id: 1, name: 'Raj', email: 'raj@gmail.com' };
const user2: User = user1; // OK
// const user3: User = { id: 1, name: 'Raj', email: 'raj@gmail.com' }; // error
console.log(user2);

// unique brands
type UserId = number & { readonly brand: unique symbol };
type ProductId = number & { readonly brand: unique symbol };

function getUserById(id: UserId) {
  console.log(`Fetching user: ${id}`);
}
function getProductById(id: ProductId) {
  console.log(`Fetching product: ${id}`);
}

let u: UserId = 1 as UserId;
let p: ProductId = 1 as ProductId;
getProductById(p);

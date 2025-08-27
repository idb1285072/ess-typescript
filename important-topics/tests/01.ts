interface Product {
  id: number;
  name: string;
}

const user = {
  id: 1,
  name: 'Raja',
  age: 43,
};

const product: Product = user; // problem

function getProduct(product: Product): Product {
  console.log(`Id: ${product.id}\nName: ${product.name}`);
  return product;
}
const a = getProduct(user); // problem
console.log(a); // user as output

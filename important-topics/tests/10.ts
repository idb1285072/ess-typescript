interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

type UpdatingProduct = Partial<Product>;
type RequiredProduct = Required<Product>;
type SummaryProduct = Readonly<Pick<Product, 'id' | 'name'>>;
type WithoutDescriptionProduct = Omit<Product, 'description'>;

const user: { id: number; name: string; email: string; isActive: boolean } = {
  id: 1,
  name: 'Alice',
  email: 'alice@gmail.com',
  isActive: true,
};
console.log(user);

// optional properties
const userWithOptional: {
  id: number;
  name: string;
  email?: string;
  isActive: boolean;
} = {
  id: 2,
  name: 'Bob',
  isActive: false,
};
console.log(userWithOptional);

// index signatures
const userScores: { [key: string]: number } = {
  Alice: 95,
  Bob: 85,
  Charlie: 90,
};
console.log(userScores);

interface HexColor {
  [color: string]: string;
}
const colors: HexColor = {
  primary: '#ff5733',
  secondary: '#33c1ff',
  accent: '#ff33a1',
};
console.log(colors.primary);

const ages: { admin: number; [userName: string]: number } = {
  admin: 30,
  Alice: 25,
  Bob: 28,
  Charlie: 22,
};
console.log(ages.admin);
console.log(ages['Alice']);

type HttpHeader = [key: string, value: string];
const authHeader: HttpHeader = ['Authorization', 'Bearer token123'];
const contentType: HttpHeader = ['Content-Type', 'application/json'];
console.log(authHeader, contentType);

type RGB = [r: number, g: number, b: number];
const primaryColor: RGB = [255, 0, 0];
const secondaryColor: RGB = [0, 255, 0];
console.log(primaryColor, secondaryColor);

type ValidationResult = [field: string, error: string];
const result1: ValidationResult = ['email', 'Invalid format'];
const result2: ValidationResult = ['password', 'Too short'];
console.log(result1, result2);

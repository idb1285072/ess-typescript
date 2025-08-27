/*
Problem 1: Overloaded Validator
Task:
Implement a validate function with these overloads:
- (value: string, rule: 'email') => boolean
- (value: string, rule: 'url') => boolean
- (value: number, rule: 'positive') => boolean
- (value: number, rule: 'integer') => boolean
Challenge: Ensure that only valid rule-value combinations are allowed. For example, 'email' should not be used with a number. Use overloads and discriminated unions.
*/
type Rule = 'email' | 'url' | 'positive' | 'integer';
function validate(value: string, rule: 'email'): boolean;
function validate(value: string, rule: 'url'): boolean;
function validate(value: number, rule: 'positive'): boolean;
function validate(value: number, rule: 'integer'): boolean;
function validate(value: string | number, rule: Rule): boolean {
  if (rule === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(value as string);
  } else if (rule === 'url') {
    try {
      new URL(value as string);
      return true;
    } catch (_) {
      return false;
    }
  } else if (rule === 'positive') {
    return (value as number) > 0;
  } else {
    return Number.isInteger(value as number);
  }
}
console.log(validate(20.2, 'integer'));
console.log(validate('a@.com', 'email'));
// console.log(validate(0, 'email'));

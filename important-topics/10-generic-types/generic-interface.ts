interface Validator<T> {
  validate(intput: T): boolean;
  errors?: string[];
}
const stringLengthValidator: Validator<string> = {
  validate: input => input.length >= 5,
  errors: ['Input must be at least 5 characters'],
};

console.log(stringLengthValidator.validate('Hello'));

const throwError = (message: string): never => {
  throw new Error(message);
};

const processValue = (value: string | number) => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value.toFixed(2);
  } else {
    const exhaustiveCheck: never = value;
  }
};

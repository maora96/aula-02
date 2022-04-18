const checkIfEven = (list: number[]): string => {
  const result: boolean = list.every((number) => {
    return number % 2 === 0;
  });

  if (result) {
    return `Array válido`;
  }
  return `Array inválido`;
};

const numbers: number[] = [0, 122, 4, 6, 8, 44];

console.log(checkIfEven(numbers));

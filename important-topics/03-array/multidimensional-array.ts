let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
matrix.forEach(row => {
  let line = '';
  row.forEach(num => {
    line = line + '\t' + num;
  });
  console.log(line);
});

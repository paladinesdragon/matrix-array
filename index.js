function zeroArray(r, c) {
  // Creates a 2-D array with rows (r) and columns (c) of zeroes
  let newArray = [];
  for (let i = 0; i < r; i++) {
    // Adds the m-th row into newArray
    let row = [];
    for (let j = 0; j < c; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(5, 2);
console.log(matrix);
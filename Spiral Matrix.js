// 54. Spiral Matrix
// Given an m x n matrix, return all elements of the matrix in spiral order.

var spiralOrder = function(matrix) {
    let width = matrix[0].length, height = matrix.length;
    let res = [];
    let rowStart = 0, rowEnd = height - 1;
    let colStart = 0, colEnd = width - 1;
    while (colStart <= colEnd && rowStart <= rowEnd) {
      for (var j = colStart; j <= colEnd; j++) {
        res.push(matrix[rowStart][j]);
      }
      for (var i = rowStart + 1; i <= rowEnd; i++) {
        res.push(matrix[i][colEnd]);
      }
      if (rowStart !== rowEnd) {
        for (j = colEnd - 1; j >= colStart; j--) {
          res.push(matrix[rowEnd][j]);
        }
      }
      if (colStart !== colEnd) {
        for (i = rowEnd - 1; i > rowStart; i--) {
          res.push(matrix[i][colStart]);
        }
      }
      rowStart++, rowEnd--, colStart++, colEnd--;
    }
    return res;
  };
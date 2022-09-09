  // 240. Search a 2D Matrix II
// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
  // Integers in each row are sorted in ascending from left to right.
  // Integers in each column are sorted in ascending from top to bottom.

  var searchMatrix = function(matrix, target) {
    let m = matrix.length, n = matrix[0].length;
    for (var i = 0; i < m; i++) {
      let low = 0, high = n - 1;
      while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (matrix[i][mid] === target) return true;
        else if (matrix[i][mid] > target) high = mid - 1;
        else low = mid + 1;
      }
    }
    return false;
  };
 
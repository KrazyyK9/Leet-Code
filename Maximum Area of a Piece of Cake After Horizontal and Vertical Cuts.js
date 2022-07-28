// 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
// Return the maximum area of a piece of cake after you cut at each horizontal and vertical position provided in the arrays horizontalCuts and verticalCuts. Since the answer can be a large number, return this modulo 10^9 + 7.

// Time Complexity: O(h + v) (horizontalCuts + verticalCuts)
// Space Complexity: O(1)

var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    //sort horizontal and vertical cuts from largest to smallest
    horizontalCuts = horizontalCuts.sort((a, b) => a - b);
    verticalCuts = verticalCuts.sort((a, b) => a - b);

    //Calculate max height and width
    let maxH = Math.max(horizontalCuts[0], h - horizontalCuts[horizontalCuts.length - 1]);
    let maxW = Math.max(verticalCuts[0], w - verticalCuts[verticalCuts.length - 1]);

    //Update if difference between horizontal or vertical cuts [i] and horizontal or vertical cuts [i-1] is bigger than max 
    for (var i = 1; i < horizontalCuts.length; i++) {
      maxH = Math.max(maxH, horizontalCuts[i] - horizontalCuts[i - 1]);
    }
    for (var j = 1; j < verticalCuts.length; j++) {
      maxW = Math.max(maxW, verticalCuts[j] - verticalCuts[j - 1]);
    }
    return Number(BigInt(maxH) * BigInt(maxW) % 1000000007n);
  };
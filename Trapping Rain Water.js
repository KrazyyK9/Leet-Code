// 42. Trapping Rain Water
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

var trap = function(height) {
    let walls = [], total = 0;
    let max = 0;
    for (var i = 0; i < height.length; i++) {
      walls.push(max);
      max = Math.max(max, height[i]);
    }
    max = 0;
    for (var j = height.length - 1; j >= 0; j--) {
      walls[j] = Math.min(walls[j], max);
      max = Math.max(max, height[j]);
    }
    for (var h = 0; h < height.length; h++) {
      let water = walls[h] - height[h];
      if (water > 0) total += water;
    }
    return total
  };
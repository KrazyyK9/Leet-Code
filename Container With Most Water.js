// One is given an integer array height of length n. There are n vertical lines drawn such 
// that two endpoints of the ith line are (i,0) and (i, height[i]).  Find two lines that 
// together with x-axis form a container and has the most water.
// Return maximum amount of water a container can store.
// Notice that one may not slant the container.

// # example 1
// input: 
// height = [1,8,6,2,5,4,8,3,7]
// output: 
// 49

// time complexity: O(n^2)


var maxArea = function(heights) {
    let maxArea = 0;

  for(let p1 = 0; p1 < heights.length; p1++) {
    for(let p2 = p1 + 1; p2 < heights.length; p2++) {

      const height = Math.min(heights[p1],heights[p2]);
      const width = p2 - p1;
      const area = height * width;

      maxArea = Math.max(maxArea,area);
      
    }
  };

  return maxArea;
};
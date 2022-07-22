// 55. Jump Game
// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.

// Time Compelxity = 0(n2)

var canJump = function(nums) {
    let max = -Infinity, n = nums.length;
    for (var i = 0; i < n; i++) {
      max = Math.max(max - 1, nums[i]);
      if (max < 1 && i !== n - 1) return false;
    }  
    return true;
  };
  
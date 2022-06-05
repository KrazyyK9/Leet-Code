// 15. 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Time Complexity: O(n^2) 136 ms
// Space Complexity: O(logn) (built-in sorting algo) 49.3 MB 

var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
    let res = [];

    for (var i = 0; i < nums.length - 2 && nums[i] <= 0; i++) {
      // increment i while prev number is a duplicate
      while (nums[i] === nums[i - 1]) i++;
      let l = i + 1, r = nums.length - 1;

      while (l < r) {
        let sum = nums[i] + nums[l] + nums[r];

        if (sum === 0) {
          res.push([nums[i], nums[l], nums[r]]);
          l++, r--;
          // increment l while prev number is a duplicate
          while (l < r && nums[l] === nums[l - 1]) l++;

        } else if (sum < 0) l++;

        else r--;
      }

    }  
    
    return res;
  };

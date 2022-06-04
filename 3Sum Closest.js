// 16. 3Sum Closest
// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution

// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// Example 2:
// Input: nums = [0,0,0], target = 1
// Output: 0

// Time Complexity: O(n^2) 84ms
// Space Complexity: O(log n) (built in sorting algo) 40.5MB

var threeSumClosest = function(numbers, target) {
    let difference = Infinity;
    numbers = numbers.sort((a, b) => a - b);
    for (let i = 0; i < numbers.length; i++) {
      let l = i + 1, r = numbers.length - 1;
      while (l < r) {
        let sum = numbers[i] + numbers[l] + numbers[r];
        if (Math.abs(target - sum) < Math.abs(difference)) difference = target - sum;
        if (sum == target) break;
        if (sum < target) l++;
        else r--;
      }
    }
    return target - difference;``
  };
  // Two test cases to run function on
  console.log(threeSumClosest([-1,2,1,-4], 1)) // 2
  console.log(threeSumClosest([-1,2,1,-4,1], 1)) // 1`
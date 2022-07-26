// 169. Majority Element
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

 

// Constraints:

//     n == nums.length
//     1 <= n <= 5 * 104
//     -109 <= nums[i] <= 109

// Time Complexity: O(n) 72ms
// Space Complexity: O(1) 42.3MB

var majorityElement = function(nums) {
    let count = 0, element;
    for (var num of nums) {
      if (count === 0) {
        element = num;
      }
      if (num === element) count++;
      else count--;
    }  
    return element;
  };
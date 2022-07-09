/*
Find Pair With Given Sum
Given a list of positive integers nums and an int target, return indices of 
the two numbers such that they add up to a target - 30.
Conditions:
You will pick exactly 2 numbers.
You cannot pick the same element twice.
If you have muliple pairs, select the pair with the largest number.
Input: nums = [1, 10, 25, 35, 60], target = 90
Output: [2, 3]
Explanation: nums[2] + nums[3] = 25 + 35 = 60 = 90 - 30
*/

function givenSum(nums, target) {

    if(!nums || !target) {return null;}
  
    let seen = {};
  
    for(let i = 0; i < nums.length; i++) {
      let partner = (target - 30) - nums[i];
      let found = seen[partner];
  
      if(found !== undefined) {
        return [partner, i];
      }
      seen[nums[i]] = i;
    }
    // If we don't see any matching pairs
    return null
  }

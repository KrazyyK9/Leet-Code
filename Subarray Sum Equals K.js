// 560. Subarray Sum Equals K
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

var subarraySum = function(nums, k) {
    //map to keep each sum and the occurance of each
    let map = {0: 1}, count = 0, sum = 0;

    // If map contains [current total sum - k], add number of occurances to count.
    // If map contains current total sum, increment map[sum] by one, otherwise set it equal to one.
    for (var i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (map[sum - k]) {
        count += map[sum - k];
      }
      map[sum] = (map[sum] || 0) + 1;
    }
    return count;
  };
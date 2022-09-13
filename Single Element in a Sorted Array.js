/* 
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.

 

Example 1:

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2

Example 2:

Input: nums = [3,3,7,7,10,11,11]
Output: 10

 

Constraints:

    1 <= nums.length <= 105
    0 <= nums[i] <= 105


Follow up: Your solution should run in O(log(n)) Time and O(1) Space
*/
  
  const singleNonDuplicate = (nums) => {
    let left = 0
    let right = nums.length - 1
    let mid = Math.floor((right + left) / 2)
    while (left <= right) {
      if (nums[mid] === nums[mid - 1]) {
        const leftSize = mid - 1
        const rightSize = right - mid
        if (leftSize % 2 === 0) {
          left = mid + 1
        } else {
          right = mid - 2
        }
      } else if (nums[mid] === nums[mid + 1]) {
        const leftSize = mid
        const rightSize = right - mid - 1
        if (leftSize % 2 === 0) {
          left = mid + 2
        } else {
          right = mid - 1
        }
      } else return nums[mid]
  
      mid = Math.floor((right + left) / 2)
    }
  }
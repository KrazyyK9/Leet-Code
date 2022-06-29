// 315. Count of Smaller Numbers After Self
// You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

// Time Complexity: O(n log(n)) 827ms
// Space Complexity: O(n) 112.7MB

var countSmaller = function(nums) {
    let res = Array(nums.length).fill(0);

    // Loop through nums (pointer = i), set nums[i] to {val: nums[i], idx: i}
    // call mergeSort for nums
    // Return res.

    for (var i = 0; i < nums.length; i++) {
      nums[i] = {val: nums[i], idx: i};
    }
      nums = mergeSort(nums);
      return res;

    // set left to be a recursive call on mergeSort for left half of array
    // set right to be a recursive call on mergeSort for right half of array
    function mergeSort(arr) {

      if (arr.length === 1) return [arr[0]];

      let mid = Math.floor(arr.length / 2);
      let left = mergeSort(arr.slice(0, mid));
      let right = mergeSort(arr.slice(mid));

      return merge(left, right);

    }

    //Create merge function
    // if arr2[j] is smaller than arr1[i],
      // increment smallerCount by one
      // push arr2[j] to newArr
      // increment j by one
    function merge(arr1, arr2) {
      let newArr = [];
      let i = 0, j = 0;
      let smallerCount = 0;

      while (i < arr1.length && j < arr2.length) {
        if (arr2[j].val < arr1[i].val) {
          smallerCount++;
          newArr.push(arr2[j]);
          j++;
        } else {
          res[arr1[i].idx] += smallerCount;
          newArr.push(arr1[i]);
          i++;
        }
      }

      while (i < arr1.length) {
        res[arr1[i].idx] += smallerCount;
        newArr.push(arr1[i]);
        i++;
      }

      while (j < arr2.length) {
        newArr.push(arr2[j]);
        j++;
      }
      
      return newArr;
    }
  };
// 387. First Unique Character in a String
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0

// Example 2:

// Input: s = "loveleetcode"
// Output: 2

// Example 3:

// Input: s = "aabb"
// Output: -1

// Constraints:

//     1 <= s.length <= 105
//     s consists of only lowercase English letters.

// Time Complexity: O(n) 122ms
// Space Complexity: O(1) 42.2MB

var firstUniqChar = function(s) {
    let freqMap = {};
    for (var char of s) {
      freqMap[char] = (freqMap[char] || 0) + 1;
    }  
    for (var i = 0; i < s.length; i++) {
      if (freqMap[s[i]] === 1) return i;
    }
    return -1;
  };
// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

// Time Complexity: O(n) 171ms
// Space Complexity: O(k) 45.3MB


var lengthOfLongestSubstring = function(s) {
    let map = {}, max = 0, i = 0;

    //loop through length of the string. If map doesn't contain s[j], set map[s[j]] to j
    for (var j = 0; j < s.length; j++) {
      if (map[s[j]] === undefined) map[s[j]] = j;
      else {
        // set max (longest substring) to Math.max(max, j - i)  
        max = Math.max(max, j - i);
        // set i to Math.max(i, index in map + 1) (i could be bigger than index in map)
        i = Math.max(i, map[s[j]] + 1);
        // update map[s[j]] to be j
        map[s[j]] = j;
      } 
    }
    // set max to Math.max(max, j - i) (for last check)
    max = Math.max(max, j - i);
    return max;
  };
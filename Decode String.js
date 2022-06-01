// 394. Decode String
// Given an encoded string, return its decoded string.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].
// The test cases are generated so that the length of the output will never exceed 105.

// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"

// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

// Constraints:

//     1 <= s.length <= 30
//     s consists of lowercase English letters, digits, and square brackets '[]'.
//     s is guaranteed to be a valid input.
//     All the integers in s are in the range [1, 300].

var decodeString = function(s) {
    let times = [], stack = [];
    let res = '', n = s.length;
    for (var i = 0; i < n; i++) {
      let char = s[i];
      if (!isNaN(char)) {
        let num = +char;
        while (i < n - 1 && !isNaN(s[i + 1])) {
          i++;
          num = num * 10 + +s[i];
        }
        times.push(num);
      } else if (char === ']') {
        let subStr = '';
        while (stack[stack.length - 1] !== '[') {
          subStr += stack.pop();
        }
        stack.pop();
        let repeat = times.pop(), n = subStr.length;
        for (var j = n * repeat - 1; j >= 0; j--) {
          stack.push(subStr[j % n]);
        }
      } else {
        stack.push(char);
      }
    }
    for (i = 0; i < stack.length; i++) res += stack[i];
    return res;
  };
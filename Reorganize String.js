// 767. Reorganize String
// Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.
// Return any possible rearrangement of s or return "" if not possible.

// Example 1:

// Input: s = "aab"
// Output: "aba"

// Example 2:

// Input: s = "aaab"
// Output: ""

 

// Constraints:

//     1 <= s.length <= 500
//     s consists of lowercase English letters.

const reorganizeString = (S) => {
  const charCount = {};

  for (const char of S) {
    charCount[char] = charCount[char] + 1 || 1;
  }

  const sortedEntries = Object.entries(charCount).sort((a, b) => b[1] - a[1]);

  const stringLength = S.length;
  const organizedChars = new Array(stringLength);
  let index = 0;

  for (const [char, count] of sortedEntries) {
    if (count > (stringLength + 1) / 2) return '';

    for (let j = 0; j < count; j++) {
      if (index >= stringLength) index = 1;

      organizedChars[index] = char;
      index += 2;
    }
  }

  return organizedChars.join('');
};
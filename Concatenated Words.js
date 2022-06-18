// 472. Concatenated Words
// Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.
// A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

// Example 1:

// Input: words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
// Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
// Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
// "dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
// "ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".

// Example 2:

// Input: words = ["cat","dog","catdog"]
// Output: ["catdog"]

 

// Constraints:

//     1 <= words.length <= 104
//     0 <= words[i].length <= 30
//     words[i] consists of only lowercase English letters.
//     0 <= sum(words[i].length) <= 105

// Time Complexity: O(nm^3) 1436ms
// Space Complexity: O(n) 52.5MB

var findAllConcatenatedWordsInADict = function(words) {
    //sort words by length
    words.sort((a, b) => a.length - b.length);
    
    //remove duplicates and create a response array. Populate array
    let strings = new Set(), res = [];  
    for (var word of words) {
      if (isConcatenated(word)) res.push(word);
      strings.add(word);
    }
    return res;
  
    function isConcatenated(word) {
      let n = word.length, dynamicProgramming = Array(n).fill(false); // fill array with boolean false

      for (var i = 0; i < n; i++) {
        for (var j = 0; j <= i; j++) {
          if (j !== 0 && !dynamicProgramming[j - 1]) continue;
          if (strings.has(word.slice(j, i + 1))) {
            dynamicProgramming[i] = true;
            break; // if we have a match, we don't need to keep checking because we don't care which words match, we have matched up to position i.
          }
        }
      }
      return dynamicProgramming[n - 1];
    }
  };


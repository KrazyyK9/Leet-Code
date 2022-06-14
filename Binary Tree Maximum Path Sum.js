// 124. Binary Tree Maximum Path Sum
// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.
// The path sum of a path is the sum of the node's values in the path.
// Given the root of a binary tree, return the maximum path sum of any path.


// LeetCode provided TreeNode
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }

  
  // Time Complexity: O(n) 138ms
  // Space Complexity: O(n) 48.1MB

  var maxPathSum = function(root) {

    let max = -Infinity;
    recurse(root);
    return max;
    
    function recurse(node) {

      if (!node) return 0;
      
      let leftMax = recurse(node.left);
      let rightMax = recurse(node.right);
      let childMax = Math.max(leftMax, rightMax);
      let oneMax = Math.max(node.val, node.val + childMax);
      let allMax = Math.max(oneMax, leftMax + rightMax + node.val);
      max = Math.max(max, allMax);

      return oneMax;
    }  
  };
// 99. Recover Binary Search Tree
// You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

// Constraints:

//     The number of nodes in the tree is in the range [2, 1000].
//     -2 ** 31 <= Node.val <= 2 ** 31 - 1

var recoverTree = function(root) {
    let prev = null, first = null, second = null;
    inorder(root);
    let temp = first.val;
    first.val = second.val;
    second.val = temp;
    return root;
    
    function inorder(node) {
      if (!node) return;
      inorder(node.left);
      if (prev && prev.val > node.val) {
        if (!first) first = prev;
        second = node;
      }
      prev = node;
      inorder(node.right);
    }
  };
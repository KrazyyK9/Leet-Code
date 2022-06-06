// 445. Add Two Numbers II
// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Time Complexity: O(n + m) 138ms
// Space Complexity: O(1) (excluding output) 47.6MB

var addTwoNumbers = function(list1, list2) {
    list1 = reverse(list1), list2 = reverse(list2);

    let carry = 0, head = null;

    while (list1 || list2) {
      let val1 = list1 ? list1.val : 0;
      let val2 = list2 ? list2.val : 0;
      let sum = val1 + val2 + carry, take = sum % 10;
      carry = sum > 9 ? 1 : 0;
      
      let newNode = new ListNode(take);
      newNode.next = head;
      head = newNode;
      
      list1 = list1 ? list1.next : null;
      list2 = list2 ? list2.next : null;
    }
    
    if (carry) {
      let newNode = new ListNode(1);
      newNode.next = head;
      head = newNode;
    }
    return head;
    
    function reverse(node) {
      let prev = null;
      while (node) {
        let next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return prev;
    }  
  };

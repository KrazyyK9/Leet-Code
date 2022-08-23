// 155. Min Stack
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Implement the MinStack class:
// MinStack() initializes the stack object.
// void push(val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.


var MinStack = function () {
    this.stack = [];
};

MinStack.prototype.push = function (val) {
    let min = this.stack.length ? Math.min(this.stack[this.stack.length - 1].min, val) : val;
    this.stack.push({ val, min });
};

MinStack.prototype.pop = function () {
    this.stack.pop();
};

MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1].val;
};

MinStack.prototype.getMin = function () {
    return this.stack[this.stack.length - 1].min;
};

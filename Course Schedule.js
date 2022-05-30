// 207. Course Schedule
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Time Complexity: O(n + p) 96ms
// Space Complexity: O(n + p) 44.9MB

var canFinish = function(numCourses, prerequisites) {

    //create graph and counter for indegrees. Set course to pre and count indegrees of each course
    let graph = {};
    let indegrees = Array(numCourses).fill(0);
  
    for (var [course, pre] of prerequisites) {
      if (!graph[pre]) graph[pre] = [];
      graph[pre].push(course);
      indegrees[course]++;
    }
  
    // push courses with indegree of 0 to queue array
    let queue = [];
    for (var i = 0; i < indegrees.length; i++) {
      if (indegrees[i] === 0) queue.push(i);
    }  
    
    //while queue is not empty, shift from queue to currCourse. Decrement by the indegree. When indgree is zero push to queue
    while (queue.length) {
      let currCourse = queue.shift();
      numCourses--;
      for (var course of (graph[currCourse] || [])) {
        indegrees[course]--;
        if (indegrees[course] === 0) queue.push(course);
      }
    }
    
    //return true if the number of courses remaining is 0, otherwise false
    return numCourses === 0 ? true : false;
  };
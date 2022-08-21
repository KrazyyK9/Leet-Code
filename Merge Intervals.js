// 56. Merge Intervals
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

var merge = function(intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let [start, end] = intervals[0];
    let result = [];

    for (var i = 1; i < intervals.length; i++) {

      if (intervals[i][0] <= end) end = Math.max(end, intervals[i][1]);
      else {
        result.push([start, end]);
        [start, end] = intervals[i];
      }

    }
    
    result.push([start, end]);
    return result;
  };
// 252. Meeting Rooms
// Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.


var canAttendMeetings = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    for (var i = 1; i < intervals.length; i++) {
      if (intervals[i - 1][1] > intervals[i][0]) return false;
    } 
    return true;
  };
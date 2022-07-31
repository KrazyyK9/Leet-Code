/*
Meeting Rooms II
Given an array of meetings times [start, end], 
find how many conference rooms we need. 
*/


var minMeetingRooms = function(intervals) {
    //create arr of earliest end times
    let earliestEnds = [];

    //check if intervals has input/is valid
    if(intervals == null || intervals.length == 0) {return 0}

    //if intervals less than 2, return 1 room
    if(intervals.length < 2) {return 1}

    //sort intervals from low to high
    intervals = intervals.sort((a,b) => a[0] - b[0])
    
    //add first entries last element to earliest end time array
    earliestEnds.push(intervals[0][1]);
    
    //loop through intervals
    for(let i = 1; i < intervals.length; i++) {
        let start = intervals[i][0];
        let end = intervals[i][1]
        let earliest = Math.min(...earliestEnds);
        
        //add earliest end times to array 
        if(start < earliest) {
            earliestEnds.push(end); 
        } else {
            earliestEnds[earliestEnds.indexOf(earliest)] = end
        }

    }
    return earliestEnds.length;
};
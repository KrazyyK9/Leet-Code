// 981. Time Based Key-Value Store
// Frequency: 83.89%
// Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.
// Implement the TimeMap class:
// TimeMap() Initializes the object of the data structure.
// void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
// String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".
  
  var TimeMap = function() {
    this.map = {};  
  };
  
  TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.map[key]) this.map[key] = [];
    this.map[key][timestamp] = value;
  };
  
  TimeMap.prototype.get = function(key, timestamp) {
    if (!this.map[key]) return "";
    for (var i = timestamp; i >= 0; i--) {
      if (this.map[key][i]) return this.map[key][i];
    }
    return "";
  };
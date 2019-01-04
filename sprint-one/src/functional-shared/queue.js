var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.length = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },
  dequeue: function() {
    var dequeued = this.storage[0];
    this.length--;
    for (var i = 0; i < this.length; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    return dequeued;
  },
  size: function() {
    return this.length > 0 ? this.length : 0;
  }
};

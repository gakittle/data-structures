var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.length = 0;
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

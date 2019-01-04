var Queue = function() {
  this.storage = {};
  this.length = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function() {
  var dequeued = this.storage[0];
  this.length--;
  for (var i = 0; i < this.length; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  return dequeued;
};

Queue.prototype.size = function() {
  return this.length > 0 ? this.length : 0;
};

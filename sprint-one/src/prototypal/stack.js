var Stack = function() {
  var someInstance = Object.create(stackMethods);
  (someInstance.storage = {}), (someInstance.length = 0);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },
  pop: function() {
    var popped = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length--;
    return popped;
  },
  size: function() {
    return this.length > 0 ? this.length : 0;
  }
};

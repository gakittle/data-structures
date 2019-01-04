var Stack = function() {
  var someInstance = {};
  (someInstance.storage = {}), (someInstance.length = 0);
  _.extend(someInstance, stackMethods);
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

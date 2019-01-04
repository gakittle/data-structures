var Stack = function() {
  (this.storage = {}), (this.length = 0);
};

Stack.prototype.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function() {
  var popped = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length--;
  return popped;
};

Stack.prototype.size = function() {
  return this.length > 0 ? this.length : 0;
};

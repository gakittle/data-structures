var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var stringItem = JSON.stringify(item);
  this._storage[stringItem] = true;
};

setPrototype.contains = function(item) {
  var stringItem = JSON.stringify(item);
  return !!this._storage[stringItem];
};

setPrototype.remove = function(item) {
  var stringItem = JSON.stringify(item);
  delete this._storage[stringItem];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

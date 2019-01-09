var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  set.size = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (typeof(item) === 'object' || typeof(item) === 'function') {
    item = JSON.stringify(item);
  }
  this._storage[this.size] = item;
  this.size++;
};

setPrototype.contains = function(item) {
  if (typeof(item) === 'object' || typeof(item) === 'function') {
    item = JSON.stringify(item);
  }
  for (var key in this._storage) {
    if (this._storage[key] === item) {
      return true;
    }
  } return false;
};

setPrototype.remove = function(item) {
  if (typeof(item) === 'object' || typeof(item) === 'function') {
    item = JSON.stringify(item);
  }
  for (var key in this._storage) {
    if (this._storage[key] === item) {
      delete this._storage[key];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

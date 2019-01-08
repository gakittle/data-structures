

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._tuplesCount = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var wasFound = false;
  if (this._storage[index] === undefined) {
    this._storage[index] = [];
  }
  for (let i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index][i][1] = v;
      wasFound = true;
    }
  }
  if (!wasFound) {
    this._storage[index].push([k,v]);
    this._tuplesCount++;
    if (this._tuplesCount >= 0.75 * this._limit) {
      this.rehash(true);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  for (let i = 0; i<bucket.length; i++) {
    if (bucket[i][0] === k){
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  for (let i = 0; i<bucket.length; i++) {
    if (bucket[i][0] === k){
      bucket.splice(i,1);
    }
  }
  if (this._tuplesCount <= 0.25 * this._limit) {
    this.rehash(false);
  }
};

HashTable.prototype.rehash = function(isTooBig) {
  var newLimit = isTooBig ? this._limit * 2 : this._limit / 2;
  var rehashedStorage = LimitedArray(newLimit);

  for (var i = 0; i < this._storage.length; i++) {
    // check if [] exists in storage
    for (var j = 0; j < this._storage[i].length; j++) {
      var tuple = this._storage[i][j];
      var index = getIndexBelowMaxForKey(this._storage[i][j][0], newLimit);

    }
  }


};
// input: isTooBig true or false
// new array = LimitedArray(this._size-limit*2 or / 2)
// traverse all buckets, tuples
  // generate new index, insert
// reassign this._storage to new array


/*
 * Complexity: What is the time complexity of the above functions?
 */



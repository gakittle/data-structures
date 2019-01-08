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
      this._tuplesCount--;
    }
  }
  if (this._tuplesCount <= 0.25 * this._limit && this._limit > 8) {
    this.rehash(false);
  }
};

HashTable.prototype.rehash = function(isTooBig) {
  console.log('rehashified');
  this._limit = isTooBig ? (this._limit * 2) : (this._limit / 2);
  var rehashedStorage = LimitedArray(this._limit);
  var temp = [];

  var buckets = Object.values(this._storage);
  for (var i = 0; i < buckets.length; i++) {
    if (Array.isArray(buckets[i])) {
      for (var j = 0; j < buckets[i].length; j++) {
        temp.push(buckets[i][j]);
      }
    }
  }

  this._storage = rehashedStorage;
  this._tuplesCount = 0;
  var cb = function(tuple) {
    this.insert(...tuple);
  };

  _.each(temp, cb.bind(this));

};


/*
 * Complexity: What is the time complexity of the above functions?
 */



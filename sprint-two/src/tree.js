var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var sapling = Tree(value);
  this.children.push(sapling);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

treeMethods.traverse = function(cb) {
  cb(this);
  if (this.children) {
    _.each(this.children, function(child) {
      child.traverse(cb);
    });
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

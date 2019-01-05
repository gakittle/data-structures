var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create newTree(value)
  // push that new node into Tree children
  var sapling = Tree(value);
  this.children.push(sapling);
};

treeMethods.contains = function(target) {
  // compare tree value to target
    // return true if match

  // if children.length > 0
    // recurse!
    // else return false

    if (this.value === target) {
      return true;
    } else if (this.children.length > 0) {
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(target)) {
          return true;
        }
      }
    } return false;


  //  var isFound = false;

  //  var traverseTree = function(tree) {
  //   if (tree.value === target) {
  //     isFound = true;
  //   } else if (tree.children.length > 0) {
  //     for (var i = 0; i < tree.children.length; i++) {
  //       tree.children[i].(tree.children[i].target);
  //     }
  //   }
  //  };

  //  traverseTree(this);

  //  return isFound;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

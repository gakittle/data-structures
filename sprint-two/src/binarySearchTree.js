var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.level = 0;
};

BinarySearchTree.prototype.insert = function(value) {
  if (this.value > value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
      this.left.level = this.level + 1;
      // return nodes from breadthfirstlog
      // invoke rebalancingNeeded, returns true/false
      this.rebalancingNeeded(this.breadthFirstLog());
    } else {
      this.left.insert(value);
    }
  } else {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
      this.right.level = this.level + 1;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.value > target) {
    if (this.left) {
      if (this.left.contains(target)) {
        return true;
      }
    }
  } else if (this.right) {
    if (this.right.contains(target)) {
      return true;
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

BinarySearchTree.prototype.breadthFirstLog = function() {
  var nodes = [];
  var level = 0;
  nodes.push([this]);

  var traverseBreadth = function(subArr) {
    nodes[level + 1] = [];

    _.each(subArr, function(node) {
      if (node.left) {
        nodes[level + 1].push(node.left);
      }
      if (node.right) {
        nodes[level + 1].push(node.right);
      }
    });

    if (nodes[level + 1].length > 0) {
      level++;
      traverseBreadth(nodes[level]);
    } else {
      nodes.pop();
    }
  };

  traverseBreadth(nodes[level]);
  return nodes;
};

BinarySearchTree.prototype.rebalancingNeeded = function(array) {
  // do stuff;
  // return true/false;
};

// breadthfirstlog => DONE
// max and min lengths of tree branches
// rebalancing function

/*
 * Complexity: What is the time complexity of the above functions?
 */

 // determine if rebalancing needed after addition:
   // for each parent of inserted node
     // increment max level from bottom
     // if this parent and all its children are balanced tree
       // rebalance this subtree
     // else check next level
   // 
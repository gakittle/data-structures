// Instantiate a new graph
var Graph = function(node) {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this[node].length; i++) {
    this.removeEdge(node, this[node][i]);
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.contains(this[fromNode], toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode) {
  var toNodes = Array.from(arguments).slice(1);
  var cb = function(toNode) {
    this[fromNode].push(toNode);
    this[toNode].push(fromNode);
  };
  _.each(toNodes, cb.bind(this));
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var edges = this[fromNode];
  _.each(edges, function(node, i) {
    if (node === toNode) {
      edges.splice(i, 1);
    }
  });
  var edges = this[toNode];
  _.each(edges, function(node, i) {
    if (node === fromNode) {
      edges.splice(i, 1);
    }
  });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var nodes = Object.keys(this);
  for (var i = 0; i < nodes.length; i++) {
    cb(nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



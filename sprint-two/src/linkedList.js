var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail === null){
      this.tail = Node(value);
      this.head = this.tail;
    } else {
      var newTail = Node(value);
      this.tail.next = newTail;
      this.tail = newTail;
    }
  };

  list.removeHead = function() {
    if (this.head !== null) {
      var remove = this.head.value;
      this.head = this.head.next;
      return remove;
    }
  };

  list.contains = function(target) {
   var node = this.head;
   while (node !== null) {
     if (node.value === target) {
       return true;
     } else {
       node = node.next;
     }
   }
   return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

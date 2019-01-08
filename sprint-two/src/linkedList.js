var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!list.tail) {
      this.tail = Node(value);
      this.head = this.tail;
    } else {
      this.tail.next = Node(value);
      this.tail.next.prev = this.tail;
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function() {
    if (this.head) {
      var remove = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
      return remove;
    }
  };

  list.contains = function(target) {
    var node = this.head;
    while (node) {
      if (node.value === target) {
        return true;
      } else {
        node = node.next;
      }
    }
    return false; 
  };

  list.addToHead = function(value) {
    var newHead = Node(value);
    if (this.head) {
      this.head.prev = newHead;
      newHead.next = this.head;
    } else { this.tail = newHead; }
    this.head = newHead;
  };

  list.removeTail = function() {
    var oldTail = this.tail.value;
    if (this.tail.prev) {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    } else {
      this.tail = null;
      this.head = null;
    }
    return oldTail;
  };

  return list;
};


var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

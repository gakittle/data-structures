class Queue {
  constructor(storage, length) {
    this.storage = {};
    this.length = 0;
  }

  enqueue(value) {
    this.storage[this.length] = value;
    this.length++;
  }

  dequeue() {
    var dequeued = this.storage[0];
    this.length--;
    for (var i = 0; i < this.length; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    return dequeued;
  }

  size() {
    return this.length > 0 ? this.length : 0;
  }
}

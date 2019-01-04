class Stack {
  constructor(storage, length) {
    this.storage = {};
    this.length = 0;
  }

  push(value) {
    this.storage[this.length] = value;
    this.length++;
  }

  pop() {
    var popped = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length--;
    return popped;
  }

  size() {
    return this.length > 0 ? this.length : 0;
  }
}

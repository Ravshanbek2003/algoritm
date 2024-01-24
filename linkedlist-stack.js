class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.top = null;
  }

  Push(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this.top = data;
  }

  Pop() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
    if (this.head) {
      this.top = this.head.data;
    } else {
      this.top = null;
    }
  }

  getTop() {
    return this.top;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  isEmpty() {
    return this.head === null;
  }
}

const myStack = new Stack();
myStack.Push(1);
myStack.Push(5);
myStack.Push(2);
myStack.Push(4);
myStack.Push(3);

console.log(myStack);



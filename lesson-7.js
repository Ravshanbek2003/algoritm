
/*

class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }
  Push(data) {
    this.items.push(data);
    this.top = data;
  }
  Pop() {
    if (this.items.length !== 0) {
      if (this.items.length === 1) {
        this.top = null;
        this.items.pop();
      }
      if (this.items.length > 1) {
        this.top = this.items[this.items.length - 2];
        this.items.pop();
      }
    }
  }
  GetTop() {
    return this.top;
  }
  Size() {
    return this.length;
  }
  IsEmpty() {}
  Sort() {
    this.top = Math.min(...this.items);
    for (let i = 0; i < this.items.length; i++) {
      for (let j = 0; j < this.items.length; j++) {
        if (this.items[i] > this.items[j]) {
          [this.items[j + 1], this.items[j]] = [
            this.items[j],
            this.items[j + 1],
          ];
        }
      }
    }
  }
}

const myStack = new Stack();
myStack.Push(1);
myStack.Push(5);
myStack.Push(2);
myStack.Push(4);
myStack.Push(3);

console.log(myStack);
myStack.Sort();
console.log(myStack);
*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }
  Push(data) {
    const node = new Node(data, this.top);

    this.items.push(node.data);
    this.top = node;
    console.log(this.top, this.items);
  }
  Pop() {
    if (this.items.length !== 0) {
      if (this.items.length === 1) {
        this.top = null;
        this.items.pop();
      }
      if (this.items.length > 1) {
        this.top = this.items[this.items.length - 2];
        this.items.pop();
      }
    }
  }
  GetTop() {
    return this.top;
  }
  Size() {
    return this.length;
  }
  IsEmpty() {}
}

const myStack = new Stack();
myStack.Push(3);

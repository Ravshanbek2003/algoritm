class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.items = null;
    this.top = null;
    this.size = 0;
  }
  Enqueue(data) {
    const node = new Node(data);
    if (!this.items) {
      this.items = node;
      this.size++;
    } else {
      let current = this.items;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;

      this.size++;
    }
  }

  DeQueue() {
    this.items = this.items.next;
  }
  GetFront() {
    return this.items.data;
  }
  Size() {
    return this.size;
  }
  IsEmpty() {
    return this.items !== null;
  }
}

const queue = new Queue();
queue.Enqueue(2);
queue.Enqueue(3);
queue.Enqueue(4);
queue.Enqueue(5);
console.log(queue);

// priority queue

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(val, priority) {
    let node = new Node(val, priority);
    this.items.push(node);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.items.length - 1;
    let valP = this.items[this.items.length - 1];
    while (idx > 0) {
      let pIdx = Math.floor((idx - 1) / 2);
      if (valP.priority < this.items[pIdx].priority) {
        [valP, this.items[pIdx]] = [this.items[pIdx], valP];
        idx = pIdx;
      } else {
        break;
      }
    }
  }
  // functions to be implemented
  // enqueue(item, priority)
  // dequeue()
  // front()
  // isEmpty()
  // printPQueue()
}
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("task 1", 4);
priorityQueue.enqueue("task 2", 1);
priorityQueue.enqueue("task 3", 40);
priorityQueue.enqueue("task 4", 3);
priorityQueue.enqueue("task 3", 402);
priorityQueue.enqueue("task 4", 2);
console.log(priorityQueue);

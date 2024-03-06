// function slidingMW(arr, w) {
//   const deque = [];
//   const output = [];
//   for (let i = 0; i < arr.length; i++) {
//     deque.push(arr[i]);
//     if (deque.length === w) {
//         if () {

//         }
//     }
//   }
// }
// console.log(slidingMW([2, 4, 3, 6, 5, 4, 1, 10], 3));
// a node in a doubly linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Dequeue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //  add value to the beginning of the list
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
  }

  //  add value to the end of the list
  push(value) {
    const newNode = new Node(value);

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  //  remove value from the beginning of the list
  shift() {
    if (!this.head) {
      return null;
    }

    const removed = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removed.next;
      this.head.prev = null;
    }

    this.length--;

    return removed.value;
  }

  //  remove value from the end of the list
  pop() {
    if (!this.tail) {
      return null;
    }

    const removed = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removed.prev;
      this.tail.next = null;
    }

    this.length--;

    return removed.value;
  }

  // get the front value
  peekFront() {
    return this.head ? this.head.value : null;
  }

  // get the last value
  peekBack() {
    return this.tail ? this.tail.value : null;
  }
}

const cleanup = (i, d, n) => {
  while (d.length !== 0 && n[i] >= n[d.peekBack()]) {
    d.pop();
  }
};
function Max(nums, k) {
  let d = new Dequeue();
  let output = [];
  for (let i = 0; i < k; i++) {
    cleanup(i, d, nums);
    d.push(i);
  }
  output[0] = nums[d.peekFront()];
  console.log(nums[d.peekFront()]);

  for (let i = k; i < nums.length; i++) {
    cleanup(i, d, nums);
    if (d.length !== 0 && d.peekFront() <= i - k) {
      d.shift();
    }
    d.push(i);
    output[i - k + 1] = nums[d.peekFront()];
  }
  return output;
}
console.log(Max([1,-1], 1));

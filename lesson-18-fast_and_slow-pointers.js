function isHappy(n) {
  function getNext(num) {
    let res = 0;
    while (num > 0) {
      res += (num % 10) * (num % 10);
      num = Math.floor(num / 10);
    }
    return res;
  }

  let slow = n;
  let fast = n;

  while (slow !== 1 && fast !== 1) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));

    if (slow === fast) {
      return false;
    }
  }

  return true;
}
console.log(isHappy(19));

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class List {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  Push(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.length++;
      return this;
    }
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    this.length++;
    current.next = node;
    return this;
  }
  Print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  middleList() {
    let slow = this.head;
    let fast = this.head;
    while (fast?.next) {
      slow = slow.next;
      fast = fast?.next?.next;
    }
    return slow;
  }
}
const myList = new List();
myList.Push(32);
myList.Push(78);
myList.Push(65);
myList.Push(45);
myList.Push(47);
myList.Push(94);
console.log(myList.middleList());

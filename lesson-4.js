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
  Search(data) {
    let idx = 0;
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return idx;
      }
      current = current.next;
      idx++;
    }
    if ((idx = this.length)) {
      return -1;
    }
  }
  Unshift(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }
  Pop() {
    let current = this.head;
    while (current?.next) {
      if (!current.next.next) {
        current.next = null;
      }
      current = current.next;
    }
  }
  Dublicates() {
    let current = this.head;

    while (current) {
      let nextNode = current;

      while (nextNode.next) {
        if (current.data === nextNode.next.data) {
          nextNode.next = nextNode.next.next;
        } else {
          nextNode = nextNode.next;
        }
      }
      console.log(nextNode, "===", current);
      current = current.next;
    }

    return this;
  }
  FromTheEnd(n) {
    let P1 = this.head;
    let P2 = this.head;
    let count = 0;
    while (P1 && count < n) {
      P1 = P1.next;
      count++;
    }
    while (P1) {
      P1 = P1.next;
      P2 = P2.next;
    }
    return P2.data;
  }
  Reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next       
    }

    this.head = prev;
  }
}
const myList = new List();
myList.Push(1);
myList.Push(3);
myList.Push(4);
myList.Push(1);
myList.Push(4);
myList.Push(5);
// myList.Print();
// console.log(myList.Search(3));
// console.log(myList.Unshift(50));
// myList.Pop();
// myList.Dublicates();
// myList.Print();
// console.log(myList.FromTheEnd(2));
// myList.Reverse();
myList.Print();

// uy ishi ({[]})-true       ({[}]) - false

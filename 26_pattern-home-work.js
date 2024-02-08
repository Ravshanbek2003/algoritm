// 1- task
// Remove nth Node from End of List

// Statement:
// Given a singly linked list, remove the nth node from the end of the list and return its head.

// Linked list: 32 → 78 → 65 → 90 → 12 → 44 → NULL
// n = 3

// output:
// 32 -> 78 -> 65 -> 12 -> 44 -> NULL

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
  RemoveEndOfList(n) {
    // let p1 = this.head;
    // let p2 = this.head;
    // while (n > 0) {
    //   p1 = p1.next;
    //   n--;
    // }
    // while (p1.next) {
    //   p1 = p1?.next;
    //   p2 = p2?.next;
    // }
    // console.log(p2.next, "p2");
    // p2.next = p2?.next?.next;
    // return p2;
    const newNode = new Node(0);
    newNode.next = this.head;
    let start = newNode;
    let end = newNode;

    for (let i = 0; i <= n; i++) {
      start = start.next;
    }

    while (start !== null) {
      start = start.next;
      end = end.next;
    }

    end.next = end.next.next;
    console.log(newNode, "end", end);
    return newNode.next;
  }
}
const myList = new List();
myList.Push(32);
myList.Push(78);
myList.Push(65);
myList.Push(12);
myList.Push(44);
console.log(myList.RemoveEndOfList(3));
// myList.Print();

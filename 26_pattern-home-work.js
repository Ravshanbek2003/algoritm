// 1- task
// Remove nth Node from End of List

// Statement:
// Given a singly linked list, remove the nth node from the end of the list and return its head.

// Linked list: 32 → 78 → 65 → 90 → 12 → 44 → NULL
// n = 3

// output:
// 32 -> 78 -> 65 -> 12 -> 44 -> NULL
/*
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
*/

// dublicate number---------------
/*
function dublicateNumber(arr) {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) {
      hash[arr[i]] += 1;
    } else {
      hash[arr[i]] = 1;
    }
  }
  return hash;
}
let arr = [3, 5, 3, 6, 2, 7, 8, 9, 1, 3, 5, 3, 4, 6, 8, 7];
// console.log(dublicateNumber(arr));
*/

// list palidrom
/*
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
  isPalidrome() {
    // 1 2 3 2 1
    let fast = this.head;
    let slow = this.head;
    let start = this.head;
    while (fast && fast?.next) {
      fast = fast?.next?.next;
      slow = slow.next;
    }
    let prev = null;
    while (slow) {
      let next = slow.next;
      slow.next = prev;
      prev = slow;
      slow = next;
    }
    while (slow?.next && start) {
      if (slow.data !== start.data) {
        return false;
      }
      start = start.next;
      slow = slow.next;
    }
    return true;
    // while (current.next) {
    //   let node = new Node(current.data);

    //   current = current.next;
    // }
    // return current;
  }
}
const myList = new List();
myList.Push(1);
myList.Push(2);
myList.Push(3);
myList.Push(2);
myList.Push(1);
// console.log(myList.isPalidrome());

*/
/*
function findDuplicates(nums) {
  const duplicates = [];

  for (const num of nums) {
    const absNum = Math.abs(num);
    if (nums[absNum - 1] < 0) {
      duplicates.push(num);
    } else {
      nums[absNum - 1] *= -1;
    }
  }

  return duplicates;
}

const nums = [3, -1, 4, 2, -1, 2];
console.log(findDuplicates(nums)); // Output: [1, 2]
*/
// dutch national flag
/*
function DNF(arr) {
  function swap(arr, i1, i2) {
    var temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
  }
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      swap(arr, low++, mid++);
    } else if (arr[mid] === 2) {
      swap(arr, mid, high--);
    } else if (arr[mid] === 1) {
      mid++;
    }
  }
  return arr;
}

console.log(DNF([0, 1, 0, 2, 1, 2, 0, 2]));
*/

// str=abbcb  str2=ac    result—>abbc

function mSubsequence(str, str2) {
  let start = 0;
  let end = 0;
  while (true) {
    if (str[end] === str2[end]) {
      
    } else {
      end++;
    }
  }
}

console.log(mSubsequence("VBADSFGEDSADSGSDSFR", "ADS"));

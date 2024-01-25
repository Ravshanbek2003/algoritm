// TREE

class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  // insert(data) {
  //   if (!this.root) {
  //     this.root = new Node(data);
  //   }
  //   let current = this.root;
  //   while (true) {
  //     if (current.val === data) {
  //       return;
  //     }
  //     if (current.val > data) {
  //       if (!current.right) {
  //         current.right = new Node(data);
  //         return this;
  //       }
  //       current = current.right;
  //     } else {
  //       if (!current.left) {
  //         current.left = new Node(data);
  //         return this;
  //       }
  //       current = current.left;
  //     }
  //   }
  // }
  Insert(val, node = this.root) {
    let current = node;
    let newNode = new Node(val);
    if (!current) {
      this.root = newNode;
      return this;
    }
    while (true) {
      if (current.val === newNode.val) {
        return this;
      }
      if (current.val < newNode.val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }
  Find(n) {
    let current = this.root;
    if (current) {
      while (true) {
        if (!current) {
          return null;
        }
        if (current.val === n) {
          return current;
        }
        if (current.val < n) {
          current = current.right;
        } else {
          current = current.left;
        }
      }
    } else {
      return null;
    }
  }
  isInside(n) {
    let current = this.root;
    if (current) {
      while (true) {
        if (!current) {
          return false;
        }
        if (current.val === n) {
          return true;
        }
        if (current.val < n) {
          current = current.right;
        } else {
          current = current.left;
        }
      }
    } else {
      return false;
    }
  }
  FindMin() {
    let current = this.root;
    if (current) {
      while (true) {
        current = current.left;
        if (current.left === null) {
          return current;
        }
      }
    } else {
      return null;
    }
  }
  FindMax() {
    let current = this.root;
    if (current) {
      while (true) {
        current = current.right;
        if (current.right === null) {
          return current;
        }
      }
    } else {
      return null;
    }
  }
  FindingSecondLargest() {
    let current = this.root;
    if (current) {
      while (true) {
        current = current.right;
        if (!current) {
          return null;
        }
        if (current.right.right === null) {
          return current.val;
        }
      }
    } else {
      return null;
    }
  }
  Print() {
    console.log(this.root);
  }
}
const root = new BST();
root.Insert(10);
root.Insert(10);
root.Insert(12);
root.Insert(7);
root.Insert(6);
root.Insert(8);
root.Insert(11);
root.Insert(14);
root.Insert(15);
// console.log(root.Find(8));
// console.log(root.isInside(8));
// console.log(root.FindMin());
// console.log(root.FindMax());
// console.log(root.FindingSecondLargest());
root.Print();

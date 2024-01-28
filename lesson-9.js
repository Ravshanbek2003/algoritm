// TREE  DFS

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
  // DFSPreOrder() {
  //   var data = [];
  //   function traverse(node) {
  //     data.push(node.val);
  //     node.left && traverse(node.left);
  //     node.right && traverse(node.right);
  //   }
  //   traverse(this.root);
  //   return data;
  // }

  // home work
  DFSPreOrder() {
    var data = [];
    function traverse(node) {
      data.push(node.val);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder() {
    var data = [];
    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() {
    var data = [];
    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node.val);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  // BFS() {
  //   var node = this.root,
  //     data = [],
  //     queue = [];
  //   queue.push(node);
  //   let x = 0;
  //   while (queue.length) {
  //     node = queue.shift();
  //     console.log(node.val, x);
  //     x++;
  //     data.push(node.val);
  //     if (node.left) queue.push(node.left);
  //     if (node.right) queue.push(node.right);
  //   }
  //   return data;
  // }

  // home work
  BFS() {
    var node = this.root,
      data = [],
      queue = [];
    queue.push(node);
    function foo(queue) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      queue.length && foo(queue);
    }
    foo(queue);
    return data;
  }
  Print() {
    console.log(this.root);
  }
}
const root = new BST();
root.Insert(10);
root.Insert(10);
root.Insert(6);
root.Insert(15);
root.Insert(20);
root.Insert(3);
root.Insert(8);
root.Insert(11);
// console.log(root.Find(8));
// console.log(root.isInside(8));
// console.log(root.FindMin());
// console.log(root.FindMax());
// console.log(root.FindingSecondLargest());
// root.Print();
console.log(root.DFSPreOrder());
// console.log(root.DFSPostOrder());
// console.log(root.DFSInOrder());
// console.log(root.BFS());

// [
//   10,  6,  3, 8,
//   15, 11, 20
// ]

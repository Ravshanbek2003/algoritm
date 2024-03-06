class Node {
    constructor(val, prev = null, next = null) {
      this.value = val;
      this.tail = null;
      this.next = next;
      this.prev = prev;
    }
  }
  
  class DoublyLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
        prev: null,
      };
      this.length = 1;
      this.tail = this.head;
    }
  
    append(value) {
      let node = new Node(value);
      this.tail.next = node;
      node.prev = this.tail;
  
      this.tail = node;
      this.length++;
      this.printList();
    }
  
    remove(index) {
      if (index === 0) {
        this.head = this.head.next;
        this.head.prev = null;
      } else if (index === this.length - 1) {
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {
        let current = this.head;
        for (let i = 0; i < index; i++) {
          current = current.next;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
      this.length--;
      this.printList();
    }
  }
  
  // Create a new doubly linked with initial value
  const doublyList = new DoublyLinkedList(1);
  
  // Append nodes to the list
  doublyList.append(2);
  doublyList.append(3);
  doublyList.append(4);
  
  // Print the list
  console.log("Original List:");
  doublyList.printList();
  
  // Prepend a node to the list
  doublyList.prepend(0);
  
  // Insert a node at index 2
  doublyList.insert(2, 2.5);
  
  // Print the updated list
  console.log("Updated List:");
  doublyList.printList();
  
  // Remove a node at index 3
  doublyList.remove(3);
  
  // Print the final list
  console.log("Final List:");
  doublyList.printList();
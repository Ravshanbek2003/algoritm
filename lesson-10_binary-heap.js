// maxheap homework
class maxHeap {
  constructor(arr) {
    this.items = arr;
  }
  leftChild(i) {
    return 2 * i + 1;
  }

  rightChild(i) {
    return 2 * i + 2;
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  getMax() {
    return this.arr[0];
  }
  Insert(val) {
    this.items.push(val);
    this.bubleUp();
    return this;
  }
  bubleUp() {
    let elem = this.items[this.items.length - 1];
    let idx = this.items.length - 1;
    while (idx > 0) {
      let parentInd = this.parent(idx);
      if (elem > this.items[parentInd]) {
        this.swap(parentInd, idx);
        idx = this.parent(idx);
      } else {
        break;
      }
    }
  }
  isHeap() {
    let idx = this.items.length - 1;
    let is_heap = false;
    while (idx > 0) {
      let parentInd = this.parent(idx);
      if (this.items[parentInd] >= this.items[idx]) {
        is_heap = true;
      } else {
        return false;
      }
      idx--;
    }
    return is_heap;
  }
  swap(parentInd, childId) {
    [this.items[parentInd], this.items[childId]] = [
      this.items[childId],
      this.items[parentInd],
    ];
  }
  remove() {
    if (this.items.length === 0) {
      return null;
    }
    const item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubleUp();
    return item;
  }
}
const maxheap = new maxHeap([10, 8, 9, 7, 6, 3, 2]);
maxheap.Insert(11);
// console.log(maxheap.isHeap());
// console.log(maxheap.remove());

// minheap homework
class minHeap {
  constructor(arr) {
    this.items = arr;
  }
  leftChild(i) {
    return 2 * i + 1;
  }

  rightChild(i) {
    return 2 * i + 2;
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  getMax() {
    return this.arr[0];
  }
  Insert(val) {
    this.items.push(val);
    this.bubleUp();
    return this;
  }
  bubleUp() {
    let elem = this.items[this.items.length - 1];
    let idx = this.items.length - 1;
    while (idx > 0) {
      let parentInd = this.parent(idx);
      if (elem < this.items[parentInd]) {
        this.swap(parentInd, idx);
        idx = this.parent(idx);
      } else {
        break;
      }
    }
  }
  isHeap() {
    let idx = this.items.length - 1;
    let is_heap = false;
    while (idx > 0) {
      let parentInd = this.parent(idx);
      if (this.items[parentInd] <= this.items[idx]) {
        is_heap = true;
      } else {
        return false;
      }
      idx--;
    }
    return is_heap;
  }
  swap(parentInd, childId) {
    [this.items[parentInd], this.items[childId]] = [
      this.items[childId],
      this.items[parentInd],
    ];
  }
  remove() {
    if (this.items.length === 0) {
      return null;
    }
    const item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubleUp();
    return item;
  }
}
const minheap = new minHeap([2, 3, 6, 7, 9, 8, 10]);
// minheap.Insert(11);
console.log(minheap.isHeap());
// console.log(minheap.remove());

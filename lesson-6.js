// function isValidBrackets(str) {
//   const stack = [];
//   const bracketsMap = { "(": ")", "[": "]", "{": "}" };

//   for (let i = 0; i < str.length; i++) {
//     const currentBracket = str[i];

//     // Agar bu ochish brackets bo'lsa, stack ga qo'shamiz
//     if (bracketsMap[currentBracket]) {
//       stack.push(currentBracket);
//     } else {
//       // Aks holda, stackni tekshiramiz
//       const lastOpenedBracket = stack.pop();

//       // Agar ochish brackets mos kelmasa yoki stack bo'sh bo'lsa, false qaytarib chiqamiz
//       if (
//         !lastOpenedBracket ||
//        bracketsMap[lastOpenedBracket] !== currentBracket
//       ) {
//         return false;
//       }
//     }
//   }

//   // Agar stack bo'sh bo'lmasa, yani ochish brackets qolgan bo'lsa, false qaytarib chiqamiz
//   return stack.length === 0;
// }

// console.log(isValidBrackets("({[()]})")); // true
// console.log(isValidBrackets("({[}])")); // false

/*

class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }
  Push(data) {
    this.items.push(data);
    this.top = data;
  }
  Pop() {
    if (this.items.length !== 0) {
      if (this.items.length === 1) {
        this.top = null;
        this.items.pop();
      }
      if (this.items.length > 1) {
        this.top = this.items[this.items.length - 2];
        this.items.pop();
      }
    }
  }
  GetTop() {
    return this.top;
  }
  Size() {
    return this.length;
  }
  IsEmpty(){
return this.items.length === 0;
  }
}

const myStack = new Stack();
*/
/*

class Queue {
  constructor() {
    this.items = [];
  }
  Enqueue(data) {
    this.items.push(data);
  }
  DeQueue() {
    this.items.shift();
  }
  GetFront() {
    return this.items[0];
  }
  Size() {
    return this.items.length;
  }
  IsEmpty() {
    return this.items.length === 0;
  }
  Binary(n) {}
}

const queue = new Queue();
*/
// function findBin(n) {
//   var s1, s2;
//   let res = [];
//   let queue = new Queue();
//   for (let i = 0; i < n; i++) {
//     res.push(queue.DeQueue());
//     s1 = res.push(i) + "0";
//     s2 = res[i] + "1";
//   }
//   queue.Enqueue(s1);

//   queue.Enqueue(s2);
//   return res;
// }
// console.log(findBin(4));

class twoStack {
  constructor(size) {
    this.items = this.top = null;
  }
  Push(data) {
    this.items.push(data);
    this.top = data;
  }
  Pop() {
    if (this.items.length !== 0) {
      if (this.items.length === 1) {
        this.top = null;
        this.items.pop();
      }
      if (this.items.length > 1) {
        this.top = this.items[this.items.length - 2];
        this.items.pop();
      }
    }
  }
  GetTop() {
    return this.top;
  }
  Size() {
    return this.length;
  }
  IsEmpty() {}
}

const myStack = new Stack();

// const cycleArr = (arr) => {};
// // const arr = [3,1,2]; and [-2,-1,-3] and [3,-3,1,1]
// const res = cycleArr(arr);
// console.log(res);
// // valid emas [2,1,-1,-2]

// // 2-topshiriq
// // dublicate number

// // 3-t palindromni  linked listda chiqarish

// function foo(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " " && !str[i]) {
//       let cur = str.splice();
//       count = i;
//     }
//   }
// }

// function Reverse(str) {
//   str = str.trim().replace(/ +/g, " ");
//   let strLen = str.length;
//   str = [...str];
//   function Rchar(left, right, str) {
//     while (left < right) {
//       [str[left], str[right]] = [str[right], str[left]];
//       left++;
//       right--;
//     }
//     return str;
//   }
//   str = Rchar(0, strLen - 1, str);
//   let left = 0;
//   let right = 0;
//   while (right < strLen) {
//     while (right < strLen) {
//       if (str[right] === " ") break;
//       right++;
//       console.log(Rchar(left, right, str));
//       Rchar(left, right, str);
//       left = right + 1;
//       right++;
//     }
//   }
//   return str.join("");
// }
// console.log(Reverse("   hello    world   "));

/*
function reverseWords(str) {
    str = str.trim().replace(/ +/g, " ");
    str = [...str];
    function RChar(l, r, str) {
      while (l < r) {
        [str[l], str[r]] = [str[r], str[l]];
        l++;
        r--;
      }
      return str;
    }
    let strLen = str.length;
    str = RChar(0, strLen - 1, str);
    let left = 0;
    let right = 0;
  
    while (right < strLen) {
      while (right < strLen) {
        if (str[right] === " ") break;
        right++;
      }
      RChar(left, right - 1, str);
      left = right + 1;
      right++;
    }
  
    return str.join("");
  }
  
  const input = "hello        world         ";
  const reversedString = reverseWords(input);
  console.log(reversedString);
  */
/*
function palindrom(str) {
  let P1 = 0,
    P2 = str.length - 1,
    count = 0;
  while (true) {
    if (str[P1] === str[P2]) {
      P1++;
      P2--;
    } else {
      if (str[P1 + 1] === str[P2]) {
        P1++;
      } else if (str[P1] === str[P2 - 1]) {
        P2--;
      }
      count++;
    }
    if (P2 < 0 || P2 === Math.floor(str.length / 2)) {
      break;
    }
    if (count > 1) {
      return false;
    }
  }
  return true;
}
console.log(palindrom("madame"));

*/
/*
function minWindow(str1, str2) {
  let sizeStr1 = str1.length;
  let sizeStr2 = str2.length;
  let minSubLen = Infinity;
  let indexS1 = 0;
  let indexS2 = 0;
  let minSubsequence = "";
  while (indexS1 < sizeStr1) {
    if (str1[indexS1] === str2[indexS2]) {
      indexS2++;
      if (indexS2 === sizeStr2) {
        let start = indexS1;
        let end = indexS1;
        indexS2--;
        while (indexS2 >= 0) {
          if (str1[start] === str2[indexS2]) {
            indexS2--;
          }
          start--;
        }
        start++;
        if (end - start + 1 < minSubLen) {
          minSubLen = end - start + 1;
          minSubsequence = str1.slice(start, end + 1);
        }
        indexS1 = start;
        indexS2 = 0;
      }
    }
    indexS1++;
  }
  return minSubsequence;
}
*/
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
  Cycle() {
    let P1 = this.head;
    let P2 = this.head;
    while (P2.next) {
      P1 = P1.next;
      P2 = P2.next.next;
      if (P1 === P2) {
        return true;
      }
    }
    return false;
  }
}
const myList = new List();
myList.Push(1);
myList.Push(3);
myList.Push(4);
myList.Push(1);
myList.Push(4);
myList.Push(5);
myList.Cycle();
*/

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
  Cycle() {
    let P1 = this.head;
    let P2 = this.head;
    while (P2 && P2.next) {
      P1 = P1.next;
      P2 = P2.next.next;
      if (P1 === P2) {
        P2 = this.head;
        break;
      }
    }
    while (P2 && P2.next) {
      P1 = P1.next;
      P2 = P2.next;
      if (P1 === P2) {
        return P1;
      }
    }
    return false;
  }
}
const myList = new List();
myList.Push(1);
myList.Push(2);
myList.Push(3);

myList.Push(4);
myList.Push(5);
myList.Push(6);
myList.Push(7);
myList.Push(8);
myList.Push(9);
myList.head.next.next.next.next.next.next.next.next =
  myList.head.next.next.next;

console.log(myList.Cycle());
*/

// Time Complexity :  O(n)
// Space Complexity : O(1)
// var characterReplacement = function (s, k) {
//   var map = [26];
//   let largestCount = 0,
//     beg = 0,
//     maxlen = 0;
//   for (let end = 0; end < s.length; end++) {
//     const c = s[end];
//     map[c] = (map[c] || 0) + 1;
//     largestCount = Math.max(largestCount, map[c]);
//     if (end - beg + 1 - largestCount > k) {
//       map[s[beg]] -= 1;
//       beg += 1;
//     }
//     maxlen = Math.max(maxlen, end - beg + 1); // end - beg + 1 = size of the current window...
//   }
//   return maxlen; // Return the maximum length of repeating character...
// };

var characterReplacement = function (s, k) {
  let l = 0;
  let r = 0;
  let count = new Map();
  let res = 0;
  for (r = 0; r < s.length; r++) {
    let wLength = r - l + 1;
    count.set(s[r], 1 + count.get(s[r]) || 1);
    if (wLength - Math.max(...count.values()) > k) {
      count.set(s[l], count.get(s[l]) - 1);
      l++;
    }
    wLength = r - l + 1;
    res = Math.max(res, wLength);
  }
  return res;
};

console.log(characterReplacement("aabccbb", 2));

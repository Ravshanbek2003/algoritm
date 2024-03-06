// var merge = function (intervals) {
//   intervals.sort(([aS, aE], [bS, bE]) => (aS !== bS ? aS - bS : aE - bE));

//   let prev = intervals[0];

//   for (let i = 1; i < intervals.length; i++) {
//     let [prevStart, prevEnd] = prev;
//     let [currentStart, currentEnd] = intervals[i];

//     if (prevEnd >= currentStart) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(
//   merge([
//     [0, 30],
//     [5, 10],
//     [15, 20],
//   ])
// );

// var merge1 = function (intervals) {
//   // intervals.sort(([aS, aE], [bS, bE]) => (aS !== bS ? aS - bS : aE - bE));
//   const startA = [];
//   const endA = [];
//   let p1 = 0,
//     p2 = 0,
//     count = 0;
//   for (let i = 0; i < intervals.length; i++) {
//     startA.push(intervals[i][0]);
//     endA.push(intervals[i][1]);
//   }
//   startA.sort((a, b) => a - b);
//   endA.sort((a, b) => a - b);
//   console.log(startA, endA);
//   // [ 0, 5, 15 ] [ 30, 10, 20 ]
//   while (p1 < startA.length) {
//     if (startA[p1] < endA[p2]) {
//       count++;
//     }
//     if (p1 === startA.length - 1) {
//       p2++;
//     }
//     p1++;
//   }
//   return count;
// };

// homework-1
// p1-->1  p2-->2
var climbStairs = function (n) {
  let p1 = n;
  let p2 = 0;
  let count = 0;
  const fac = (n) => {
    let res = 1;
    for (let i = 1; i <= n; i++) {
      res *= i;
    }
    return res;
  };
  while (p1 >= 0) {
    if (p1 * 1 + p2 * 2 === n) {
      if (p1 === 0 || p2 === 0) {
        count++;
      } else {
        count += fac(p1 + p2) / (fac(p1) * fac(p2));
      }
    }
    if (p1 * 1 + p2 * 2 < n) {
      p2++;
    }
    p1--;
  }
  return count;
};
// console.log(climbStairs(4));

// homework-2
const fibonachi = (n) => {
  const fib = [];
  let a = 0,
    b = 1,
    c;
  const fibNum = (a, b, c) => {
    if (c > n) {
      return fib;
    }
    c = a + b;
    a = b;
    b = c;
    fib.push(c);
    return fibNum(a, b, c);
  };
  return fibNum(a, b, c);
  // fib[0] = 0;
  // fib[1] = 1;
  // for (let i = 2; i < n; i++) {
  //   fib[i] = fib[i - 1] + fib[i - 2];
  // }
  // return fib;
};
console.log(fibonachi(10));

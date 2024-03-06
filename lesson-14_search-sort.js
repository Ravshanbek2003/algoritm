// linear search
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let res = 4;
// function find(res, arr) {
//   for (const iterator of arr) {
//     if (res === iterator) {
//       return iterator;
//     }
//   }
//   return -1;
// }
// console.log(find(res, arr));

// binary search
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = 4;
function find(val, arr) {
  let right = arr.length - 1;
  let left = 0;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === val) {
      return arr[mid];
    }
    if (arr[mid] < val) {
      left = mid + 1;
    }
    if (arr[mid] > val) {
      right = mid - 1;
    }
  }
}
console.log(find(res, arr));

// naive search
let text = "lorelod loled lol lollol";
let text2 = "lol",
  count = 0;
for (let i = 0; i < text.length; i++) {
  for (let j = 0; j < text2.length; j++) {
    if (text2[j] !== text[i + j]) {
      break;
    }
    if (j === text2.length - 1) {
      count++;
    }
  }
}
console.log(count);

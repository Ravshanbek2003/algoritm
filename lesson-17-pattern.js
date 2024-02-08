// ozim ishlaganim
// function sumOf(array, target) {
//   const obj = {};
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (i !== j) {
//         obj[`${array[i]}${array[j]}`] = array[i] + array[j];
//       }
//     }
//   }

//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (i !== j && obj[`${array[i]}${array[j]}`] + array[i] === target) {
//         return (obj[`${array[i]}${array[j]}${array[i]}`] =
//           obj[`${array[i]}${array[j]}`] + array[i]) === target
//           ? true
//           : false;
//       }
//     }
//   }
//   return false;
// }
// // 7,8,5
// console.log(sumOf([3, 7, 1, 2, 8, 4, 5], 20));

// haqiqiysi
function sumOf(array, target) {
  array = array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      let cum = array[left] + array[right] + array[i];
      if (cum === target) {
        return true;
      } else if (cum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return false;
}
console.log(sumOf([3, 7, 1, 2, 8, 4, 5], 19));


// 
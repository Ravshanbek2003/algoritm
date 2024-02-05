// insertion sort
/*
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let idx = i;
    while (idx > 0 && arr[idx] < arr[idx - 1]) {
      [arr[idx], arr[idx - 1]] = [arr[idx - 1], arr[idx]];
      idx--;
    }
  }
  return arr;
}
const arr = [23, 22, 34, 2, 6, 25, 20];
console.log(insertionSort(arr));
*/

// quick sort
/*
function quickSort(arr) {
  if (!arr.length) {
    return arr;
  }
  let point = Math.floor(Math.random() * arr.length);
  const right = [];
  const left = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[point]) {
      left.push(arr[i]);
    } else if (arr[i] > arr[point]) {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), arr[point], ...quickSort(right)];
}
const arr = [2, 1, 5, 3, 4];
console.log(quickSort(arr));
*/

// merge sort

function mergeSort(arr) {
  
}
const arr = [2, 1, 5, 3, 4];
console.log(mergeSort(arr));

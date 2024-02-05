/*
// buble sort
// nearly sorted bo'lsa
function bubleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSwap = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwap = true;
      }
      console.log(arr, "i=", i, "====", "j=", j, isSwap);
    }
    if (isSwap) {
      break;
    }
  }
  return arr;
}
const arr = [5, 1, 2, 3, 4];
console.log(bubleSort(arr));
*/
/*
// selection sort    N*N


function selectionSort(arr = []) {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    // i indeksni minimum elementning indeksi deb olamiz
    let min = i;

    for (let j = i + 1; j < length; j++) {
      // arr[i] ni o'zidan keyingi elementlar bilan solishtirib,
      // undan kichkina elementning indeksini minimum indeks deb belgilaymiz
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    // arr[i] va arr[min] o'rnini almashtiramiz
    if (i != min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}
const arr = [2, 1, 5, 3, 4];
console.log(selectionSort(arr));
*/

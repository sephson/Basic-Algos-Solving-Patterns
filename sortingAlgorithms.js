/**BubbleSort**/

function bubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[i], arr[j + 1]);

      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    console.log("ONE COMPLETE PASS");
    if (noSwaps) break;
  }
  return arr;
}
bubbleSort([5, 1, 2, 3, 4]);

//Selection Sort
function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;

    for (var j = i + 1; j < arr.length; j++) {
      console.log(i, j);

      if (arr[j] < arr[lowest]) lowest = j;
    }
    if (i !== lowest) {
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}
console.log(selectionSort([3, 1, 4, 2]));

//insertion sort
function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      console.log(arr[i], arr[j]);

      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
console.log(insertionSort([2, 1, 29, 80, 14]));

//MERGESORT
function merge(arr1, arr2) {
  var i = 0;
  var j = 0;
  var results = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      results.push(arr2[j]);
      j++;
    } else {
      results.push(arr1[i]);
      i++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  var mid = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, mid));
  var right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([1, 3, 2, 9, 7]));

//QUICK SORT
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  var pivot = arr[arr.length - 1];
  var leftArray = [];
  var rightArray = [];

  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      rightArray.push(arr[i]);
    } else {
      leftArray.push(arr[i]);
    }
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}
quickSort([7, 8, 7, 4, 10, 3, 5]);

//implementing RADIX SORT
//digitcount function

function getDigits(arr) {
  var i;
  return Math.floor(Math.abs(arr / Math.pow(10, i))) % 10;
}

function digitCount(arr) {
  if (arr === 0) return 1;
  return Math.floor(Math.log10(Math.abs(arr))) + 1;
}

function mostDigits(arr) {
  if (arr.length === 1) return arr;
  var maxDigit = 0;
  var digitsArr = [];
  for (var i = 0; i < arr.length; i++) {
    maxDigit = digitsArr.push(digitCount(arr[i]));
  }
  return Math.max(...digitsArr);
}

function radixSort(arr) {
  let maxDigitCount = mostDigits(arr);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      digitBucket[getDigits(arr[i], k)].push(arr[i]);
    }
    arr = [].concat(...digitBucket);
  }
  return arr;
}
radixSort([209, 1, 445, 0]);

// Searching Algorithms
//binary search algorithm is muchg faster thamn linear search
//binary search only works on sorted arrays and also uses the concepts of divide and conquer

//binary search pseudocode

//-it accepts a sorted array and a value,
//create a left pointer at the start of the array and a right pointer at the end of the array
//while the left pointer is less than the right pointer
//create a pointer at the middle
//if you find the value you want return in the index
//if the value is too small move to the left, or too big move to the right
//return -1 if the target value is not found

//it has a time complexity of O(1)( rarely, except the target value is the first element),
//it also has a complexity of O(logN) which is good

function binarySearch(arr, value) {
  var left = 0;
  var right = arr.length - 1;
  var middle = Math.floor((left + right) / 2);

  while (arr[middle] !== value && left <= right) {
    if (value < arr[middle]) right = middle - 1;
    else left = middle + 1;
    middle = Math.floor((left + right) / 2);
  }
  return arr[middle] === value ? middle : -1;
}

binarySearch([1, 2, 3, 4, 5], 5);

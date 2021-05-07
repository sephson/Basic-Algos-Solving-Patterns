// reverse a string

function reverseString(str) {
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reverseString("toyin"));

// function that count the each characters in a string

function charCount(str) {
  //create an object to return at the end
  var obj = {};

  newStr = str.toLowerCase(); //convert all strings to lower case

  //loop through the string
  for (var i = 0; i < newStr.length; i++) {
    //checking if the string is already in the object
    if (/[a-z0-9]/.test(newStr)) {
      if (obj.hasOwnProperty(newStr[i])) {
        obj[newStr[i]]++; //add 1 if it exists
      } else {
        obj[newStr[i]] = 1; //if it doesnt assign it to one
      }
    }
  }
  return obj;
}

console.log(charCount("Hello I am Toyin"));

// function same that returns true if the square of each elemnt of first array is equal the second array

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    var arr = arr1[i] ** 2;

    if (arr2.indexOf(arr) !== -1) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(same([3, 2, 4, 3], [1, 16, 4]));

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    if (frequencyCounter1.hasOwnProperty(val)) {
      frequencyCounter1[val]++;
    } else {
      frequencyCounter1[val] = 1;
    }
  }
  for (var val of arr2) {
    if (frequencyCounter2.hasOwnProperty(val)) {
      frequencyCounter2[val]++;
    } else {
      frequencyCounter2[val] = 1;
    }
  }
  console.log(frequencyCounter1, frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, -2, 3, 2], [1, 4, 9, 1]));

// write a fuction to check between two strings if they are anagrams.

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let freqCount1 = {};
  let freqCount2 = {};

  for (let char of str1) {
    if (freqCount1.hasOwnProperty(char)) {
      freqCount1[char]++;
    } else {
      freqCount1[char] = 1;
    }
  }

  for (let char of str2) {
    if (freqCount2.hasOwnProperty(char)) {
      freqCount2[char]++;
    } else {
      freqCount2[char] = 1;
    }
  }

  console.log(freqCount2, freqCount1);

  for (let key in freqCount1) {
    if (!(key in freqCount2)) {
      return false;
    }

    if (freqCount1[key] !== freqCount2[key]) {
      return false;
    }
  }
  return true;
}

console.log(anagram("car", "rar"));

// sum to zero for a sorted array

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= 0; i--) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero([-3, -2, 0, 2, -3]));

// factorial with recursion
function fac(num) {
  if (num === 1) return 1;
  return num * fac(num - 1);
}

console.log(fac(5));

// 1. Do the below programs in anonymous function & IIFE
// a. print odd numbers in an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const printOddNumbers = function (arr) {
  for (const num of arr) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  }
};

printOddNumbers(numbers);
// output:1,3,5,7,9;

// b. convert all the strings to title caps in a string array

const strings = [
  "hello world",
  "javascript is awesome",
  "title case conversion",
];
const convertToTitleCase = function (arr) {
  const titleCaseArray = arr.map((str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  });
  return titleCaseArray;
};

const titleCaseStrings = convertToTitleCase(strings);
console.log(titleCaseStrings);
// output:[ 'Hello World', 'Javascript Is Awesome', 'Title Case Conversion' ]

//c. sum of all numbers in an array?code and output answer javascript

const numbers = [1, 2, 3, 4, 5];
const totalSum = (function (arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
})(numbers);

console.log(totalSum);
// output:15

// d.  Return all the prime numbers in an array?code and output answer javascript

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = (function (arr) {
  return arr.filter((num) => isPrime(num));
})(numbers);

console.log(primeNumbers);
// output:[ 2, 3, 5, 7 ]

// e. Return all the palindromes in an array

const strings = ["radar", "hello", "level", "world", "deified"];
const palindromes = (function (arr) {
  return arr.filter((str) => isPalindrome(str));
})(strings);

console.log(palindromes);
// output:[ 'radar', 'level', 'deified' ]

// f. Return median of two sorted arrays of the same size
//This is the median of the combined arrays `[1, 2, 3, 4, 5, 6]`

function findMedianSortedArrays(arr1, arr2) {
  const mergedArray = mergeSortedArrays(arr1, arr2);
  const length = mergedArray.length;

  if (length % 2 === 0) {
    const middleIndex1 = length / 2 - 1;
    const middleIndex2 = length / 2;
    return (mergedArray[middleIndex1] + mergedArray[middleIndex2]) / 2;
  } else {
    const middleIndex = Math.floor(length / 2);
    return mergedArray[middleIndex];
  }
}

function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

const array1 = [1, 3, 5];
const array2 = [2, 4, 6];

const median = findMedianSortedArrays(array1, array2);
console.log(median);
// output:3.5  which is `(3 + 4) / 2`.

// g. Remove duplicates from an array

function removeDuplicates(arr) {
  const uniqueArray = [];

  for (const item of arr) {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  }

  return uniqueArray;
}

const originalArray = [1, 2, 2, 3, 4, 4, 5];
const arrayWithDuplicatesRemoved = removeDuplicates(originalArray);
console.log(arrayWithDuplicatesRemoved);
// output:[ 1, 2, 3, 4, 5 ]

// h. Rotate an array by k times

function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n; // Ensure k is within the range of array length

  const rotatedArray = [...arr.slice(n - k), ...arr.slice(0, n - k)];
  return rotatedArray;
}

const originalArray = [1, 2, 3, 4, 5];
const rotations = 2;
const rotated = rotateArray(originalArray, rotations);
console.log(rotated);
// output:[ 4, 5, 1, 2, 3 ]

// 2. Do the below programs in arrow functions.
// a. print odd numbers in an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printOddNumbers = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers(numbers);
// output:1 3 5 7 9

// b. convert all the strings to title caps in a string array
const strings = [
  "hello world",
  "javascript is awesome",
  "title case conversion",
];

const convertToTitleCase = (arr) => {
  return arr.map((str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  });
};

const titleCaseStrings = convertToTitleCase(strings);
console.log(titleCaseStrings);
// output:[ 'Hello World', 'Javascript Is Awesome', 'Title Case Conversion' ]

// c. sum of all numbers in an array
const numbers = [1, 2, 3, 4, 5];

const calculateSum = (arr) => {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum;
};

const totalSum = calculateSum(numbers);
console.log(totalSum);
// output:15

// d. Return all the prime numbers in an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
};

const findPrimeNumbers = (arr) => {
  return arr.filter((num) => isPrime(num));
};

const primeNumbers = findPrimeNumbers(numbers);
console.log(primeNumbers);
//output:[ 2, 3, 5, 7 ]

// e.Return all the palindromes in an array

const strings = ["radar", "hello", "level", "world", "deified"];

const isPalindrome = (str) => {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};

const findPalindromes = (arr) => {
  return arr.filter((str) => isPalindrome(str));
};

const palindromes = findPalindromes(strings);
console.log(palindromes);
//output:[ 'radar', 'level', 'deified' ]

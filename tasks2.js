// alg #1
// two numbers sum!!!
// twoNumbersSum(numbers, 3); // => [1, 2]
var numbers = [1, 2, 3, 4, 5, 6];
var target = 3;

function twoNumbersSum(nums, tar) {
  const hashMap = new Map();

  for (var i = 0; i < nums.length; i++) {
    var neededValue = tar - nums[i];

    if (hashMap.has(neededValue)) {
      // return [hashMap.get(neededValue), i];
      return `ur numbers: ${nums[hashMap.get(neededValue)]}, ${nums[i]}`;
    } else {
      hashMap.set(nums[i], i);
    }
  }
}

console.log(twoNumbersSum(numbers, target));

// alg #2
var string = "Hello my friend! How're you! I am fine, thx";

function countAllCharacters(str) {
  const hashMap = new Map();
  for (var i = 0; i < str.length; i++) {
    if (hashMap.has(str[i])) {
      hashMap.set(str[i], hashMap.get(str[i]) + 1);
    } else {
      hashMap.set(str[i], 1);
    }
  }

  return hashMap;
}

console.log(countAllCharacters(string));
// foo(string) => {h: 3, f:3, *space: 5}

// alg #3*
var integers = [1, 234, 3, 34, 34, 343, 653, 345, 35, 3, 3];
// foo(integers) => length
// I am not allow to use length!
// for !or! do while

function findLength(int) {
  const hashMap = new Map();
  var len = 0;

  for (var num of int) {
    if (hashMap.has(num)) {
      hashMap.set(num, hashMap.get(num) + 1);
    } else {
      hashMap.set(num, 1);
    }
  }

  for (var key of hashMap.keys()) {
    len += hashMap.get(key);
  }

  return len; // eto navern ujas, no eto pervoye cto priwlo mne v golovu))
}

console.log(findLength(integers));
// OPTIONAL Кто хочет может визуализировать каждый из этих алгоритмов как он хочет!

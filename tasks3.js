// #First_alg

// Find Pair with Sum Closest to Target

// Given an array of integers nums and a target value target, find the two numbers whose sum is closest to target.

var nums = [10, 22, 28, 29, 30, 40];
var target = 54;

function closestTwoSum(nums, target) {
  var left = 0;
  var right = nums.length - 1;
  var closestSum = nums[left] + nums[right];
  var closestPair = [];

  while (left < right) {
    var sum = nums[left] + nums[right];

    if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
      closestSum = sum;
      closestPair = [nums[left], nums[right]];
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return closestPair;
}

console.log(closestTwoSum(nums, target));

// #Second_alg

// Find the First Non-Repeating Character

// Given a string s, find the first character that does not repeat.

// Tip:
// A non-repeating character is a character that appears only once in the string.

var s = "swiss";

function firstUniqChar(s) {
  const hashMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (hashMap.has(s[i])) {
      hashMap.set(s[i], hashMap.get(s[i]) + 1);
    } else {
      hashMap.set(s[i], 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (hashMap.get(s[i]) === 1) {
      return `ur first unique character is: ${s[i]}`;
    }
  }

  return "there is no unique character in your variable!!!!!!!";
}

console.log(firstUniqChar(s));

// #Third_alg (Harder then others)

// Task:
// Given two strings s1 and s2, check if s2 is a rotation of s1.

// Tips:
// What is rotation?????????????:
// A rotation of a string means shifting its characters while keeping the order the same, rather than rearranging them as in an anagram.

// For example, if you rotate "waterbottle", you can get:

// "erbottlewat" (shift "water" to the end)
// "tlewaterbot" (shift "bottlewa" to the end)
// Difference Between Rotation and Anagram:
// Rotation keeps the order of characters but shifts them.
// Anagram rearranges characters in any order.
// For example:
// ✅ "erbottlewat" is a rotation of "waterbottle"
// ❌ "bottlewater" is a rotation of "waterbottle", but "bottleretaw" is not

// ✅ "silent" is an anagram of "listen"
// ❌ "silent" is not a rotation of "listen"

var s1 = "waterbottle";
var s2 = "erbottlewat";

function rotateString(str1, str2) {
  if ((str1 + str1).includes(str2)) {
    return `${str1} is a rotation of ${str2}`;
  }

  return `${str1} is not a rotation of ${str2}`;
}

console.log(rotateString(s1, s2));

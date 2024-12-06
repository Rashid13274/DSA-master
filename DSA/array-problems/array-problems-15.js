/* 4Sum
Problem:
Given an array S of n integers, are there elements a, b, c in S such that a + b + c + d = 0? 
OR  a + b + c + d = x;

Find all unique triplets in the array which gives the sum of zero.
Note: Elements in a triplet (a,b,c,d) must be in non-descending order. (ie, a ≤ b ≤ c ≤ d)
The solution set must not contain duplicate triplets.
For example, given array S = [-2, -1, 0, 0, 1, 2],
A solution set is:
[ [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ], [ -1, 0, 0, 1 ] ]
*/


function fourSum(arr, sum) {
  arr.sort((a, b) => a - b); // Sort the array
  let stack = [];

  let n = arr.length;
  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue; // Skip duplicates for i

    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && arr[j] === arr[j - 1]) continue; // Skip duplicates for j

      let start = j + 1;
      let end = n - 1;
      let target = sum - (arr[i] + arr[j]);

      while (start < end) {
        let currentSum = arr[start] + arr[end];
        if (currentSum === target) {
          stack.push([arr[i], arr[j], arr[start], arr[end]]);
          start++;
          end--;

          // Skip duplicates for start and end pointers
          while (start < end && arr[start] === arr[start + 1]) start++;
          while (start < end && arr[end] === arr[end - 1]) end--;
        } else if (currentSum > target) {
          end--;
        } else {
          start++;
        }
      }
    }
  }
  return stack;
}

// Test input
const arr = [-2, -1, 0, 0, 1, 2];
const sum = 0;
console.log(fourSum(arr, sum));


  
  // // Test input
  // const arr = [-2, -1, 0, 0, 1, 0];
  // const sum = 0;
  // console.log(fourSum(arr, sum));  // [ [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ], [ -1, 0, 0, 1 ] ]


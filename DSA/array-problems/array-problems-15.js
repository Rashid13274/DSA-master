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


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
  // Sort array for two-pointer approach
  nums.sort((a, b) => a - b);
  const result = [];
  const n = nums.length;
  
  // Handle edge cases
  if (n < 4) return result;
  
  // First loop for a
  for (let a = 0; a < n - 3; a++) {
      // Skip duplicates for a
      if (a > 0 && nums[a] === nums[a - 1]) continue;
      
      // Second loop for b
      for (let b = a + 1; b < n - 2; b++) {
          // Skip duplicates for b
          if (b > a + 1 && nums[b] === nums[b - 1]) continue;
          
          // Use two pointers for remaining two numbers
          let c = b + 1;
          let d = n - 1;
          
          while (c < d) {
              const sum = nums[a] + nums[b] + nums[c] + nums[d];
              
              if (sum === target) {
                  result.push([nums[a], nums[b], nums[c], nums[d]]);
                  
                  // Skip duplicates for c
                  while (c < d && nums[c] === nums[c + 1]) c++;
                  // Skip duplicates for d
                  while (c < d && nums[d] === nums[d - 1]) d--;
                  
                  c++;
                  d--;
              } else if (sum < target) {
                  c++;
              } else {
                  d--;
              }
          }
      }
  }
  
  return result;
}

// Test cases
console.log(fourSum([1,0,-1,0,-2,2], 0));
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

console.log(fourSum([2,2,2,2,2], 8));
// Output: [[2,2,2,2]]

// Test cases
// console.log(fourSum([1,0,-1,0,-2,2], 0));
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// console.log(fourSum([2,2,2,2,2], 8));
// Output: [[2,2,2,2]]

// Test input: 0
// const arr = [-2, -1, 0, 0, 1, 2];
// const sum = 0;
// console.log(fourSum(arr, sum));

  
   // Test : 1
  // const arr =  [-3,-1,0,2,4,5]  
  // const sum = 1;
  // console.log(fourSum(arr, sum));  // [ [ -3, -1, 2, 3 ] ]

  // Test : 2

  // arr = [-2, -1, 0, 0, 1, 0];
  // const sum = 0;

  //  Test : 3
  const arr = [-2,-1,-1,1,1,2,2];
  const sum = 0;
  console.log(fourSum(arr, sum));  // [ [ -2, -1, 1, 2 ], [ -1, -1, 1, 1 ] ]    
  
  // console.log(fourSum(arr, sum));  // [ [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ], [ -1, 0, 0, 1 ] ]


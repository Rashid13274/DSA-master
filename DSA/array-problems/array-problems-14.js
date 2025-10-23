/* 
Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation:
n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
2 is the missing number in the range since it does not appear in nums.

Example 2:

Input: nums = [0,1]
Output: 2
Explanation:
n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 
2 is the missing number in the range since it does not appear in nums.

Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation:
n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 
8 is the missing number in the range since it does not appear in nums.

Constraints:

n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.
*/

function findMissingNumber0ToN(nums){
	let sumOfNumbers = 0;
    let n   = nums.length;
    sumOfNumbers = Math.floor((n * (n + 1))/2);
    const currentSum = nums.reduce((acc, val) => acc + val, 0);
    return  sumOfNumbers - currentSum;
    
};

// Test cases
// const test1 = [3, 0, 1]; // missing 2
// console.log(findMissingNumber0ToN(test1)); // Output: 2
// const arr = [1,2,3,4,6,7, 0];
// const arr = [3,0,1];  // output: 2
// const arr = [0,1];  // output: 2
// findMissingNumber(arr);
// console.log(findMissingNumber(arr));
// console.log(findMissingNumber([9,6,4,2,3,5,7,0,1])); // Output: 8
// console.log(test([9,6,4,2,3,5,7,0,1])); // Output: 8
// console.log(test(arr));

function findMissingNumber1ToN(nums) {
    const n = nums.length;
    // For range 0 to N, sum formula is n*(n+1)/2
    const expectedSum = ((n + 1) * (n + 2)) / 2; // Modified formula since range is 1 to n+1
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

// Test cases
const test1 = [1, 2, 4, 5]; // missing 3
console.log(findMissingNumber1ToN(test1)); // Output: 3

const test2 = [1, 3, 4]; // missing 2
console.log(findMissingNumber1ToN(test2)); // Output: 2

const test3 = [2, 3, 4, 5, 6]; // missing 1
console.log(findMissingNumber1ToN(test3)); // Output: 1


/*  If the array is not sorted, you should:
Find the minimum and maximum values.
Calculate the expected sum of all numbers from min to max.
Subtract the actual sum of the array from the expected sum to get the missing number.


The sum formula approach works only if exactly one number is missing and both the minimum and maximum are present in the array. */
function findMissing(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let expectedSum = ((max - min + 1) * (min + max)) / 2;
    let actualSum = arr.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
}

// Example usage:
console.log(findMissing([19, 11, 12, 13, 14, 16, 17, 18, 20])); // Output: 15




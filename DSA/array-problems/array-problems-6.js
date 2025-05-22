/* I'll help you write a program to solve the Maximum Subarray
 problem using Kadane's Algorithm, which is the most efficient approach.


Problem Statement:
5. Maximum Subarray
 Given an integer array nums, find the subarray with the largest
 sum, and return its sum.

 Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 Output: 6
 Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 
 Input: nums = [1]
 Output: 1
 Explanation: The subarray [1] has the largest sum of 1.
*/

function maxSubArray(nums) {
    if (nums.length === 0) return 0;
    
    let maxSum = nums[0];        // Initialize maxSum with first element
    let currentSum = nums[0];    // Initialize currentSum with first element
    
    // Start from second element
    for (let i = 1; i < nums.length; i++) {
        // Either extend previous subarray or start new subarray
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // Update maxSum if currentSum is larger
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));  // Output: 6
console.log(maxSubArray([1]));                       // Output: 1
console.log(maxSubArray([-1]));                      // Output: -1
console.log(maxSubArray([-2,-1]));                   // Output: -1
console.log(maxSubArray([5,4,-1,7,8]));             // Output: 23
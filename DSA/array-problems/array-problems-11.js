/* 
3Sum
Problem:
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? 
OR  a + b + c = x;

Find all unique triplets in the array which gives the sum of zero.
Note: Elements in a triplet (a,b,c) must be in non-descending order. (ie, a ≤ b ≤ c)
The solution set must not contain duplicate triplets.
For example, given array S = {-1 0 1 2-1-4},
A solution set is:
(-1, 0, 1)
(-1,-1, 2)
*/

function tripletSumPair(arr, sum) {
    let stack = [];
    arr.sort((a, b) => a - b); // Ensure numerical sorting
    for (let i = 0; i < arr.length - 2; i++) { // arr.length - 2 to avoid unnecessary iterations

        // Skip duplicates for the main loop
        if (i > 0 && arr[i] === arr[i - 1]) continue;

        let start = i + 1;
        let end = arr.length - 1;
        let a = sum - arr[i];    // a + b + c = x,  => a + b = x - c; x = 13; => currentSum =  a

        while (start < end) {
            let currentSum = arr[start] + arr[end];
            if (currentSum === a) {
                stack.push([arr[i], arr[start], arr[end]]);
                start++;
                end--;

            } else if (currentSum > a) {
                end--;
            } else {
                start++;
            }
        }
    }
    return stack;
}


const arr = [1, 4, 6, 1, 4, 6, 45, 10, 8, 4]; 
let sum = 15;
// console.log(tripletSumPair(arr, sum)); // Output: [[1, 4, 8], [4, 6, 3]]
console.log(test(arr, sum)); // Output: [[1, 4, 8], [4, 6, 3]]



// const arr = [-1, 0, 1, 2, - 1, - 4];
// const sum = 0;
// console.log(tripletSumPair(arr, sum));  // Expected Output: [[-1, 0, 1], [-1, -1, 2] ]






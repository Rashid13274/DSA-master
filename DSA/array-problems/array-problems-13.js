/* Given an array of Integers, find three  integers such that  their sum is closet to a target value.
return sum of all those  integers.
Input: [-1,2,-1, -4], target = 1;
Ouptut : [-1, 1, 2]

 */

/**
 * Given an array of integers, find three integers such that their sum is closest to a target value.
 * Return the triplet.
 * @param {number[]} arr - Input array of integers.
 * @param {number} target - Target sum.
 * @return {number[]} - Triplet closest to the target sum.
 */

function threeSumClosestTriplet(arr, target) {
    arr.sort((a, b) => a - b);
    let closestSum = Number.MAX_SAFE_INTEGER;
    let closestTriplet = [];

    for (let i = 0; i < arr.length - 2; i++) {
        let start = i + 1;
        let end = arr.length - 1;

        while (start < end) {
            let currentSum = arr[i] + arr[start] + arr[end];
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                // closestSum = currentSum;
                closestTriplet = [arr[i], arr[start], arr[end]];

                //  exact similar to 2sum closet pair, where we're adding two array element
                // here we're adding three element  into currentSum and comparing is same.
                // no changes in comparing in 2sum or 3Sum.
            }
            if (currentSum < target) {
                start++;
            } else if (currentSum > target) {
                end--;
            } else {
                // If currentSum is exactly equal to the target, return the triplet immediately.
                return [arr[i], arr[start], arr[end]];
            }
        }
    }
    return closestTriplet;
}

// Example usage:

// let input = [-1, 2, -1, -4, -5,-2];
let input = [-1, 2, -1, -4];
let target = 1;

let result = threeSumClosestTriplet(input, target);
// console.log(result);  // Output: [-1, -1, 2]
// console.log(test(input, target));

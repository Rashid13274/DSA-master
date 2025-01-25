/*  Three way partitioning:
Given an array of size n and range [a,b]. The Task is to partion the array  around the range  such that
array  is divided into three parts
1. All the elements smaller then a to b come first.
2. All the elements in range a to b come next.
3. All the elements greater than b appear in the end.

input: n  = 5;
arr = [1,2,3,3 5];
[a, b] = [1, 2];
output: 1
Explanation: One possible  arrangement is {1,2,3,3,4}, if you return a valid arrangement, output will be 1.

Solve in time complexcity: O(n) and space complexcity: O(1).
*/
// Approach: 1. using sorting, 

// approach: 2
function partitionedArray(arr, range) {
    let start = 0;
    let end = arr.length - 1; // Use last valid index
    let i = 0;

    while (i <= end) {
        if (arr[i] < range[0]) {
            swap(arr, start, i);
            start++;
            i++; // Move forward after swapping
        } else if (arr[i] > range[1]) {
            swap(arr, end, i);
            end--; // Decrease end but do not increase i to recheck
        } else {
            i++; // Move forward if within range
        }
    }
    return arr;
}

// Updated swap function to modify the array directly
function swap(arr, idx1, idx2) {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// Test case
const arr = [1, 14, 5, 20, 4, 2, 54, 20, 87, 98, 3, 1, 32];

const range = [10, 20];
// console.log(partitionedArray(arr, range));
// output: [1,  5,  4,  2,  1,  3, 14, 20, 20, 98, 87, 32, 54]




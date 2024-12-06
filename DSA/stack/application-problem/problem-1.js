/* PROBLEM NAME: -  NEXT LARGEST ELEMENT OR NEXT GREATER ELEMENT.
# STATEMENT: GIVE AN  ARRAY PRINT NEXT GREATER ELEMENT (NGE) FOR EVERY 
EVERY ELEMENT. THE NEXT GREATER FOR AN ELEMENT ON RIGHT.
SIDE OF X IN THE ARRAY  ELEMENTS FOR WHICH NO GREATER EXIST CONSIDER 
THE NEXT GREATER ELEMENT  AS -1.

INPUT: [4,5,2,25]
OUTPUT: [5,25,25,-1]
*/

// 1. NAIVE APPORACH.
// function nge(arr) {
//     let n = arr.length;
//     let res = [];
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] > arr[i]) {
//                 res.push(arr[j]);
//                 break;
//             }
//         }
//     }
//     res.push(-1);
//     return res;
// }
// console.log(nge(arr))

//  using stack and vector with O(n) time complexcity.

function nearestGreaterElements(arr) {
    const n = arr.length;
    const nge = new Array(n).fill(-1); // Initialize the result array with -1
    const stack = [];

    for (let i = 0; i < n; i++) {
        // While stack is not empty and the current element is greater than the element corresponding to the index at the top of the stack
        while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
            const index = stack.pop();
            nge[index] = arr[i];
        }
        // Push current index to the stack
        stack.push(i);
    }

    return nge;
}

// Example usage:
const arr = [4, 5, 2, 25, 7, 8, 6];
const result = nearestGreaterElements(arr);
// console.log(result); // Output: [5, 25, 25, -1, 8, -1, -1]

// let arr = [4, 5, 2, 25];
// console.log(nge(arr));
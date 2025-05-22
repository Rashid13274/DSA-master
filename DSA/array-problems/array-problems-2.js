/*  create an array that contains  common element of all the distinct sized three array, note that 
    all the element in the  resultant array should not contains  duplicate value;
Input:
arr1 = [1,5,10,20,40,80];
arr2 = [6,7,20,80,100];
arr3 = [3,4,15, 20, 30,70, 80, 120];
 */

function findCommonElements(arr1, arr2, arr3) {
    // Create sets for each array to remove duplicates
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let set3 = new Set(arr3);
    
    // Create result array
    let result = [];
    
    // Check each element from first set
    for (let num of set1) {
        // If element exists in all three sets, add to result
        if (set2.has(num) && set3.has(num)) {
            result.push(num);
        }
    }
    
    // Sort result for better readability
    return result.sort((a, b) => a - b);
}


// Test with given input
let arr1 = [1, 5, 10, 20, 40, 80];
let arr2 = [6, 7, 20, 80, 100];
let arr3 = [3, 4, 15, 20, 30, 70, 80, 120];

// console.log(findCommonElements(arr1, arr2, arr3)); // Output: [20, 80]



// Test with additional cases
let test1 = [1, 1, 2, 3, 4];
let test2 = [2, 2, 3, 4, 5];
let test3 = [3, 3, 4, 5, 6];
// console.log(findCommonElements(test1, test2, test3)); // Output: [3, 4]


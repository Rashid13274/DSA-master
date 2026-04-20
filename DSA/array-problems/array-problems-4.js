/* Find Second Smallest Number in an array.
arr = [-1,7,1,34,18];

Mathod: Traverse an array and keep two flag smallest and second smallest.
The Time Complexcity of this approach is  O(n).
 */

function test(arr){
    let firstSmallest = Number.MAX_SAFE_INTEGER;
    let secondSmallest = Number.MAX_SAFE_INTEGER;
    let temp;
    for(const element of arr){
        if(element < firstSmallest){
             secondSmallest  = firstSmallest
             firstSmallest = element
        } else if (element < secondSmallest && element !== firstSmallest) {
            secondSmallest = element;
        }
    }
    return [firstSmallest, secondSmallest];
}
// const arr = [7,1, -1, 34,18];
// let arr = [0, 7, 1, -1, 34, 18];
let arr = [0, 7, 1, -1];


console.log(test(arr));

// Test case for the test function
const testCases = [
    { input: [7, 1, -1, 34, 18], expected: [-1, 1] },
    { input: [0, 7, 1, -1, 34, 18], expected: [-1, 0] },
    { input: [0, 7, 1, -1], expected: [-1, 0] },
    { input: [5, 5, 5, 5], expected: [5, 5] },
    { input: [10], expected: [10, Number.MAX_SAFE_INTEGER] },
    { input: [], expected: [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER] },
];

testCases.forEach(({ input, expected }, index) => {
    const result = test(input);
    console.log(`Test Case ${index + 1}:`, result[0] === expected[0] && result[1] === expected[1] ? 'Passed' : 'Failed', `| Expected: ${expected}, Got: ${result}`);
});
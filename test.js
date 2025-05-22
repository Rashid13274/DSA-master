
function test(arr){
    let firstSmallest  = Number.MAX_SAFE_INTEGER;
    let secondSmallest = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] < firstSmallest){
            firstSmallest = arr[i];
        }
        if(arr[i] > firstSmallest  &&  firstSmallest < secondSmallest){
            secondSmallest  = arr[i];
        }
    }
}

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
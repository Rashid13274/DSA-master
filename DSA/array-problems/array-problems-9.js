/* 
Problem: 3Sum Multiplicity
Find number of tuples (i,j,k) where i < j < k and arr[i] + arr[j] + arr[k] = target

Example:
Input: arr = [1,1,2,2,3,3,4,4,5,5], target = 8
Output: 20

Explanation:
The triplets that sum to 8 are:
- (1,2,5) occurs 8 times
- (1,3,4) occurs 8 times
- (2,2,4) occurs 2 times
- (2,3,3) occurs 2 times
*/

function threeSumMulti(arr, target) {
    const MOD = 1000000007;
    let result = 0;
    
    // Step 1: Count the frequency of each number
    const count = {};
    for (let num of arr) {
        count[num] = (count[num] || 0) + 1;
    }
    
    // Step 2: For each pair of numbers, find how many ways to make target
    for (let i in count) {
        for (let j in count) {
            let k = target - Number(i) - Number(j);
            
            // Skip if k is less than j (to avoid duplicates)
            if (Number(j) > Number(k)) continue;
            
            // If k exists in our count
            if (k in count) {
                // Case 1: All numbers are different (i < j < k)
                if (Number(i) < Number(j) && Number(j) < Number(k)) {
                    result += count[i] * count[j] * count[k];
                }
                // Case 2: Two numbers are same (i = j < k)
                else if (Number(i) === Number(j) && Number(j) < Number(k)) {
                    result += count[i] * (count[i] - 1) / 2 * count[k];
                }
                // Case 3: Two numbers are same (i < j = k)
                else if (Number(i) < Number(j) && Number(j) === Number(k)) {
                    result += count[i] * count[j] * (count[j] - 1) / 2;
                }
                // Case 4: All numbers are same (i = j = k)
                else if (Number(i) === Number(j) && Number(j) === Number(k)) {
                    result += count[i] * (count[i] - 1) * (count[i] - 2) / 6;
                }
            }
            
            result %= MOD;
        }
    }
    
    return result;
}

// Test cases
const testCases = [
    {
        arr: [1,1,2,2,3,3,4,4,5,5],
        target: 8,
        expected: 20
    },
    {
        arr: [1,1,2,2,2,2],
        target: 5,
        expected: 12
    },
    {
        arr: [2,1,3],
        target: 6,
        expected: 1
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = threeSumMulti(test.arr, test.target);
    console.log(`Test ${index + 1}:`);
    console.log(`Input: arr = [${test.arr}], target = ${test.target}`);
    console.log(`Output: ${result}`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Status: ${result === test.expected ? 'PASSED' : 'FAILED'}\n`);
});

/*



````

### Explanation:

1. **Problem Overview:**
   - Find number of ways to pick 3 numbers that sum to target
   - Numbers must be picked in order (i < j < k)
   - Same value can be picked multiple times if they're at different indices

2. **Solution Steps:**
   - **Step 1:** Count frequency of each number in array
   - **Step 2:** Consider all possible pairs and find third number needed
   - **Step 3:** Handle 4 different cases:
     1. All numbers different (i < j < k)
     2. First two numbers same (i = j < k)
     3. Last two numbers same (i < j = k)
     4. All numbers same (i = j = k)

3. **Key Points:**
   - Uses object to store frequency count
   - Handles combinations using basic math:
     - C(n,2) = n*(n-1)/2 for choosing 2 numbers
     - C(n,3) = n*(n-1)*(n-2)/6 for choosing 3 numbers

4. **Time Complexity:** O(N + R²)
   - N: length of input array
   - R: range of values (101 in this case)

5. **Space Complexity:** O(R)
   - R: range of values
   - Only stores frequency count

The solution includes test cases and detailed console output to help understand the results.


*/
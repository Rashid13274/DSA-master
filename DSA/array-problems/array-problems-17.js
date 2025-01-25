/* 
Problem Name: 3sumMultiplicity
Given an array arr, and an integer target, return the number of tuples i, j, k such that i < j < k and 
arr[i] + arr[j]  + arr[k] == target.

Ex: 
input: arr = [1,1,2,2,3,3,4,4,5,5];
ouput: 20
explanation:
Enumerating by values  (arr[i], arr[j], arr[k]): 
(1,2,5) occurs 8 times;
(1,3,4) occurs 8 times;
(2,2,4) occures 2 times;
(2,3,3) occurs  2 times;
*/

/* 
Let's break down how this solution works:

Frequency Counting:

javascriptCopyconst count = new Array(101).fill(0);
for (const num of arr) {
    count[num]++;
}

Creates an array to store frequency of each number
Counts how many times each number appears in the input array


Case 1: All Same Numbers:

javascriptCopyif (target === i * 3 && count[i] >= 3) {
    result = (result + Math.floor((count[i] * (count[i] - 1) * (count[i] - 2)) / 6)) % MOD;
}

Handles when all three numbers are the same (e.g., 2+2+2=6)
Uses combination formula C(n,3) = n*(n-1)*(n-2)/6


Case 2: Two Same Numbers:

javascriptCopy// Case x + x + y = target
if (target === i * 2 + j && count[i] >= 2) {
    result = (result + Math.floor((count[i] * (count[i] - 1) * count[j]) / 2)) % MOD;
}

Handles when two numbers are the same (e.g., 2+2+3=7)
Uses combination formula C(n,2)m = n(n-1)*m/2


Case 3: All Different Numbers:

javascriptCopyconst k = target - i - j;
if (j < k && k <= 100) {
    result = (result + count[i] * count[j] * count[k]) % MOD;
}

Handles when all three numbers are different (e.g., 1+2+3=6)
Simply multiplies the frequencies of the three numbers
*/

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
function threeSumMulti(arr, target) {
    const MOD = 1e9 + 7;
    const count = new Array(101).fill(0); // Since 0 <= arr[i] <= 100
    
    // Count frequency of each number
    for (const num of arr) {
        count[num]++;
    }
    
    let result = 0;
    
    // Case 1: All three numbers are same (x + x + x = target)
    for (let i = 0; i <= 100; i++) {
        if (target === i * 3 && count[i] >= 3) {
            // Calculate combinations: C(count[i], 3)
            result = (result + Math.floor((count[i] * (count[i] - 1) * (count[i] - 2)) / 6)) % MOD;
        }
    }
    
    // Case 2: Two numbers are same (x + x + y = target or x + y + y = target)
    for (let i = 0; i <= 100; i++) {
        for (let j = i + 1; j <= 100; j++) {
            // Case x + x + y = target
            if (target === i * 2 + j && count[i] >= 2) {
                // Calculate combinations: C(count[i], 2) * count[j]
                result = (result + Math.floor((count[i] * (count[i] - 1) * count[j]) / 2)) % MOD;
            }
            
            // Case x + y + y = target
            if (target === i + j * 2 && count[j] >= 2) {
                // Calculate combinations: count[i] * C(count[j], 2)
                result = (result + Math.floor((count[i] * count[j] * (count[j] - 1)) / 2)) % MOD;
            }
        }
    }
    
    // Case 3: All three numbers are different (x + y + z = target)
    for (let i = 0; i <= 100; i++) {
        for (let j = i + 1; j <= 100; j++) {
            const k = target - i - j;
            if (j < k && k <= 100) {
                // Calculate combinations: count[i] * count[j] * count[k]
                result = (result + count[i] * count[j] * count[k]) % MOD;
            }
        }
    }
    
    return result;
}

// Test cases
console.log(threeSumMulti([1,1,2,2,3,3,4,4,5,5], 8)); // Output: 20
console.log(threeSumMulti([1,1,2,2,2,2], 5));         // Output: 12
console.log(threeSumMulti([2,1,3], 6));               // Output: 1

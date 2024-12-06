/* Problem:  Permutaiton In String.

Given two string s1 and s2, write a function to return true if s2 contains permutation of s1.

Description:
In simple words, Two strings are said to be permutation of each other, if it contains same character
only  the order or arrangementof characters in both the string is different. 
for ex: (car, rac)

Ex:1
Input: s1 = 'ab' and s2 = 'eidbaooo'
Output: true
Explanation: s2 contains one permutation of s1 ('ba)

Ex:2

Input: s1 = 'ab' and s2 = 'eidboaoo'
Output: false

Note: The input strings only contains lower case letters.
*/



// The solution uses the sliding window technique with two frequency arrays to keep track of 
// character counts in the current window and compare it with the character counts in `s1`.

function checkInclusion(s1, s2) {
    let s1Len = s1.length;
    let s2Len = s2.length;
    if (s1Len > s2Len) return false;

    const s1Arr = new Array(26).fill(0);
    const s2Arr = new Array(26).fill(0);

    for (let i = 0; i < s1Len; i++) {
        s1Arr[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        s2Arr[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    // 'ab', 'eidbaooo
    // maintaing  the window size
    for (let i = 0; i < (s2Len - s1Len); i++) { // (s2Len - s1Len) 8-2 = 6 means it'll go upto 7 char.
        if (isPermutation(s1Arr, s2Arr)) {
            return true;
        }
        //  remove character at ith index and include character at (i + s1Len) index.
        s2Arr[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        s2Arr[s2.charCodeAt(i + s1Len) - 'a'.charCodeAt(0)]++;
    }

    if (isPermutation(s1Arr, s2Arr)) {
        return true;
    }
    return false;

}

function isPermutation(s1Arr, s2Arr) {
    for (let i = 0; i < s1Arr.length; i++) {
        if (s1Arr[i] !== s2Arr[i]) {
            return false;
        }
    }
    return true;
}



// Example usage:
// console.log(checkInclusion('ab', 'eidbaooo')); // Output: true
// console.log(checkInclusion('ab', 'eidboaoo')); // Output: false


/*
Example:
Input: s = 'chaebabacd'  p = 'abc'
Output: [0, 6]

Example:
Input: s = 'abab' p = 'ab'
Output: [0, 1, 2];
 */
// Using the Hashmap(array) and sliding window


// function countAnagram(p, s) {
//     let s1Len = p.length;
//     let s2Len = s.length;
//     let res = [];


//     let s1Arr = new Array(26).fill(0);
//     let s2Arr = new Array(26).fill(0);

//     for (let i = 0; i < s1Len; i++) {
//         s1Arr[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
//         s2Arr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
//     }

//     for (let i = 0; i < s2Len - s1Len; i++) {
//         if (isAnagram(s1Arr, s2Arr)) {
//             res.push(i);
//         }
//         s2Arr[s.charCodeAt(i + s1Len) - 'a'.charCodeAt(i)]++;
//         s2Arr[s.charCodeAt(i) - 'a'.charCodeAt(i)]--;
//     }
//     return res;
// }

// function isAnagram(s1Arr, s2Arr) {
//     for (let i = 0; i < s1Arr.length; i++) {
//         if (s1Arr[i] !== s2Arr[i]) {
//             return false;
//         }
//     }
//     return true;
// }
// let s = 'chaebabacd', p = 'abc';
// console.log(countAnagram(p, s));

// function countAnagram(p, s) {
//     let s1Len = p.length;
//     let s2Len = s.length;
//     let res = [];

//     let s1Arr = new Array(26).fill(0);
//     let s2Arr = new Array(26).fill(0);

//     // Initialize the count arrays with the first window
//     for (let i = 0; i < s1Len; i++) {
//         s1Arr[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
//         s2Arr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
//     }

//     // Slide the window over the string s
//     for (let i = 0; i <= s2Len - s1Len; i++) {
//         // Check if current window is an anagram
//         if (isAnagram(s1Arr, s2Arr)) {
//             res.push(i);
//         }

//         // Slide the window: remove the first character and add the next one
//         if (i < s2Len - s1Len) {
//             s2Arr[s.charCodeAt(i + s1Len) - 'a'.charCodeAt(0)]++;
//             s2Arr[s.charCodeAt(i) - 'a'.charCodeAt(0)]--;
//         }
//     }
//     return res;
// }

// function isAnagram(s1Arr, s2Arr) {
//     for (let i = 0; i < s1Arr.length; i++) {
//         if (s1Arr[i] !== s2Arr[i]) {
//             return false;
//         }
//     }
//     return true;
// }

// let s = 'cbaebabacd', p = 'abc';
// console.log(countAnagram(p, s));  // Output: [0, 6]

// s = 'abab';
// p = 'ab';
// console.log(countAnagram(p, s));  // Output: [0, 1, 2]

// =============================================================//




// Example:
// Input: s = 'chaebabacd'  p = 'abc'
// Output: [0, 6]

// Example:
// Input: s = 'abab' p = 'ab'
// Output: [0, 1, 2];  4-2 = 2;






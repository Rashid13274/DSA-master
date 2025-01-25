/* Find the longest Common Prefix String Amongest on Array of string

Given an Array of Strings, write a method to find the longest common
prfix. If no common prefix is found, return an empty string.

Ex: 1.
Input: ['cat', 'cable', 'camera']
Output: 'ca'

Ex: 2
Input: ['not', 'dog', 'elephent']
Output: ''

*/

// Second Approch(edge case handled)
function longestCommonPrefix(arr) {
    if (arr == null || arr.length === 0) {
        return '';  // Return an empty string for invalid input
    }

    let prefix = arr[0]; // Initial string as prefix

    for (let i = 1; i < arr.length; i++) {
        let currentString = arr[i];
        while (!currentString.startsWith(prefix)) {
            // Shorten the prefix by removing the last character
            prefix = prefix.slice(0, prefix.length - 1);

            // If the prefix becomes empty, no common prefix exists
            if (prefix === '') {
                return '';
            }
        }
    }
    return prefix;
}
// Example usage:

// console.log(longestCommonPrefix(['cat', 'cable', 'camera']));  // Output: 'ca'
// console.log(longestCommonPrefix(['not', 'dog', 'elephant']));  // Output: ''
// console.log(longestCommonPrefix(['flower', 'flow', 'flight']));  // Output: 'fl'
// console.log(longestCommonPrefix(['dog', 'racecar', 'car']));  // Output: ''


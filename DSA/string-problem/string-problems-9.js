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

function longestCommonPrefix(arr){

    let start = arr[0];
    let next = arr[1];

    let set = new Set();

    if (start[0] !== next[0]) {
        return '';
    }

    for (let i = 1; i < arr.length; i++) {
        let next = arr[i];

        for (let j = 0; j < start.length; j++) {
            if (start[j] === next[j]) {
                set.add(next[j])
            }
        }
    }
    return [...set].join('');
}




// console.log(longestCommonPrefix(['cat', 'cable', 'camera']));
// console.log(longestCommonPrefix(['not', 'dog', 'elephent']));


// Second Approch(edge case handled)
function longestCommonPrefix2(arr) {
    if (arr == null || arr.length === 0) {
        return '';  // Return an empty string for invalid input
    }

    let prefix = arr[0];  // Take the first string as the initial prefix

    for (let i = 1; i < arr.length; i++) {
        let currentString = arr[i];

        // Reduce the prefix until it matches the start of the current string
        while (currentString.indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);  // Remove the last character
            if (prefix === '') {
                return '';  // If no common prefix, return an empty string
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


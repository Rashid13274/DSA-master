/* Problems: Decode String
Description: Given an encoded string, return its decoded string.
The encoding rule is k[encoded_string], where encoded_string inside the squire brackets is being 
repeated  exactly k times. Note that k  is guranteed to be a positive integer.

You may assume  that input string is always valid, no extra white space, squire bracket are well formed.
 
Furthermore, You may assume that origianl data does contain any digit and that digits are for 
repeated numbers, k, for example  there won't be input like 3a or 2[4].

Ex: 1
Input: s = '3[a]2[bc]';
Ouput: 'aaabcbc'

Ex: 2
Input: "3[a2[c]]"
Output: "accaccacc"

Ex: 3
Input: "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

*/

/* Hints:
            stack = [];
 initially currentNumber  = 0;
            currentString = '';

1. if(currentString === '['){
    push  currentString and currentNumber in stack.
    and make curentNumber  = 0, and currentString = '',  {since ahead we can have number and string}
    }

2. When we see digit : 
        we will store that digit in currentNumber.

3. When we see character:
        we will store that in currentString.

4. When we see ']' :
    we'll pop stack and store previousNumber in prevNumber 
    we'll pop stack and store previousString in prevString.
    
    and 
    currentS = prevString + currentString * prevNumber;
 */

    function decodeString(str) {
    let stack = [];
    let currentNumber = 0;
    let currentString = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (!isNaN(char)) {
            // Handle multi-digit numbers
            currentNumber = currentNumber * 10 + parseInt(char);
        } else if (char === '[') {
            // Push currentString and currentNumber to the stack
            stack.push(currentString);
            stack.push(currentNumber);
            // Reset currentString and currentNumber for the next segment
            currentNumber = 0;
            currentString = '';
        } else if (char === ']') {
            // Pop from stack
            let num = stack.pop();
            let prevString = stack.pop();
            // Update currentString
            currentString = prevString + currentString.repeat(num);
        } else {
            // Append characters to currentString
            currentString += char;
        }
    }

    return currentString;
}



// Test cases
// console.log(decodeString("3[a]2[bc]")); // Output: "aaabcbc"
// console.log(decodeString("3[a2[c]]")); // Output: "accaccacc"
// console.log(decodeString("2[abc]3[cd]ef")); // Output: "abcabccdcdcdef"

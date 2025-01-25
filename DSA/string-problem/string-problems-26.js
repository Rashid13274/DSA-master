/* Problem: Backspace string compare:
Description: Given two string s and t return true if they are equal when both are typed empty text
editor '#' means  a backspace character. 
Note that afte  backspacing an empty text, the text will continue empty.

Ex: 1
Input: s = 'ab#c', t = 'ad#c'
output: true
Explantion: Both s and t becomes 'ac';

*/
function backspaceStringCompare(s, t) {
    const build = (str) => {
        const stack = [];
        for (let char of str) {
            if (char !== '#') {
                stack.push(char);
            } else if (stack.length > 0) {
                stack.pop();
            }
        }
        return stack.join('');
    };

    const finalS = build(s);
    const finalT = build(t);

    return finalS === finalT;
}

// Test cases
// console.log(backspaceStringCompare("ab#c", "ad#c")); // Output: true
// console.log(backspaceStringCompare("ab##", "c#d#")); // Output: true ("", "")
// console.log(backspaceStringCompare("a##c", "#a#c")); // Output: true ("c", "c")
// console.log(backspaceStringCompare("a#c", "b"));     // Output: false

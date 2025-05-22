/*
PROBLEM: VALID PARENTESES.

Description: Given a string containing just the characters '{','}',
'(', ')', '[', ']' 
validate wheather on input string is valid or not.

An input string is valid if:
Open brackets must be closed by the same type of brackets. 
Open brackets must be closed in correct order.
* Empty string is also considered  valid.

Ex: 1 
Input: {[]})
Ouput: Invalid

Ex: 2
Input: {()}[]
Output: valid

Ex: 3
Input: ([)]
Output: Invalid

*/

function validParenthesis(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (char == '(' || char == '{' || char == '[') {
            stack.push(char);
        } else if (
            (char == ')' && stack[stack.length - 1] == '(') ||
            (char == '}' && stack[stack.length - 1] == '{') ||
            (char == ']' && stack[stack.length - 1] == '[')
        ) {
            stack.pop();
        } 
        else {
            return false;
        }
    }
    return stack.length == 0;
}

function test(str){
    if(str.length % 2 !== 0) return 'not valid partenthesis';
    let stack = [];

    for(let i = 0; i<str.length; i++){
        let val = str.charAt(i);
        if(val == '(' || val == '{' || val == '['){
            stack.push(val);
        }
        else if((val == ')' && stack[stack.length -1] == '(')  || ( val == '}'   && stack[stack.length -1])
            || val === ']' || stack[stack.length -1] == ']'){

                stack.pop();
            }
        }
        return stack.length == 0;
            
}

// Test cases
console.log(test('{()}[]')); // true
console.log(test('([)]')); // false
console.log(test('{[]}'));   // true
console.log(test('{()}[]')); // true
console.log(test('([)]')); // false

// Test cases
// console.log(validParenthesis('{()}[]')); // true
// console.log(validParenthesis('([)]')); // false
// console.log(validParenthesis('{[]})'));   // true
// console.log(validParenthesis(')'));   // true


// console.log(test('{()}[]')); // true
// console.log(validParenthesis('([)]')); // false
// console.log(validParenthesis('{[]}'));   // true

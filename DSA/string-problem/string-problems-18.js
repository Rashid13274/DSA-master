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
    let stack = [];
    for(let i =0; i<str.length; i++){
        if(str[i] == '(' || str[i] == '{' || str[i] =='['){
            stack.push(str[i]);
        }
        else if(
        (str[i] == ')' && stack[stack.length -1] == '(')  || 
        (str[i] == '}' && stack[stack.length -1] == '{')  ||
        (str[i] == ']' && stack[stack.length -1] == '[') 
    ){
        stack.pop();

    }
    else{
        return false;
    }

    }
    return stack.length == 0;
}

// Test cases
// console.log(validParenthesis('{()}[]')); // true
// console.log(validParenthesis('([)]')); // false
// console.log(validParenthesis('{[]})'));   // true

console.log(test('{()}[]')); // true
// console.log(validParenthesis('([)]')); // false
// console.log(validParenthesis('{[]})'));   // true

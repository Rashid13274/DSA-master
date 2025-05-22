/* Problem: Expression contain redudant bracket or not .

Description: Given a string  of balanced expression, find it it contains redundant parenthesis or not.
A set of parenthesis  are redundant if the same surrounded by unnecessary or multiple brackets,
Print "yes" if redundant or "no".

Note: Expression may contain '+', '*', '-' and '/'. Given expression is valid and there are white spaces present.
*/

function checkRedundantBrackets(expr) {
    // Create a stack to store characters
    const stack = [];
    
    // Loop through each character in expression
    for (let char of expr) {
        // Skip white spaces
        if (char === ' ') continue;
        
        // If current character is not ')', push it to stack
        if (char !== ')') {
            stack.push(char);
            continue;
        }
        
        // If current character is ')'
        let operatorFound = false;
        
        // Pop characters from stack until matching '(' is found
        while (stack.length > 0 && stack[stack.length - 1] !== '(') {
            // If we find any operator between brackets
            if ("+-*/".includes(stack[stack.length - 1])) {
                operatorFound = true;
            }
            stack.pop();
        }
        
        // Remove the opening bracket
        stack.pop();
        
        // If no operator was found, then brackets are redundant
        if (!operatorFound) {
            return "yes";
        }
    }
    
    return "no";
}

// Test cases
console.log(checkRedundantBrackets("((a+b))")); // Output: "yes"
console.log(checkRedundantBrackets("(a+b)")); // Output: "no"
console.log(checkRedundantBrackets("((a+b)+c)")); // Output: "no"
console.log(checkRedundantBrackets("(a+b*(c-d))")); // Output: "no"
console.log(checkRedundantBrackets("((a+b)+(c+d))")); // Output: "no"
console.log(checkRedundantBrackets("(((a+b))+c)")); // Output: "yes"
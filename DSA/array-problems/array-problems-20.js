/* 
Problem: Sum oF Squire Numbers:-
Given  a non-negative integer c, decide whether there're two integers a and b such a^ + b^ = c. (^ -> squire)

Ex:
Input: c = 5;
output true.
Explanation:  1 * 1  + 2 * 2  = 5.
*/

/* 
a^ + b^ > c means we need to decrese the value of b. 
if it is less than c then  we need to increase the value of  a.

1^ + 2^ = 5. return true.

### Optimization
The value of end doesn't need to start at c. Instead, it should start at the square root of c,
since any number squared that is greater than c would exceed the sum you're trying to find.
*/

function sumOfSquireNumbers(c){
        let start = 0;
        let end = Math.floor(Math.sqrt(c)); // Start at the square root of c
        while (start <= end) {
            let target = start * start + end * end; // Avoid using Math.pow for performance
            if (target === c) {
                return true;
            } else if (target > c) {
                end--; // Decrease the larger number
            } else {
                start++; // Increase the smaller number
            }
        }
        return false;
    };
    



const num = 6;
// console.log(sumOfSquireNumbers(num));/
console.log(test(num));

// console.log(Math.pow(3, 2));
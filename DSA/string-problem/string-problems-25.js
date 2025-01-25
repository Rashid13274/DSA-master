/* 
Problem: String to Integer (atoi),

Description: 
Implemenet the my atoi (string s) function , which convert  a string 32-bit  signed integer.
1. Read and ingnore  any leading  whitespace.

2. Check if the next  chatacter (if not  already at end of string ) is '-' or '+', Read the charcter in if
   it is either . This determines if the final result is negative  or positive respectively. Assume  the result
   is positive  if neither is present.

3. Read the next character until the next  non-digit character or end of the  input is reached. the rest of 
    the string  is ignored.

4. Convert these digit  into an integer (i.e "123" --> 123 or "0032" --> 32). if no digit were read, then
    integer  is 0. Change the sign  as necessary  ( from step 2).

5. IF the integer is out of  32-bit  signed integer range [-2^31, 2^31 -1], then clamp the integer so it remains
    in range.

6. Return the integer as final result.

Explantion: 
"42" --> 42
"  -42" --> -42
"4193akdjd" ---> 4193
"abcdxyx724" --> 0 (non digit shold not be at the begining.)
"-93783749678373...." --> <INT_MAX.
 */

function atoi(str) {
    if (str.length === 0) return 0;
    let s = str.trim(); // Trim leading and trailing whitespaces
    let i = 0;
    let sign = 1;
    let ans = 0;

    // Handle the sign
    if (s[i] === '-' || s[i] === '+') {
        sign = s[i] === '-' ? -1 : 1;
        i++; // Move to the next character
    }

    // Iterate through the numeric part
    while (i < s.length) {
        if (s[i] < '0' || s[i] > '9') {
            break; // Stop if the character is not a digit
        }

        ans = ans * 10 + (s[i] - '0'); // Convert char to number
        i++;
    }

    return ans * sign;
}

// Example Usage
const str = "  -42";
// console.log(atoi(str)); // Output: -42

console.log(test(str));

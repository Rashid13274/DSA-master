/* Problems: ROMAN TO Integar
Given a roman numeral, write a code to convert then into an integar value.

Symbol               value
I                     1
V                     5
X                    10
L                    50                  
C                   100
D                   500
M                   1000

Roman numerals are represented by seven  different letters (I, V X,
L,C D M).

EX: 1
Input: II 
Output: 2

Ex: 2
Input: XI
Output: 11

Ex: 3
Input: VI
Output: 6

Note : Input is guaranteed to be within range from 1 to 3999.

Description: Before solving the problems let's understand few points.
Roman numerals ae usually written largest to smallest from left to right.
For example - XII(12), VII(7), LVII(57) etc.

However, the numerals for four is not IIII, instead the number four is written
as IV.

There is six instance where substraction is used :
I can  be placed before  V (5)  and X (10) to make 4 and 9.
X can be placed before  L (50)  and C (100) to make 40 and 90.
C can be placed before  D (500)  and M (1000) to make 400 and 900.

*/
function romanToInteger(str) {
    // If the string is null or empty, return 0
    if (str == null || str.length === 0) {
        return 0;
    }

//     // Map to store Roman numerals and their corresponding values
        map.set('I', 1);
        map.set('V', 5);
        map.set('X', 10);
        map.set('L', 50);
        map.set('C', 100);
        map.set('D', 500);
        map.set('M', 1000);

    // Function to check for invalid repeating patterns
    function isValidRoman(str) {
        const invalidPatterns = [
            /IIII/,    // I cannot repeat 4 times
            /VV/,      // V cannot repeat
            /XXXX/,    // X cannot repeat 4 times
            /LL/,      // L cannot repeat
            /CCCC/,    // C cannot repeat 4 times
            /DD/,      // D cannot repeat
            /MMMM/     // M cannot repeat 4 times
        ];

        

        for (let pattern of invalidPatterns) {
            if (pattern.test(str)) {
                return false;
            }
        }
        return true;
    }

    // Check if the Roman numeral string is valid
    if (!isValidRoman(str)) {
        return "Invalid Roman numeral";
    }

    let result = 0;

    // Loop through the string and convert Roman numerals to integer
    for (let i = 0; i < str.length - 1; i++) {
        let currChar = str.charAt(i);
        let nextChar = str.charAt(i + 1);

        if (map.get(currChar) >= map.get(nextChar)) {
            result += map.get(currChar);
        } else {
            result -= map.get(currChar);
        }
    }

    // Add the last character value to the result
    result += map.get(str.charAt(str.length - 1));

    return result;
}


// Example usage:
// console.log(romanToInteger('XII'));    // Output: 12
// console.log(romanToInteger('XI'));     // Output: 11
// console.log(romanToInteger('VI'));     // Output: 6

// console.log(romanToInteger('IIII'));   // Output: Invalid Roman numeral





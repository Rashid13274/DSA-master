/* Check if first string is subsequence od second string.

Given a string str1 and  str2, check if str1 is subsequence of str2.

what is subsequence ?
A subsequence of string is a new string which is formed from the orignal string by deleting some(can be none)
of the characters without changing the order of the remaining characters.

for example:- 
if a string is "abcdef" then "bc" is valid sequence while "ca" is not.

ex: 1 
str1 = "abe", str2 = "abcdefgh"
return true;
*/

function validSubsequence(str1, str2){
    let i = 0;
    let j = 0;
    while (i < str2.length) {
        let char = str2.charAt(i);
        if (char == str1.charAt(j)) {
            j++;
        }

        if (j == str1.length) {
            return true;
        }
        i++;
    }
    return false;
}



let str1 = "abe", str2 = "abcdef";

console.log(test(str1, str2));
// console.log(validSubsequence(str1, str2));

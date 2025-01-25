/* Problem: Lenght of Last Word

Description: Given a string s consist of upper/lower-case alphabets
and empty space characters '', return  the length of last word
(last word means  the last appearing word if we loop from left
to right) in the string.

if the last word does'nt exist, return 0.
Note: A word is defined as a maximum substring consisting of 
non-space character only.

Ex: 
Input: "Hello World"
Output: 5.
 */

function lastWordLength(s){
    let trimmedString  = s.trim(' ');
    
    if(trimmedString.length == 0){
        return 0;
    }
    let strArr = trimmedString.split(' ');
    return strArr[strArr.length -1].length;

}


// let s = "Hello World";
let s = "apple ball cat ";
// console.log(test(s));
// console.log(lastWordLength(s));

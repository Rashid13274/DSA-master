/* 
Problem: Largest Odd Number in String
You're given  a string num, representing a large  integer, Return the largest-valued odd integer (as a string)
 that is non-empty substring of num, or on a empty string "", if no odd string exist.

 A substring is contigeous sequence of string of characters within a string.

 Ex: Input: num = "52"
 Output: "5"
 Explanation: the only non empty  substring are "5", "2" and "52". "5" is only odd number.
*/

/* Hint:
Input: "35427"
the possible substring can be,
  "427",
  "35", 
  "5432",
  "27"
  "35427" is also itself a substring.
 */

function largestOddNumber(num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if ((num[i] - "0") % 2 != 0) {
      return num.substr(0, i + 1); // i+1 : it excludes  +1. so upto i will work.
    }
  }
  return "";
}

// // const num = "35427";
function test(num){
  for(let i = num.length; i>= 0; i--){
    if((num[i] - "0") % 2 !== 0){
      return  num.substr(0, i + 1);
    }
  }
}


// function test(str){
//   for(let i = str.length -1; i>= 0; i--){
//     if((str[i] - "0") % 2 != 0){
//       return str.substr(0, i + 1);
//     }
//   }
//   return '';
// }

// const num = "52";
const num = "35427";
// const num = "2468";
console.log(test(num));

// const num = "522";
// console.log(largestOddNumber(num));   
// console.log(test(num));   




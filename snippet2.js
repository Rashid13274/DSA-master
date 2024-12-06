// ==============================coding problems ====================================//
//  reverse the array.
let arr = [10,20,30, 40, 52];
let reversedArr = [];
let n = arr.length;
let j = n;
for(let i=0; i<n; i++){
 reversedArr[j-1] = arr[i];
 j = j-1;
 
}
// console.log(reversedArr);
//  arr.reverse();
// console.log(arr);

// ===============================================================================//
// reverse the string 
let str = 'apple';
let reverseString = '';
for(let i=str.length-1; i>=0; i--){
 reverseString += str.charAt(i);
}
 // console.log(reverseString);

// ================================================================================//
// reverse the string word by word
// input : "blue is sky"
// output:"sky is blue"

function reverseWords(input){
 // split the input string  by space  to get an array of words.
 let splitWords = input.split(' ');
 // reverse the array of words 
 splitWords.reverse();
 // join the reversed array back into a single string with space.
 let ans = splitWords.join(" ");
  return ans;
}
// console.log(reverseWords("sky is blue"));

// =======================================================================================//
// count Occurance of character.
function countCharOccurance(str, key){
 let count =0;
 let splitString = str.split('');
 let ans = splitString.forEach((element)=>{
  if(element == key){
   count++;
   
  }
  
 })
 return count;
 
}
// console.log(countCharOccurance(('aplenlebe', 'e'));

// =====================================================================================//
 //  contains dulicate and remove 
function removeDuplicate(dArr){
 let uniqueElement = new Set();
 for(let element of dArr ){
  uniqueElement.add(element);
 }
 //  convert the set back to array.
 let uniqueArray = [...uniqueElement];
 return uniqueArray;
}
let dArr= [2,3,4,4,5,5,6,7,8,9]
// console.log(removeDuplicate(dArr));

// =====================================================================================//

// palindrome
function palindrome(str){
 let start =0;
 let end = str.length-1;
 let isPlindrome = true;
 while(start< end){
  if(str.charAt(start)!==str.charAt(end)){
   isPlindrome = false;
   break;
  }
 }
 return isPlindrome;
}
console.log(palindrome('racecar'));

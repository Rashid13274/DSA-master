/* Find First Unique Character in the String.

Given an Input string write code  to find first non-repeating or unique
character in it and retrun it's Index.
If it does'nt exist then return -1;

Ex: 
Input: 'character
Output: 1 (since h index is 1)

Ex: 
Input: 'calculate'
Output: 4 (u is first non repeating character) 
*/

function uniqueCharacter(str){
    let map = new Map();
    //  first store the value in map 
    for(let element of str){
        if(map.has(element)){
            map.set(element, map.get(element) + 1);
        }
        else {
            map.set(element, 1);
        }
    }
// second iteration for check first unique charactor
    for(let i = 0; i<str.length; i++){
        let element = str.charAt(i);
        if(map.get(element) == 1){
            return i;
        }
    }
    return - 1;

}
// console.log(uniqueCharacter('calculate'));
// console.log(uniqueCharacter('character'));




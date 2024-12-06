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
    

    
    let index = 0;
    let map  =  new Map();
    let arr = str.split('');

    for (const element of arr) {
        if (map.get(element)) {
            map.set(element, map.get(element) + 1);
        }
        else {
            map.set(element, 1);
        }
    }

    for(let j =0; j<str.length; j++){
        let ch = str.charAt(j);
        let count = map.get(ch);
        if(count == 1){
            return j;
        }
    }
    return -1;

}

// console.log(uniqueCharacter('calculate'));


/* Find first Non Repeating character in a string.

Given an input string, find first non-repeating character in a string.

Ex:1
Input: 'java'
OutPut: 'j'.

Input: 'webrewrite'
Output: 'b'
 */

//  In HashMap order is maintained.

function nonRepeatingCharacter(str){
    let map = new Map();
    let arr = str.split('');

    for(const element of arr){
        if(map.get(element)){
            map.set(element, map.get(element) + 1);
        } 
        else {
            map.set(element, 1);
        }

    }

    for(const [key, value] of map){
        if(value == 1){
            return key;
        }
    }

    return -1;
}

// console.log(nonRepeatingCharacter('java'));
// console.log(nonRepeatingCharacter('webrewrite'));


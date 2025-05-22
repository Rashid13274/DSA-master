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
    for(const element of str){
        if(map.get(element) == 1){
            return element;
        }
    }

    return 'non unique charactor found !';
}

function test(s){
    let map = new Map();
    for(const element of s){
        if(map.has(element)){
            map.set(element, map.get(element) + 1);
        }
        else{
            map.set(element, 1);
        }
    }

    for(let i  = 0; i<s.length; i++){
        let char = s.charAt(i);
        if(map.has(char) && map.get(char) == 1){
            return char;
        } 
    }
    return false;
}

// console.log(nonRepeatingCharacter('java'));
// console.log(nonRepeatingCharacter('webrewrite'));

// console.log(test('javaj'));
// console.log(test('webrewrite'));


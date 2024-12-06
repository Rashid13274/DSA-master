/* # Problem:  Jewels  and Stones
Descriptions: 
Given two string J and S 
J - represents the type of stones that are jewels.
S - represents the stones you have.

Each character in S  is a type of stone you have.
You have  to know how many of  the stones you have are jewels.

The letters in J are guaranteed distinct, and all characters in J and S
are letters.
Letters are case sensative, so "a" is considered a different type of stone
from "A".

Ex: 1
Input: j = 'aA', s = 'aAAbbbb'
Output: 3

Ex: 2
Input:  j = 'z', s = 'ZZ'
Output: 0

Note: S AND  J  will consist of letters and have length at most 50.
The characters in J are distincts.
 */

// Using HashMap.
function countNumberOfJewels(j, s){
    let map = new Map();

    let strArr = s.split('');

    for (const element of strArr) {

        if (map.has(element)) {
            map.set(element, map.get(element) + 1);
        }
        else {
            map.set(element, 1);
        }
    }

    let count = 0;

    for (let i = 0; i < j.length; i++) {
        let jewel = j.charAt(i);

        if (map.has(jewel)) {

            count += map.get(jewel);
        }
    }
    return count;

}

function test(j, s){
    let jewelCount = 0;
    let map = new Map();
    const sArr = s.split('');
    for(const element of sArr){
        if(map.has(element)){
            map.set(element, map.get(element) + 1);
        }
        else{
            map.set(element, 1);
        }
    }
    let i = 0; 
    while(i < j.length){
        let char = j.charAt(i);
        if(map.has(char)){
            jewelCount += map.get(char);
            i++;
        }

    }
    return jewelCount;
}

let j = 'aA', s = 'aAAbbbb';
console.log(test(j, s));
// let j=  'z', s = 'ZZ'
// console.log(countNumberOfJewels(j, s));

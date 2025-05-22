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
function countNumberOfJewels(jewels, stones){
    let count = 0;
    // first  store the stones in map
    const map = new Map();
    for(const element of stones){
        if(map.has(element)){
            map.set(element, map.get(element) + 1);;
        }
        else{
            map.set(element, 1);
        }
    }
    //  compre and count jewels can be formed from the stones
    for(const element of jewels){
        if(map.has(element)){
            count += map.get(element);
        }
    }
    return count; 
}



// let j = 'aA', s = 'aAAbbbb'; // 3
// console.log(test(j, s));

let j=  'z', s = 'ZZ'
console.log(test(j, s));


// console.log(countNumberOfJewels(j, s));

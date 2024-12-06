/* Problem: Ransom Note

# Description:
Given an arbitrary ransom note string and another string containing
letters from all the magzines, write a function that will return
true if the ransom note can costructed from the magzines, otherwise,
it will return false.
Each letter in the magzines can only be used once in your  ransom
note.

Note: 
You may assume that both strings contain only lowercase letters.

Ex:1
Input: ransomNote = 'a' magzine = 'b'
Output: canConstruct('a', 'b') : false

Ex:2
Input: ransomNote = 'aa', magzine = 'ab'
Output: canConstruct('aa', 'ab'): false

Ex: 3
Input: ransomNote = 'aa', magzine  = 'aab'
Output: canConstruct('aa', 'aab'): true

*/

// 1. Using Hashmap
function canConstruct(ransomNote, magazine) {
    let map = new Map();

    // Fill the map with characters from the magazine
    for (let i = 0; i < magazine.length; i++) {
        let char = magazine.charAt(i);
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    // Check if the ransom note can be constructed
    for (let j = 0; j < ransomNote.length; j++) {
        let char = ransomNote.charAt(j);

        if (!map.has(char) || map.get(char) <= 0) {
            return false;
        }
        map.set(char, map.get(char) - 1);
    }
    return true;
}



// // console.log(canConstruct('a', 'b'));    // Output: false
// console.log(canConstruct('aa', 'ab'));   // Output: false
// console.log(canConstruct('aa', 'aab'));  // Output: true



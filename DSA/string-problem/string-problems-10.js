/* Given an array of strings, group anagram together.
Input: ['eat', 'tea', 'ton', 'ate', 'not', 'bat'];
Output: 
[
['ate', 'eat', 'tea']
['nat', 'tan']
['bat']
]
*/



function group_anagram(arr){
    const map = new Map();
    for(const element of arr){
        let sortedWord = element.split('').sort().join('');
        if(map.has(sortedWord)){
            map.get(sortedWord).push(element);
        }else{
            map.set(sortedWord, [element]);
        }
    }

    return Array.from(map.values());
}

// groupAnagram(['eat', 'tea', 'ton', 'ate', 'not', 'bat']);
// console.log(test(['eat', 'tea', 'ton', 'ate', 'not', 'bat']));
// console.log(groupAnagram(['eat', 'tea', 'ton', 'ate', 'not', 'bat']));



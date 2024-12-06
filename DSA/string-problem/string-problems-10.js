/* Given an array of strings, group anagram together.
Input: ['eat', 'tea', 'ton', 'ate', 'not', 'bat'];
Output: 
[
['ate', 'eat', 'tea']
['nat', 'tan']
['bat']
]

*/



function groupAnagram(arr){
    let map = new Map();

    for (const element of arr) {
        let word = element.split('');
        word.sort();
        // console.log(word);

        let key = word.join('');

        if (map.has(key)) {
            map.get(key).push(element);
        }
        else {
            map.set(key, [element]);
        }
    }
    return Array.from(map.values());
    
}

// groupAnagram(['eat', 'tea', 'ton', 'ate', 'not', 'bat']);


// console.log(test(['eat', 'tea', 'ton', 'ate', 'not', 'bat']));

// console.log(groupAnagram(['eat', 'tea', 'ton', 'ate', 'not', 'bat']));



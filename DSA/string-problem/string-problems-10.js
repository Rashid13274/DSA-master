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

    for(const element of arr){
        let key =  element.split('').sort().join();
        if(map.has(key)){
            map.get(key).push(element);
        }
        else{
            map.set(key, [element]);
        }
    }
    
    return Array.from(map.values());
}

function test(arr){
    
}


// console.log(test(['eat', 'tea', 'ton', 'ate', 'not', 'bat']));


// groupAnagram(['eat', 'tea', 'ton', 'ate', 'not', 'bat']);
// console.log(test(['eat', 'tea', 'ton', 'ate', 'not', 'bat']));
// console.log(groupAnagram(['eat', 'tea', 'ton', 'ate', 'not', 'bat']));



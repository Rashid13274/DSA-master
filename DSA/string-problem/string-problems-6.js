/* FIND DUPLICATE CHARACTERS IN STRING.
Ex:1 
Input: str = 'java' 
Output: duplicate character = a;

Ex:2
Input: str = 'programming'
Output: duplicate character = r,m g;

 */

// 1. using hashmap

function findDupliate(str){
    let map = new Map();

    let arr = str.split('');

    for(const element of arr){
        if(map.get(element)){
            map.set(element, map.get(element)+ 1);
        }
        else {
            map.set(element, 1);
        }
    } 
    
    // for(const [key, value] of map){
    //     if(value >=2 ){
    //         console.log(key + ' ') 
    //     }

    // }
    console.log(map);
}


// findDupliate('java');
// findDupliate('programming');

// 2. Using Set.
//  traverse a loop and check if element contains in set 
// if yes then just print that element or store it.


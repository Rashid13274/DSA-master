/* *******************************************************************
Find non repeating elemeent in array where every element is repeated 
twice.
arr = [5,4,3,4,1,5,3];
 **********************************************************************/

// 1. using naive approach:-
/*  
function nonRepeatingElement(arr){
    let repeatedElement = null;
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        repeatedElement = arr[i];
        for(let j = 0; j<arr.length; j++){
            if(arr[i] == arr[j]){
                count++;
            }
        }
        if(count == 2){
            count  = 0;
        } else {
            break;
        }
    }
    return repeatedElement;
}
console.log(nonRepeatingElement([5, 4, 3, 4, 1, 5, 3]));
*/



// 2. Using Hash Map.
/* 
function nonRepeatingElement(arr){
    let map  = new Map();
    let element = null;
    for(const element of arr){
        if(map.get(element)){
            map.set(element, map.get(element) + 1);
        }
        map.set(element, 1);
        // console.log(map.get(element));
    }

    map.forEach((key, val) =>{
        if(val === 1){
            element = key;
        }
    })
    return element;
}
console.log(nonRepeatingElement([5, 4, 3, 4, 1, 5, 3]));
*/



//  3. Using XOR operation:-
/* 
function nonRepeatingElement(arr){
    let res = 0;
    for(let i = 0; i<arr.length; i++){
        res = res ^ arr[i];
    }
    return res;
}

console.log(nonRepeatingElement([5, 4, 1, 4, 1, 5, 3]));
*/



//============= Hash-Map In Javscript ==================================//
// let map = new Map();
//  Set the key-value in Map
// map.set('a',1);
// map.set('b',2);
// map.set('c',3);
// map.set('d',4);
// map.set('e',5);


//  Get the Value of Key
// let val  = map.get('a');

// Check Key Exist  in Map 
// let exist = map.has('b');

//  Remove the Key from Map. it deletes and return true.
// map.delete('a');

// Check the Size of Hash Map, size is property not method.
// console.log(map.size);

//  Iterator using for-each loop.

// map.forEach((key,val) =>{
//     console.log(`key ${key} : value ${val}`);
// })

// ==================================================================//



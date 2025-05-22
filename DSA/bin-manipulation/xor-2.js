/* 
Find Two non repeating element in an array where every element 
repeated twice.
*/
// 1. Using xor method 

/* 

function twoNonRepeatingElement(arr){
    let oddNonRepeatingElement = 0;
    let evenNonRepeatingElement = 0;

    // divide the array in odd and even part.
    for(let i =0; i<arr.length; i++){
        if((arr[i] & 1) == 0){
            evenNonRepeatingElement  ^= arr[i];
        }

        if ((arr[i] & 1) == 1) {
            oddNonRepeatingElement ^= arr[i];
        }
        
    }
    return { 
        oddNonRepeatingElement,
        evenNonRepeatingElement
    }
}
*/
// console.log(twoNonRepeatingElement(arr));

//  2. Using Hash Map.

function twoNonRepeatingElement(arr) {
    let map = new Map();
    let nonRepeatingElements = [];

    for (const element of arr) {
        if (map.get(element)) {
            map.set(element, map.get(element) + 1);
        } else {
            map.set(element, 1);
        }
    }

    map.forEach((val, key) => {
        if (val === 1) {
            nonRepeatingElements.push(key);
        }
    });

    if (nonRepeatingElements.length === 2) {
        return nonRepeatingElements;
    } else {
        return "There are not exactly two non-repeating elements.";
    }
}


let arr = [5, 4, 1, 4, 3, 5, 1, 2];

// console.log(twoNonRepeatingElement(arr)); // Output should be [3, 2]

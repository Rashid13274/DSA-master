/*  Find a common elements in three sorted arrays.
Input:
arr1 = [1,5,10,20,40,80];
arr2 = [6,7,20,80,100];
arr3 = [3,4,15, 20, 30,70, 80, 120];
 */

function commonElement(arr1,arr2,arr3){
    let map = new Map();
    let k =0; 
    let j = 0;
    for(let i = 0; i<arr3.length; i++ ){
        if(map.has(arr3[i])){
            map.set(arr3[i], map.get(arr3[i]) + 1);
        }
        else{
            map.set(arr3[i], 1);
        }

        if(j < arr1.length){
            if (map.has(arr1[j])) {
                map.set(arr1[j], map.get(arr1[j]) + 1);
            }
            else {
                map.set(arr1[j], 1);
            }
        }

        if (k < arr2.length) {
            if (map.has(arr2[k])) {
                map.set(arr2[k], map.get(arr2[k]) + 1);
            }
            else {
                map.set(arr2[k], 1);
            }
        }
    
        j++;
        k++;
    }

    let result = [];
    for(const [key, value] of map){
        if(value == 3 ){
            result.push(key);
        }
    }
    return result;
    
}

let arr1 = [1, 5, 10, 20, 40, 80], arr2 = [6, 7, 20, 80, 100], arr3 = [3, 4, 15, 20, 30, 70, 80, 120];
console.log(commonElement(arr1, arr2, arr3));

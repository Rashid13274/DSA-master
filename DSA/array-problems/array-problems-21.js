/* given in array move the all zero (0) at the begining of array and  1 at the end of array.
arr = [1,0,1,0,1,0,0,0];
res = [0,0,0,0,0,1,1,1];
 */

// based on parity problems: 
function moveZeroAndOne(arr){
    let j = 0; 
    for(let i =0; i<arr.length; i++){
        if(arr[i] === 0){
            if(i !== j){
                swap(arr, i, j);
            }
            j++; // move the even or zero pointer.
        }
    }
    return arr;
}


const arr = [1,0,1,0,1,0,0,0];
// console.log(moveZeroAndOne(arr));
console.log(test(arr));



/*
Problem: Rotate an array of n elements to the right by k steps.For example, with n
= 7 and k = 3, 
Input: arr = [1, 2, 3, 4, 5, 6, 7] 
Output: [5, 6, 7, 1, 2, 3, 4]. 
k = 3
*/

function rotate(arr, k){
    // let result = new Array(arr.length).fill(0);
    let result = [];

    // rotate last three element in array.
    for(let i = 0; i<k; i++){
        result[i] = arr[arr.length - k + i];
    }

    // rotate remainging element in array.
    let j = 0;
    for(let i = k; i<arr.length; i++){
        result[i] = arr[j];
        j++;
    }
    
    // return result;
    console.log(result);
}



let arr = [1, 2, 3, 4, 5, 6, 7] , k = 3;
console.log(test(arr,k));




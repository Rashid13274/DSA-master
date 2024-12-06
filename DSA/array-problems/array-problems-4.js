/* Find Second Smallest Number in an array.
arr = [-1,7,1,34,18];

Mathod: Traverse an array and keep two flag smallest and second smallest.
The Time Complexcity of this approach is  O(n).
 */

function secondSmallest(arr){
    let firstSmallest  = Number.MAX_SAFE_INTEGER;
    let secSmallest = Number.MAX_SAFE_INTEGER;;

    for(let i =0; i<arr.length; i++){
        if(arr[i] < firstSmallest){
            firstSmallest = arr[i];
        }
        if(arr[i] >  firstSmallest  && arr[i] < secSmallest){
            secSmallest  = arr[i];
        }
    }
    return { firstSmallest, secSmallest};
}


let arr = [-1, 7, 1, 34, 18];
// console.log(secondSmallest(arr));
console.log(test(arr));


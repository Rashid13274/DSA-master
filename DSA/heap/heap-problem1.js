/* Find Kth smallest/largest element from array.

Approach: 
1. Using sorting -> nlog(n)
2. Using Heap ->  nlog(k)
*/

// Using sorting
function findKthLargestElement1(arr,k){
    const sortedArr = arr.sort((a,b) => a -b); // ascending order.
    return sortedArr[k];

}
let arr = [2, 10, 4, 3, 20, 15];
k = 4;
// console.log(findKthLargestElement1(arr, k));

// Using Heap 
function findKthLargestElement2(arr,k){
    let minELement = Number.MAX_SAFE_INTEGER;
    let heap = [];
    for(let i = 0; i<arr.length; i++){
        // while()
        
    }
}
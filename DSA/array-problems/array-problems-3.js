/* Find Pairs with given sum i a sorted Array
Given an array A of size N.
we need to find all pairs in the array that sum to a number equal to k.
If no such pair exists then output will  -1.

Array element are distinct and in sorted order.

for ex:

Input: arr = [1,2,3,4,5,6,7];
sum = 9;
Output: 
[2,7], [3,6], [4,5]
*/

function findPair(arr, sum){
    let i = 0;
    let j = arr.length -1;
    let res = [];

    while(i < j){
        if(arr[i] + arr[j] == sum){
            res.push([arr[i], arr[j]]);
            j--;
        }
        i++;
    }
    return res;

}







let arr = [1, 2, 3, 4, 5, 6, 7];
let sum = 9;

// console.log(findPair(arr,sum));
console.log(test(arr, sum));



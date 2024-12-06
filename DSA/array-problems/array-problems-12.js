/* Problem: Two Sum Closet Pair.

Find the pair / element whose sum is closet to target element in a sorted array.
Input: [1,2,5,8, 9, 14], target = 12;
Output: [1,4]
 */

function two_sum_closet_pair(arr, target){
    let start = 0;
    let end = arr.length-1;
    let diff = Number.MAX_SAFE_INTEGER;
    let result = [];
    let firstIndex =  -1;
    let secondIndex = -1;
    while(start <= end){
        let currentSum = arr[start] + arr[end];  
        if(Math.abs(currentSum - target) < diff){
            firstIndex = start;
            secondIndex = end;
            diff = Math.abs(currentSum - target);
            //  MinM the difference greater the chances for closet to target element.
        }

        else if(currentSum - target > 0){
            end--;
        }
        else{
            start++;
        }
    }
    result.push(firstIndex, secondIndex);
    return result;
}



let arr = [1, 2, 5, 8, 9, 14], target = 12;
// console.log(two_sum_closet_pair(arr, target));  // output: [1,4]
console.log(test(arr, target));  // output: [1,4]


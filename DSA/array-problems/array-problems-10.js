/* problem: Two Sum
 Given an array of integers, find two numbers such that they add up to a specific target
 number.
 The function twoSum should return indices of the two numbers such that they add
 upto the target, where index1 must be less than index2. Please note that your returned
 answers (both index1 and index2) are not zero-based.
 For example:
 Input: numbers={2, 7, 11, 15}, target=9
 Output: index1=1, index2=2 

*/

function twoSum(arr, sum ){
    let map = new Map();

    for(let  i = 0; i<arr.length; i++){
        const complement = sum - arr[i]; // 9 - 2 = 7;
        if(map.has(complement)){
            return [map.get(complement), i];
        }
        else {
            map.set(arr[i], i);
        }
    }
    return [];
}



const arr = [2,7,11,15] , sum = 9;
// console.log(twoSum(arr, sum));
// console.log(test(arr, sum))
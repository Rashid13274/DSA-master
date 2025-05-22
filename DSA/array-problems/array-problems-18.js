/* 
Two sum II : Input Array Is Sorted
Given a 1-indexed array of integars number, that is already sorted in non-decreasing order. find two  number
such that they add upto a specific target number, let these two numbers be  number[index1] number[index2]
where  1 <=  index1 < index2 <= numbers.length;

return the indices of  the two numbers, index1,and index2 added by one as an integar array [index1] of 
length 2.
the test is generated such that there is exactly one solution. you may not  use the same element twice.


ex: 
Input: numbers = [2,7,11,15], target = 9.
Ouput: [1,2];
Explanation: The sum of 2 and 7 is 9, therefore index1 = 1, index2 = 2 we return [1, 2]
*/
function twoSumII(arr, target){
    let start = 0;
    let end = arr.length -1;
    while(start <= end){
        let sum  = arr[start] + arr[end];
        if(target == sum){
            return [start+1, end+1];
        }
        else if(sum > target){
            end--;
        }
        else{
            start++;
        }
    }
}
const numbers = [2,7,11,15], target = 9;
// console.log(twoSumII(numbers, target));

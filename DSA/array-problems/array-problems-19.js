/* Problem : Sort Array By Parity.
Given an array arr, move all the even integers at the begining of the array followed by all the odd integers.
Return any array that satisfies this condition.
order does'nt matter.

ex:
input: arr = [3,1,2,4];
output: [2,4,3,1];
explanation: the output [4, 2,3,1] [2,4,1,3] and [4,2,1,3] would also be accepted

*/

function sortArrayByParity(nums){
    if (nums.length === 1) return nums; // If only one element, return it as is.

    let j = 0; // Pointer for even numbers
    for (let i = 0; i < nums.length; i++) {
        // Check if the current number is even
        if (nums[i] % 2 === 0) {
            if (i !== j) { // Avoid unnecessary swapping when i and j are the same
                swap(nums, i, j); 
            }
            j++; // Move the even pointer forward
        }
    }
// const arr = [2,1,0]
    function swap(nums, i, j){
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    return nums;
}


function test(nums){
    let j = nums.length -1;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] % 2 == 0){
            if( i !== j){
                swap(arr, i, j);
            }
            j++;

        }
    
    }
    function swap(nums, i, j){
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    return nums;

}



// const arr = [3,1,2,4];
const arr = [2,1,0]
console.log(sortArrayByParity(arr));
// console.log(test(arr));

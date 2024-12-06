//  find the missing number.

function findMissingNumber(arr){
	let n = arr.length + 1;
	const sum_of_n_number = Math.floor((n * (n + 1)) / 2);
	let sum = 0;
	for(let i = 0; i<arr.length; i++){
		sum += arr[i];
	}

	const missingNumber = sum_of_n_number  -  sum;
	return missingNumber;


}

const arr = [1,2,5,4,6,8,7];
console.log(findMissingNumber(arr));
/* 
YOU HAVE GIVEN AN ARRAY THAT IS SORTED AND THEN ROTATED.
FOR eg. arr = [1,2,3,4,5]  WHICH IS SORTED AND NOW IT IS BEING ROTATED
BY TWICE TO RIGHT  [4,5,1,2,3];

WE HAVE TO FIND OUT  HOW MANY TIMES THIS SORTED ARRAY ROTATED.

ANS => INDEX OF MINIMUM ELEMENT IN ROTATED ARRAY WILL BE NUMBER
OF TIMES ARRAY WAS ROTATED.

arr[prev] > arr[mid] <arr[next] return mid.
*/

function numberOfRotation(arr){
    let start = 0;
    let end = arr.length - 1;
    let n = arr.length
    while (start <= end){
        let mid = Math.floor(start + (end - start)/2);
        let prev = Math.floor((mid + 1) % n);
        let next = Math.floor((mid + n -1) % n);
        if(arr[prev] > arr[mid] && arr[next] > arr[mid]){
            return mid;
        }

        // if mid is greater than start, i.e left section is sorted.
        else if(arr[start] <= arr[mid]){
            start  = mid + 1; 
        }

        // if mid is less than end , i.e right section is sorted.
        else if(arr[end] >= arr[mid]){
            end =  mid -1;
        }
    }
    return -1;
}


let arr = [4,5,6,7,8,9,1,2,3];
console.log(numberOfRotation(arr));
/* 
Find the element  in sorted rotated array.
*/
// function findElementInRotatedSortedArray(arr){

// }

function findElementInRotatedSortedArray(arr,start,end,key){
while(start <= end){
    let mid = Math.floor(start + (end - start)/2);
    if(arr[mid] == key){
        return mid;
    }
    // if left half is sorted
    if(arr[start] <= arr[mid]){
        // if the key is present in left half
        if(arr[start] <= key  &&  arr[mid] >= key){
            return findElementInRotatedSortedArray(arr, start, mid -1, key);
        }
        else {
            findElementInRotatedSortedArray(arr,mid +1, end, key );
        }
    }
    // if right half is sorted.
    else if (arr[end] >= arr[mid]){
        // if key is present in right half of the array
        if(arr[mid] <= key && arr[end] >= key){
            findElementInRotatedSortedArray(arr, mid+1,end, key);
        }
        else {
            findElementInRotatedSortedArray(arr, start, mid-1, key);
        }
    }
}
return -1;

}
let arr = [2,3,4,5,6,7,8,9,1];
let start = 0;
end = arr.length - 1;
key  = 7;
// console.log(findElementInRotatedSortedArray(arr,start, end, key));
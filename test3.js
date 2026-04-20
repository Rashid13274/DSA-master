//  write a prgram to remove duplicate from the array:
function dupliate(arr){
    res = []
    isDuplicate = false;
    for(let i = 0; i < arr.length; i++){
        let isDuplicate = false
        for(let j = 0; j<res.length; j++){
            if(res[j] == arr[i]){
                isDuplicate = true
                break;
            }

        }
        if(!isDuplicate){
            res.push(arr[i])
        }
    }
    return res;
}
const arr = [3,4,4,5,6,7,7,8]
console.log(dupliate(arr))
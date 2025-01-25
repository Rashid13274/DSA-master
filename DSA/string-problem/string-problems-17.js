// function sortByFrequency(str){

//     // create a  map.
//     let map = new Map();

//     for (const element of str) {
//         if (map.has(element)) {
//             map.set(element, map.get(element) + 1);
//         }
//         else {
//             map.set(element, 1);
//         }
//     }

//     // convert the map into  an array of [char, frequency] pairs.
//     let frequencyArray = Array.from(map.entries());

//     // sort keys in descending order based on frequency (value).
//     frequencyArray.sort((a, b) => b[1] - a[1]);


//     // build the sorted string
//     let result = '';

//     for (const [key, value] of frequencyArray) {
//         result += key.repeat(value);

//     }
//     return result;

// }


function test(str){
    let  res = '';
    let map = new Map();
    for(const element of str){
        if(map.has(element)){
            map.set(element, map.get(element) + 1);
        } else{
            map.set(element, 1);
        }
    }

    //  convert map in array of object
    const arr = Array.from(map.entries());
    console.log('frequency arr', arr);

    // sort the keys based on the frequencies in desc order
    arr.sort((a,b) => b[1] - a[1]);

    console.log('sorted frequnecy arr', arr);

    for (const [key, value] of arr){
        res += key.repeat(value);
    }
    return res;
}

console.log(test('abckkteee')) // eeekkabct

// console.log(sortByFrequency('abckkteee')) // eeekkabct

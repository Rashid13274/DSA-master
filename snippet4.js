//  using xor opator:-
// SWIPE OF TWO NUMBER WITHOUT USING THIRD VARIABLE.
// function swap() {
//     let a = 3;
//     let b = 4;

//     a = a ^ b;
//     b = a ^ b;
//     a = a ^ b;
//     console.log(a)
//     console.log(b);
// }
// let a = 4;
// let b = 5;
// a = a ^ b;
// b  = a ^ b;
// a = a ^ b;
// // console.log(a,b);

// max repeated element
// max repeated elemet in the array.
// str : aaabbccddaa
function maxRepeation(str) {
    let arr = str.split('');
    // let max = Number.MIN_VALUE;
    let map = new Map();
    for (let i = 0; i< arr.length; i++) {
        if (map.get(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        } else {
            map.set(arr[i], 1);
        }
        

    }
    // for (const [key, value] of map) {
    //     if (value > max) {
    //         max = value;
    //     }
    // }
    return map;
}
console.log(maxRepeation('aaabbccddaa'));
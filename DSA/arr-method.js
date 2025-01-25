let arr  = [1, 2,3, 4, 5, 6];
let  testArr = [10, 20, 30];
let val; 

//  map, filter, sort, forEach, concat, every, includes, some , join, reduce,
// find, findIndex, indexOf, fill, slice, pop, push, shift unshift.

// val = arr.map((element) => element * 2);
// val = arr.filter((elemen) => elemen > 4);
// val  = arr.sort((a,b ) => a - b) // ascending order
// val = arr.sort((a, b) => b - a) // desceding order [ 6, 5, 4, 3, 2, 1 ]
// val = arr.some((element) => element === 6); //  true
// val = arr.forEach((element) => element * 10); // undefined;

// arr.forEach((element) =>{
//     if(element % 2 == 0){
//         console.log(element);
//     }
// })                               // traverse the array  2, 4, 6


// val = arr.concat(...testArr);   // [ 1,  2,  3,  4, 5,6, 10, 20, 30]
// val = arr.every((element) => element % 2 === 0) // false
// val = arr.includes(6); // true;
// val  = arr.join(''); // 123456
// console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]

// val = arr.reduce((total, current) => total + current); // 21
// val  = arr.fill(0); //  [ 0, 0, 0, 0, 0, 0 ]
// val = arr.find((element) => element === 5); // ans: 5 , Returns the value of the first element in the array where predicate is true, and undefined otherwise.
// val = arr.findIndex((element) =>  element === 5); // 4
// val = arr.indexOf(6); //5 returns first occurance of element

// val = arr.slice(0, 4); // @returns element from 0th index to 3th index, excluding 4th index. ans : [ 1, 2, 3, 4 ]
// val = arr.slice(-1) // it will reurn last element,  ans: 6;
// val = arr.slice(1); // starts from 1 index upto length of array.  // [ 2, 3, 4, 5, 6 ]


// Create an Array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// at index 1 remove the element. so here count will be 1.
// val = arr.splice(0, 1);   // [ 1 ]

// At position 2, add "Lemon" and "Kiwi":
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);


arr.unshift(10); // ans: 7,  insert at the start of the array and return length of array.


// console.log(arr);
 val = arr.shift(); //  ans: 10 , item removed from begining.
console.log(val);




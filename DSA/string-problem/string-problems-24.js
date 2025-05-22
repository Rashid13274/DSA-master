/* 
A happy number is defined as a number in which the sum of the squares of its digits eventually 
leads to 1 after repeatedly performing the operation. If it loops endlessly in a cycle and does not
 reach 1, it is considered not happy.

Steps:
Start with a positive integer n.
Replace the number with the sum of the squares of its digits.
Repeat the process until:
The number becomes 1 (it is a happy number), or
It falls into a cycle that does not include 1 (not a happy number).

ex: 19 --> true

Example 2: Check if 2 is a Happy Number
1. 2 : 2^2 = 4
2. 4 : 4^4 = 16
3. 16 : 1^1 + 6^6 = 37
    ---
    ---
    ---
    20: 2^2 + 0 = 4
*/

function happyNumber(n){
    let set = new Set();
    while(n != 1 && !set.has(n)){
        set.add(n);
        n = sumOfSquire(n);
    }
    return n == 1;
}

// function sumOfSquire(val){
//     let sum = 0;
//      while(val > 0){
//          let digit = val % 10;
//          sum += digit * digit;
//          val = Math.floor(val / 10); // Fix: Use Math.floor to truncate decimal part
//      }
//      return sum;
// }

function test(n){
    let set = new Set();

    while(n !== 1 && (!set.has(n)) ){
        set.add(n);
        n  = sumOfSquire(n);
    }

    function sumOfSquire(num){
        let sq = 0;
        while(num > 0){
            let temp =  num % 10;
            sq += temp * temp;
            num = Math.floor(num/10);
        }
        return sq;
    }
     return n === 1 ? 'happy': 'not happy';
}

// const n = 2; // not a happyNumber;
// const n  = 4; // not a happyNumber
// const n = 19; // happy number
// console.log(test(n));

// console.log(happyNumber(n));
// console.log(192939 % 10);



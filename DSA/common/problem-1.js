/* program to check  if number is  prime or not */

function isPrime(num){
    let prime = true;
    if(num === 1) {
        console.log('1 is neither prime nor composite number');
    }
    else if( num > 1){
        for(let i = 2; i<= num/2; i++){
            if(num % i == 0){
                prime = false;
                break;
            }
        }
    }

    if(prime ){
        console.log(`${num} is prime number`);
    }else{
        console.log(`${num} is not prime number`);
    }
}

// console.log(7/2);


// ================================ compare three variable =============================================//

function compare(a, b, c){
    return (a > b && a > c  ? a : (b > a && b > c) ? b : c);
}
// const a = 11;
// const b = 2;
// const c  = 10
// console.log(compare(a, b, c));

// ================================================================================================//

function primeNumber(num){
    let arr = new Array(num + 1).fill(true);
    for(let i = 2; i <=num; i++){
        if(arr[i] == true){
            for(let  j = i * i; j <= num; j+=i){
                arr[j] = false;
                // 4,  
            }
        }
    }
    let res = [];

    for(let i = 2; i<=num; i++){
        if(arr[i] !== false){
            res.push(i);
        }
    }
    return res;
}
// console.log(primeNumber(10));



function fib(num) {
    let a = 0;
    let b = 1;
    let c;

    for(let i = 0; i <= num; i++) {
        console.log(a);
        c = a + b;    // Calculate next number first
        a = b;        // Move b to a
        b = c;        // Set b to the calculated number
    }
}

// Test the function
// fib(10);  // Should print: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55


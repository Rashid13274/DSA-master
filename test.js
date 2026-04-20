// 1. reverse a string 
// 2. check it's palindrome or not
// 3. given number is prime number  or not
// 4. find prime number with some range
// 5. fibanocci series
// 6. strong number.

// function reversetString(s){
//     let reverseStr = '';
//     for(let i =  s.length-1 ; i>= 0; i--){
//         reverseStr += s[i];
//     }
//     return reverseStr;
    
// }
// console.log(reversetString('apple'));

// function palindrome(s){
//     let isPalindrome = true;
//      let j = s.length -1;
//     for(let  i = 0; i<= Math.floor((s.length)/2); i++ ){
//         if(s[i] !== s[j]){
//             isPalindrome = false;
//             break;
//         }
//         j--;
//     }
//     return isPalindrome;
// }
// console.log(palindrome('rajecar'));

// function isPrime(n){
//     if(n < 2) return false;
//     if(n == 2) return true;

//     for(let i = 2; i <=Math.sqrt(n); i++){
//         // console.log(i);
//         if(n % i == 0){
//             return false
//         }
//      }
//      return true;
// }
// console.log(isPrime(11));
// // isPrime(4);

// sieve of erosthemous
// function primeNumber(n){
//     let pArr = new Array(n+1).fill(true);
//     pArr[0] = false;
//     pArr[1] = false;
//     for(let i = 2; i*i <= n; i++){
//         if(pArr[i] == true){
//             for(let j = i * i ;  j<=n; j+=i){
//                 pArr[j] = false;
//             }
//         }
//     }
    
//     for(let i = 0; i <= n; i++){
//         if(pArr[i] == true){
//             console.log(i);
//         }
//     }
//     // return pArr;

// }
// // console.log(primeNumber(10))
// primeNumber(10);

// function extractingArgs(...args){
//     for(let i = 0; i<args.length; i++){
//         console.log(args[i]);
//     }
// }
// extractingArgs(1,3,5,7,11,13);

// function fibanocci(n){
//     let a = 0, b = 1;
//     let c;
//     for(let i = 0; i<n; i++){
//         console.log(a);
//         c = a + b;
//         a = b;
//         b = c;
//     }
// }

// fibanocci(5);

//  recursive function for factorial and fibonacci 

// function recrFactorial(n){
//     if(n === 0) return 1;
//     return n * recrFactorial(n - 1);
// }

// console.log(recrFactorial(5));


// function recrFibonacci(n){
//     if(n < 2) return n;
//     return recrFibonacci(n -1 ) + recrFibonacci(n - 2);
// }

// const n = 5;
// for(let i = 0; i < 5; i++){
//     console.log(recrFibonacci(i));
// }

// spread parameters
// function addFourNumbers(n1,n2, n3,n4){
//     const sum  = n1 + n2 + n3 + n4;
//     console.log(sum);

// }
// const val = [1,2,3,4];
// addFourNumbers(...val); // spread the Array.

//  shallow copy and deep copy 

const obj = {
    name : 'jon',
    address: {
        street: 'st louis', 
        state: 'goa',
        country: 'india'
    }
}

let shallowCopy  = {...obj};
// shallowCopy.name = 'pape';
// shallowCopy.address.state = 'pudducherry';
// console.log(shallowCopy.name);
// console.log(shallowCopy.address.state);
// console.log(obj.name);
// console.log(obj.address.state);

// let deepClone = JSON.parse(JSON.stringify(obj));
// deepClone.name = 'jack';
// deepClone.address.state = 'kerala';
// console.log(obj.name);
// console.log(obj.address.state);
// console.log(deepClone.name);
// console.log(deepClone.address.state);

//  promise
//  function sumOfThreeNumbers(...elements){
//     return new Promise((resolve, reject)  =>{
//         if(elements.length < 3){
//             reject('elements length is less than 2');
//         }
//         else{
//             let sum = 0;
//             let i = 0;
//             while( i <= elements.length){
//                 sum += i;
//                 i++;
//             }
//             resolve(' total sum value is '+  sum);
//         }
//     })
//  }
//  sumOfThreeNumbers(1,23)
//  .then((val) => console.log(val))
//  .catch((err) => console.log(err));

// desctructuring
// const classDetails = {
//     strength : 20,
//     benches : 10,
//     blackboards: 2 
// }
// //  object destructuring
// const { strength: classStrength, benches} = classDetails;
// console.log(classStrength);
// console.log(benches);

//  array destructuring
// const arr = [1,2,3, 4,5];
// const [first, second, third] = arr;
// console.log('first ' + first);
// console.log('third ' + third);


//  Pass by value and pass by reference
// let y = 2;
// let z  = y;
// y = 3;
// console.log(y);
// console.log(z);

// pass by reference 
//  shallow copy example.

// closure
// function outerFn(){
//     let count = 0;
//     return function() {
//         count++;
//         console.log( 'inner fn '+  count);
//     }
// }
// const countA = outerFn();
// countA(); 
// countA();


// callback function

// function greeting(name, logs){
//     let customername = name;
//     logs(customername);
// }

// function logs(name){
//     console.log(`welcome mr/ mrs ${name}`);
// }
//  greeting('jack', logs);

// remove the duplicate 
// const arr = [1,2,3,41,23,3,4,5,6];
// const dupliateFree = [...new Set(arr)];
// console.log(dupliateFree.sort((a,b) => b - a));

// binary search

// function binarySearch(arr, target){
//     let start = 0;
//     let end = arr.length -1;
//     let mid;
//     while(start <= end){
//         mid = start + Math.floor((end - start)/2);
//         if(arr[mid] == target) return mid;
//         else if(arr[mid] < target){
//            start = mid + 1;
//         }else{
//             end = mid -1;
//         }
//     }
//     return mid;
// }

// let arr = [1, 2, 4, 5, 10, 12];
//  let target  = 10;
//  console.log(binarySearch(arr, target));

//  reverse an array

// function reverseArr(arr){
//     let start = 0;
//     let end = arr.length - 1;

//     while(start < end){
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//             start++;
//             end --;
//     }
//     return arr;

// }
// const arr = [1,2,3,4,5];
// console.log(reverseArr(arr));

// // callback function

// function greeting(name, logs){
//     let customername = name;
//     logs(customername);
// }

// function logs(name){
//     console.log(`welcome mr/ mrs ${name}`);
// }
//  greeting('jack', logs);
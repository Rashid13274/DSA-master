// ============================palindrome =====================================================//
// palindrome
function palindrome(str){
 let start =0;
 let end = str.length-1;
 let isPlindrome = true;
 while(start< end){
  if(str.charAt(start)!==str.charAt(end)){
   isPlindrome = false;
   break;
  }
  start++;
  end--;
 }
 return isPlindrome;
}
// console.log(palindrome('racecar'));
// console.log('hello');

//====================================sum of digit ====================================================//
 function sumOfdigit(num){
  let sum =0;
  while(num > 0){
   let digitValue =parseInt(num % 10);
   sum += digitValue;
   num = Math.floor(num/10);
 
  }
  return sum;
 }
// console.log(sumOfdigit(1234));

//==============================min max in array ======================================//
function minMax(arr){
 let min = arr[0];
 let max = arr[0];
 for(let i=0;i<arr.length; i++){
  if(arr[i]< min){
   min = arr[i];
  }
  if(arr[i] > max){
   max = arr[i];
  }
 }
 return { min , max}
}
// console.log(minMax([5,6,1,77,7]));

// ================================prime number ===========================================//

function primeNumber(n){
 let isPrime = new Array(n + 1).fill(true);

 // 0 and 1 are not prime number
 isPrime[0] = false;
 isPrime[1] = false;
 for(let p = 2; p*p <= n; p++){
  if(isPrime[p]==true){
   for(let i = p*p; i<=n; i+=p){
    isPrime[i] = false;
   }
  }
 }
 // print all prime numbers.
 for(let i = 0;i<=n; i++){
  if(isPrime[i]== true){
   console.log(i+ ' ');
  }
  
 }
 
}

// primeNumber(10);

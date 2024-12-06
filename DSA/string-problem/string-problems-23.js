function largestOddNumber(num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if ((num[i] - "0") % 2 != 0) {
      return num.substr(0, i + 1); // i+1 : it excludes  +1. so upto i will work.
    }
  }
  return "";
}

function test( num){
  for(let i =num.length -1; i<= 0; i--){
    if((num[i] - "0")% 2 !== 0){
      return  num.substr(0, i + 1);
    }
  }
  return "";
}

// const num = "52";
// const num = "2468";
// console.log(test(num));

const num = "521";
console.log(largestOddNumber(num));   

// console.log((4 % 2 == 0) ? true: false);

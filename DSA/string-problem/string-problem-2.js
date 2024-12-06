/* 
Given string is aaabbccddaa and make it into a3b2c2d2a2
*/
function compressString(str){
    let count = 1;
    let res = '';
    for(let i = 1; i<str.length; i++){
        if(str.charAt(i-1) === str.charAt(i)){
            count++;
        }
        if (str.charAt(i - 1) !== str.charAt(i)) {
            res = res + str.charAt(i-1) + count;
            count = 1; 
        }
        if(i == str.length - 1) {
            res = res  + str.charAt(str.length - 1) + count;
        }
    }
    return res;

}

function compressString2(str) {
  let res = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      count++;
    }

    if (str[i] !== str[i + 1]) {
      res += str[i] + count;
      count = 1;
    }
  }
  return res;
}
// const str = 'aaabbccddaa';
const str = 'aaabbccdda';

// console.log(compressString(str));
console.log(test(str));
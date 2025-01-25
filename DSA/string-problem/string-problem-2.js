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


// const str = 'aaabbccddaa';
const str = 'aaabbccddaaa';

// console.log(compressString(str));
console.log(test(str));
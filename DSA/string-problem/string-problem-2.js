/* 
Given string is aaabbccddaa and make it into a3b2c2d2a2
*/
function compressString(str){
    let res = '';
    let count  = 0;
    // aaabbccddaaa
    for(let i = 0; i< str.length; i++){
        if( i > 0 && str[i] === str[i -1]){
            count++;
        }

        if(i > 0 && str[i] !== str[i -1]){
            res += str.charAt(i - 1) + count;
            count = 1;
        }

        if( i == str.length - 1){
            res += str.charAt(i) + count;
            break;
        }
    }
    return res;
}


// Test cases
// const str = 'aaabbccddaa';
const str = 'daaabbccddaaa';
console.log(test(str));



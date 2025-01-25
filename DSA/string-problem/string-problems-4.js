/* Given a word, you need to judge of capitals in it is right 
or not.
we define uses  of capitals  in a word to be  right when one of 
the following cases holds:

1. ALL letters in this word are capital, like "USA",
2. All letters in this word  are capitals, like "leetcode"
3. Only the first letter in this word is capital, like "Google",
return true or false.

*/
//  65 - 90 : A to Z.
// 97 - 122 : a to z.
// function detectCapital(str){
//     if(validateLowerCase(str)){
//         return true;
//     }
//     else if(validateUpperCase(str)){
//         return true;
//     }
//     else if(validateOneUpperCaseAndOtherLetterCase(str)){
//         return true;
//     }
//     return false;
// }

function validateLowerCase(str){
    for(let i =0; i<str.lenght; i++){
        if (!(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)) {
            return false;
        }
    }
    return true;
}

function validateUpperCase(str) {
    for (let i = 0; i < str.lenght; i++) {
        if (!(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <=90)) {
            return false;
        }
    }
    return true;
}

function validateOneUpperCaseAndOtherLetterCase(str) {
    if (!(str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90)) {
        return false;
    }

    for (let i = 1; i < str.lenght; i++) {
            if (!( str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)) {
                return false;
            }
        }
        return true;;
    }

// console.log(detectCapital('leetcode'));

// 2.  approach:

function detectCapital(str) {
    let capital = 0;
    let small = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            capital++;
        }

        if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
            small++;
        }
    }

    return (
        (capital === str.length) ||
        (small === str.length) ||
        (capital === 1 && str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90)
    );
}




// 65 - 90 capital , 97 -122 small;
// console.log(detectCapital('leetcode')); // Should return true
// console.log(detectCapital('USA')); // Should return true
// console.log(detectCapital('Google')); // Should return true
// console.log(detectCapital('FlaG')); // Should return false

console.log(test('leetcode')); // Should return true
console.log(test('USA')); // Should return true
console.log(test('Google')); // Should return true
console.log(test('FlaG')); // Should return false
/* Remove special character:
Input: "$ja!va$&st%ar"
Output: javastar
*/


function removeSpecialCharacter(str){
    const result = str.replace(/[^a-zA-Z0-9]/g, '');
    return result;
}

// console.log(removeSpecialCharacter('$ja!va$&st%ar'));


// ==================================================================================================//

/* Remove all white space of given string
Input: str = 'j a va s ta r'
Output: javastar
 */

function removeWhiteSpace(str) {
    let result = str.trim(' ');
    return result.split(' ').join('');
}

// const str = 'j a va s ta r';
// console.log(removeWhiteSpace(str));

// ==================================================================================================//





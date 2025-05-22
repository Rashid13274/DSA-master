/* Problem: Lonest Substring without Repeating Characters

Descriptions: Given a string, find the length of the longest
substring without repeating characters.

Ex: 1
Input: "abcabcbb"
Output: 3 
Expalnation: the answer is 'abc', with the length of 3.

Ex: 2
Input: 'bbbbb'
Output: 1
Explanation: The answer is 'b', with the length of 1.

Ex: 3
Input: 'pwwkew'
Output: 3
Explanation the answer is 'wke' with the length of 3.
 */

function longesSubstringCount(str){
    let start  = 0, end = 0;
    let maxCount = 0;
    let len = str.length;
    let set = new Set(); 
    while(end < len) {
        let char  = str.charAt(end);
        // 'pwwkew'
        while(set.has(char)){
            set.delete(str.charAt(start));
            start++;
        }

        set.add(char);
        end++;
        maxCount = Math.max(maxCount , (end - start)); // 
    }
    return maxCount;
}


// console.log(test('abcabcb'));
// console.log(test('pwwkew'));
// console.log(test('bbbbb'));

console.log(longesSubstringCount('abcabcb')); // 3
console.log(longesSubstringCount('pwwkew')); // 3
console.log(longesSubstringCount('bbbbb')); // 1




/* 
 Isomorphic Strings
 Given two strings s and t, determine if they are isomorphic. Two strings are isomorphic 
 if the characters in s can be replaced to get t.

Ex: 1
Input: s = 'egg', t ='add';
Output: Isomorphic (true);

Ex: 2 
Input s = 'foo', t = 'bar'
Output: Isomorphic (true)

Ex: 3
Input: s= 'abacba', t = 'xyxzyx';
Output: Isomorphic (true);
Explanation:  each occurance of s character will be exact same throughtout the t string character.
such a is mapped to  x throughtout the t string, similarly  b is mapped to  y throughtout the string t.
*/

function isomorphicString(s, t){
    if (s == null || t == null) return null;
    if (s.length > t.length) return null;

    let map = new Map();

    for(let i = 0; i<s.length; i++ ){
        let s_char = s.charAt(i);
        let t_char = t.charAt(i);

        if (map.has(s_char) && (map.get(s_char) !== t_char)) {
            return false;
        }
        else {
            map.set(s_char, t_char);
        }
    }
    return true;
}

function test(s, t){
    if(s.length > t.length) {
        return false;
    }
    let map = new Map();

    for(let i = 0; i <s.length;i++){
        let char_of_s = s[i];
        let char_of_t = t[i];
        if(map.has(char_of_s) && map.get(char_of_s) !== char_of_t){
            return false;
        }
        else{
            map.set(char_of_s, char_of_t);
        }
    }
    return true;


}

// const s = 'abacba', t = 'xyxzyx';
// const s = 'foo', t = 'egg';
// const s = 'foo', t = 'bar'
// console.log(isomorphicString(s,t));
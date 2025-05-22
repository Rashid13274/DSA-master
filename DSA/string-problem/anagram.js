/* 
Check Wheather String is anagram.
1. Number of string should be same.
2. Length of each string should be same.
 ===> SILENT  ===> LISTEN  is Anagram.
*/

// 1. Using sorting and traversing.
/* 
function isAnagram(str1, str2){
    if(str1.length < str2.length){
        return false
    }
    let sortedStr1  = str1.split('').sort().join('');
    let sortedSt2 = str2.split('').sort().join('');

    for(let i = 0; i<sortedSt2.length;i++){
        if(sortedStr1.charAt(i) !== sortedSt2.charAt(i)){
            return false;
        }
    }
    return true;
}
*/





function isAnagram(string1, string2) {
    let anagram = true; // Assume true unless proven otherwise
    if (string1.length !== string2.length) {
        return false;
    }

    let str1 = new Array(256).fill(0);
    let str2 = new Array(256).fill(0);

    for (let i = 0; i < string1.length; i++) {
        let index1 = string1.charCodeAt(i);
        let index2 = string2.charCodeAt(i);
        str1[index1]++;
        str2[index2]++;
    }

    for (let i = 0; i < 256; i++) {
        if (str1[i] !== str2[i]) {
            anagram = false;
            break;
        }
    }

    return anagram;
}



// let string1 = 'listen';
// let string2 = 'silent';
// console.log(isAnagram(string1, string2));


// 
function isAnagram2(str1,str2){

    if(str1.length < str2.length){
        return false;
    }
        

    let str1Arr = new Array(256).fill(0);

    for(let i = 0; i< str1.length; i++){
        let str1Code = str1.charCodeAt(i);
        let str2Code = str2.charCodeAt(i);
        str1Arr[str1Code]++;
        str1Arr[str2Code]--;
    }

    for(let i = 0; i <256; i++){
        if(str1Arr[i] !== 0){
            return false;
        }
    }
    return true;
}



let str1 = 'listen';
let str2 = 'silen';
// console.log(isAnagram2(string1,string2));
console.log(test(str1,str2));



function sortByFrequency(str){

    // create a  map.
    let map = new Map();

    for (const element of str) {
        if (map.has(element)) {
            map.set(element, map.get(element) + 1);
        }
        else {
            map.set(element, 1);
        }
    }

    // convert the map into  an array of [char, frequency] pairs.
    let frequencyArray = Array.from(map.entries());

    // sort keys in descending order based on frequency (value).
    frequencyArray.sort((a, b) => b[1] - a[1]);


    // build the sorted string
    let result = '';

    for (const [key, value] of frequencyArray) {
        result += key.repeat(value);

    }
    return result;

}

// console.log(sortByFrequency('abckkteee'))

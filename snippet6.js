// Map:
let map = new Map();

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

// console.log(map.get('a'));  // returns value with corrosponding key.
// console.log(map.has('a'));  // returns true or false with corrosponding keys.
// console.log(map.values()); // returns itertable values 

// map.entries(): provides key and value iterateble
// for(const [keys, value] of map.entries()){ 
//     console.log(`keys:${keys} & values: ${value}`);
// }

for(const values of map.values()){
    console.log(`values: ${values}`);
}
/* 
Create an empty object called dog
Print the the dog object on the console
Add name, legs, color, age and bark properties for the dog object. The bark property is a method
which return woof woof
Get name, legs, color, age and bark value from the dog object
Set new properties the dog object: breed, getDogInfo
*/



let dog = {};
dog.name = 'tommy';
dog.legs = 4;
dog.colors = 'mixed colors';
dog.age = 2;
dog.bark = function(){
    return 'woof woof';
}

// Get name, legs, color, age and bark value from the dog object
// console.log(dog['name']);
// console.log(dog['legs']);
// console.log(dog['colors']);
// console.log(dog['age']);
// console.log(dog.bark());

// Set new properties the dog object: breed, getDogInfo
dog.breed = 'asian';
dog.getInfo = function(){
    return `${this.name} is ${this.age} years old and it's ${this.breed} breed`;
}

// return array of keys
const key  = Object.keys(dog);
// console.log(key);

// return array of values
const value = Object.values(dog);
// console.log(value);
// console.log(dog);
// console.log(dog.bark)

const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city:'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
  }
  
// Object methods: Object.assign, Object.keys, Object.values, Object.entries
// Object.assign: To copy an object without modifying the original object
// hasOwnProperty
  
const copyPerson = Object.assign({}, person);
// console.log(copyPerson)

for(const [key, val] of Object.entries(copyPerson)){
    // console.log(`key:${key}==> value${val}`);
}

// console.log(copyPerson.hasOwnProperty('city'));

// ========================================================================================================//
/* Problem Statement:
given two object return non matching keys in array.
*/

// asked in interview e innovation (mean stack developer)
function findNonMatchingKeys(json1, json2) {
    const allKeys = [...new Set([...Object.keys(json1), ...Object.keys(json2)])];
    console.log(allKeys)
    
    return allKeys.filter(key => {
        // Key exists in both but values don't match
        if (json1[key] !== undefined && json2[key] !== undefined) {
            return json1[key] !== json2[key];
        }
        // Key exists in only one of the objects
        return json1[key] === undefined || json2[key] === undefined;
    });
}

//  second approach:-
function findNonMatchingKeys2(d1, d2){
    let res = {};
   const arr = [{...d1}, {...d2}];
//    console.log(arr);
   let set   = new Set();

   for(let i = 0; i<arr.length; i++){
    for(const key in arr[i]){
        console.log(`${key}\n`);
     if(!set.has(key)){
            set.add(key);
        }
        else if(set.has(key) && d1[key] == d2[key]){
            set.delete(key);
        }
    }
   }

   return [...set];
}

// Example usage:
const json1 = {
    "name": "User1",
    "age": 30,
    "city": "Hyderabad"
};


const json2 = {
    "name": "User1",
    "age": 25,
    "country": "India"
};
// console.log(test2(json1, json2));
// console.log(test(json1, json2));
// const result = findNonMatchingKeys(json1, json2);
// const result = findNonMatchingKeys2(json1, json2);
// console.log(result); // Output: ["age", "city", "country"]

// ==============================================================================================//
/* 
Function Description
Implement the function mergeObjectsByID(arr1, arr2) that takes two arrays of objects
as input and returns a single array of merged objects based on the objectId. The function should follow these steps:
*/



function mergeObjectsByID(arr1, arr2) {
    const map = new Map();

    // Combine both arrays and process each element
    [...arr1, ...arr2].forEach(element => {
        if (!map.has(element.id)) {
            // First time seeing this ID, add the whole object
            map.set(element.id, element);
        } else {
            // If ID already exists, merge objects
            // Later object's properties overwrite earlier ones
            map.set(element.id, { 
                ...map.get(element.id),  // Existing object
                ...element              // New object properties
            });
        }
    });

    // Convert map values to array
    return Array.from(map.values());
}

function test(arr1, arr2){
    const map = new Map();
    [...arr1, ...arr2].forEach((element) =>{
        if(!map.has(element.id)){
            map.set(element.id, element)
        }
        else{
            map.set(element.id, {...map.get(element.id), ...element});
        }
    });
    return Array.from(map.values());
    console.log(map)
}

const arrayTest1 = [
    { "id": "1232", "name": "User1", "age": 30, "city": "Hyderabad" }
];

const arrayTest2 = [
    { "id": "1232", "name": "User1", "age": 25, "country": "India" }
];
console.log(test(arrayTest1, arrayTest2));
// console.log(mergeObjectsByID(arrayTest1, arrayTest2));



// ================= refrence example ====================================================//
// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"


// ========================================================================================================//

let a = [{
    name: 'jon',
    age: 23
}]

let b = {
    name: 'mark',
    age: 25
}

// let c  =  {...a, ...b};
// for(let i = 0; i<a.length; i++){
//     console.log(a[i].name)
// }

// console.log(c) // { name: 'mark', age: 25 }

// ========================================================================================================//


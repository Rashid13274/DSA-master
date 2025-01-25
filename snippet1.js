// rest parameters:-
function extractingArgs(...args){
    return args[1];
}
// console.log(extractingArgs(1,2,3));




function addAllArgs(...args){
    let i = 0;
    let  sum =0;
    while(i<args.length){
        sum+=args[i];
        i++;
    }
    return sum;
}
// console.log(addAllArgs(8,9,10,11));

// -------------------- Spread parameters-------------------------//

function addFourNumbers(num1,num2,num3, num4){
    return num1+num2+num3+num4;
}

let fourNumbers = [1,2,3,4];
// console.log(addFourNumbers(...fourNumbers));
// console.log(...fourNumbers); //spreads the array.


let obj1 = {
    x:'hello',
    y:'bye'
};

let clonedObj1 = {...obj1};
// console.log(obj1);
// console.log(clonedObj1);
let obj2 = {
    w:'yes', 
    z:'no'
}
let mergedObject = {...obj1,...obj2};
// console.log(mergedObject)


// -----------------------promise---------------------------//
function sumOfThreeNumbers(...elements){
    return new Promise((resolve,reject)=>{
        if(elements.length > 3){
            reject('only three elements or less are allowed !');
        }
        else{
            let sum = 0;
            let i =0;
            while(i<elements.length){
                sum += elements[i];
                i++;
            }
            resolve("sum has been calculted" + sum)
        }
    })
}


// sumOfThreeNumbers(2,3,4)
//     .then(result=> console.log(result))
//     .catch(err =>console.log(error));



// ======================= destructering ===================================//
 // object destructering
const classDetails = {
     strength: 78,
    benches: 39,
    blackBoard: 1,
}

const test2 = {
    name:'jone',
    age:34,
    address:'jaynagar, bihar',
    skills:['developer', 'designer', 'engineer']
}
// const {name, age, adress, skills} = test2;
// console.log(skills);
// console.log(age);
// const {strength:classStrength, benches:classBenches}  = classDetails;
// console.log(classStrength );
// console.log(classBenches);
const {strength, benches}  = classDetails;
// console.log(strength);
// console.log(benches);

//  array destructering 

const arr = [11,22,31,24];
// const[first, second, third, forth] = arr;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(forth);

// =============================== pass by value and pass by reference ===================//
let  y = 21;
let z = y;
y = 4;
// console.log(y);
// console.log(z);

// ============================== closure ===========================================//

// closure are an ability of an function to remember the variable and functions that are declared in
// its outer scope.

// function randomFunc() {
//     obj1 = {
//         name: 'jone',
//         age: 13
//     }
//     return function () {
//         console.log(obj1.name + ' is ' + 'awsome');
//     }
// }

// let initialiseClosure = randomFunc();
// initialiseClosure();

// ================================= JSON.parse() =============================================//
// let userStr = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';

// let userObj = JSON.parse(userStr);

// console.log(userObj);

// ================================= JSON.parse() =============================================//
let userObj = {
    name: "Sammy",
    email: "sammy@example.com",
    plan: "Pro"
  };
  
  let userStr = JSON.stringify(userObj);
  
//   console.log(userStr);

// ================================================//

function divideByHalf(sum){
    console.log(Math.floor(sum/2));
}
function multiplyBy2(sum){
    console.log(sum * 2);
}

function operation(num1, num2, operation){
    var sum = num1 + num2;
    operation(sum);
}
// operation(3, 3, divideByHalf);



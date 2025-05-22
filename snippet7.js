// ======================== Higher order function =============================================== //
// function higherOrder(fn){
//     fn();
// }
// higherOrder(function(){console.log('hello world')});

// function higherOrderfunction2(){
//     return function(){
//         return 'do something !';
//     }
// }

// var x = higherOrderfunction2();
// console.log(x())

// ======================== this keyword ===============================================//

// function doSomething(){
//     console.log(this);
// }

// doSomething(); // returns global object.

// var obj = {
//     name: 'vivek',
//     getName: function(){
//         console.log(this.name);
//     }
//     // here function is property of object obj.
// }
// obj.getName(); // vivek


// ===================== var let const ==============================================//
// 1. var :- 

// function varkeyword1(){
//     if(true){
//         var x = 4;
//     }

//     console.log(x);  // accessed outside the scope. 
// }
// varkeyword1();

//  hosted and initialized with undefined
// console.log(x);
// var x  = 10;

// var c = 10;
// console.log(c);
// var c = 20;
// console.log(c);

// global scope behaviour

//   ============================ call apply bind ==================================================== //

//  call method allow an object to use method(function ) of another object.
// // ex: 2
// function sayHello(){
//     return 'hello ' + this.name;
// }
// var obj = {name: 'sandy'};

// console.log(sayHello.call(obj)); // hello sandy


// var person = {
//     age: 23,
//     getAge: function(){
//         return this.age;
//     }
// }

// var person2 = { age : 54};
// console.log(person.getAge.call(person2)); // 54

//  apply method: very similar to call method but takes arguments as array.

// function saySomething(message){
//     return this.name + ' is ' + message;
// }

// var person4 = {name: "john"};
// console.log(saySomething.apply(person4, ['awsome'])); // john is awsome

//  ================== exec() and test() ===================================================  //

// let re;
// re = /hello/i;
// re =/hello/g; // globally search
// console.log(re.source);
//  exec: return array of result or null
// console.log(re.exec('hello world'));
// console.log(re.exec('these is some random string hello').index);

// test() : -  return true or false

// console.log(re.test('welcome hello')); // true;
// console.log(re.test('welcome')); // false;

// match():- returns the result in array or null;
// let  str = 'hello there ';
// console.log(str.match(re));

// search(): returns the first match index or  -1
// console.log(str.search(re)); // 5;

// replace(): replaces the match string in array.

// console.log(str.replace(re, 'replaced-word'));

// str = 'this start at the end finish world'
// re = /^this world$/g // must start with
// console.log(str.match(re));
// re = /[tx]his/g
// re = /[a-z]ello/g
// re = /[^A-Z]/g

// re = /[^a-z]/g
// str = 'j$%a%@*v#$a@s%$cript';
// // console.log(str.match(re));
// console.log(str.replace(re, ''));

// =======================================  closure =====================================================//

// function randomFunc(){
//     var obj1 = { name: 'vivek', age: 23};

//     return function(){
//         console.log(obj1.name + ' is ' + obj1.age + ' years old !');
//     }
// } 

// const res = randomFunc();
// res(); // vivek is 23 years old !
// // =======================================  object prototype ================================================//
// prototype is blue print of an object, on the top of the chain we've object.prototype


// =======================================  callback  ================================================//
/* 
1. callback is function that will be executed after another functiion get executed.
2. function that are used as argument to another is function  is callback function.
*/

// function divideByHalf(sum){
//     console.log(Math.floor(sum/2))
// }

// function multiplyBytwo(sum){
//     console.log(sum * 2)
// }

// function operationOnSum(num1, num2 , operation){
//     var sum = num1 + num2;
//     operation(sum);
// }

// operationOnSum(2,3,multiplyBytwo);

// ================================ recursion ===================================================== //

/* recursion is a technique to iterate an operation by calling function itself until it's achive the result. */

// function addNumber(num){

//     if(num === 0){
//         return 0;
//     }
//     return num + addNumber(num - 1);
// }

// console.log(addNumber(5));
// ================================ constructor ===================================================== //
/*  constructor is used to create object in javascript, if want to create object with similar properites
    and method we use constructor function. */
// ============================= DOM ==================================================================//

/* DOM: document object model is programming interface for web documents. 
dom is organized hierarachially  with the document as root node node. element like html  body div p are nodes
 in this tree.
 */

//  ===================================================================================//
// 1. arrow function refers to window object.
// 2. rest parameter:-

// 
//  and spread operator: spreading the array and object literals. 
// function spreadFn(n1,n2,n3,n4){
//     const sum = n1 + n2 + n3 + n4;
//     return sum;
// }

// let arr = [1,2,3,4];
// console.log(spreadFn(...arr));

// ===============================================================================================//

const obj = { };

// add some property and method to object.

obj.name = 'jon';
obj.age = 21;
obj.city = 'delhi';
obj.description = function(){
    return `${this.name} is ${this.age} years old and living in ${this.city}`;
}

// console.log(obj);
// obj.description()
//
// obj[skills] = ['java', 'angular'];
// console.log(obj);





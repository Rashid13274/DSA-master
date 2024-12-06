/* 
What are callbacks?
A callback is a function that will be  executed after another function
gets executed. In javascript, function are treated as first-class citizens.

Function that are used as an argument to another function are called function.

*/

function dividedByHalf(sum){
    console.log(Math.floor(sum/2));

}

function multiplyBy2(sum){
    console.log(sum*2);
}

function operationOnSum(num1, num2, operation){
    let sum = num1 + num2;
    operation(sum);

}

operationOnSum(3,3,dividedByHalf);
operationOnSum(3,3, multiplyBy2);
// Higher-Order Functions:
// Functions that operate on other functions, either by taking them as arguments
// or by returning them, are called higher-order functions.

function higherOrder2() {
    return function() {
        return 'do something';
    }
}
const x = higherOrder2(); // (A)
console.log(x());         // (B)


// (A): higherOrder2() is called.
//      - It returns an inner function (but does not execute it yet).
//      - The variable x now holds this inner function.
//
// (B): x() is called.
//      - This executes the inner function and returns 'do something'.
//      - console.log prints this value.
//
// Order of calls:
//   1. higherOrder2() (outer function)
//   2. The returned function via x()



function higherOrder() {
    return function() {
        console.log('log printed');
    }
}

var z = higherOrder(); // (C)
z();                   // (D)


// (C): higherOrder() is called.
//      - It returns an inner function (but does not execute it yet).
//      - The variable z now holds this inner function.
//
// (D): z() is called.
//      - This executes the inner function and prints 'log printed'.
//
// Order of calls:
//   1. higherOrder() (outer function)
//   2. The returned function via z()



function higherOrder3(fn){
    fn();
}

higherOrder(function(){console.log('log printed')});
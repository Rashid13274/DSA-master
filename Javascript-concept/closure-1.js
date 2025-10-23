// A function declared in the outer scope
function outerFunction() {
    let outerVariable = 'I am from outer scope';

    function innerFunction() {
        console.log(outerVariable); // innerFunction "remembers" outerVariable
    }

    return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Output: I am from outer scope
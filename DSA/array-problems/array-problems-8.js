/*  Evaluate Reverse Polish Notation
 Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid 
operators are +,-, *, /. Each operand may be an integer or another expression. For
 example:
 ["2", "1", "+", "3", "*"]-> ((2 + 1) * 3)-> 9
 ["4", "13", "5", "/", "+"]-> (4 + (13 / 5))-> 6
*/

function polishNoatation(arr){
    let stack = [];
    const operator = '+-*/';
    let res = 0; //  we can assume any number.

    for(let i = 0; i<arr.length; i++){
        let val = arr[i];
        if(!operator.includes(val)){
            stack.push(Number(val));
        }
        else {

            let value1 = stack.pop();
            let value2 = stack.pop();
    
            switch(val){
                case '+':
                    res = value2 + value1;
                    stack.push(res);
                    break;
                    
                case '-':
                    res = value2 - value1;
                    stack.push(res);
                    break;
                    
                case '*':
                    res = value1 * value2;
                    stack.push(res);
                    break;
                    
                case '/':
                    res = value2 / value1;
                    stack.push(res);
                    break; 
            }
        }
    }
    return Math.floor(stack.pop());
}

// let arr = ["2", "1", "+", "3", "*"];
let arr = ["4", "13", "5", "/", "+"];
// console.log(polishNoatation(arr));
console.log(test(arr));



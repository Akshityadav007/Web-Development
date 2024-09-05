/*
    1. JS has a feature where we can pass a function as an argument to another function.
    2. 
        => There is a function 'setTimeout(fn, time)', where 'fn' is the function to be called and 'time' is the time(in miliseconds) after which 'fn' should be called.
            E.g. setTimeout(solve, 1 * 1000);
        => In this function also we are using function callback feature.
    3.  There is another function 'setInterval(fn ,time)', here 'fn' is called after each 'time' miliseconds.

    4. 
        => Arrow functions are functions which we can define using ' () => '. It doesn't have it's own context (this, arguments, super), it inherits the context of the surrounding code.
        => Since setTimeout takes only one function as an argument, you can use an arrow function (or any function) to encapsulate multiple statements or function calls within that single function. 
            -> This way, you can execute multiple actions after the specified delay.


*/


// passed a function as third argument
function solve(a, b, operationToPerform){
    return operationToPerform(a, b);
}

function add(a, b){
    console.log("Addition = " , (a + b));
}

function subtract(a, b){
    console.log("Subtraction = ", (a - b));
}


// main program

const a = 10, b = 5;

solve(a, b, add);               
solve(a, b, subtract);

// Note : We are passing the name of a function to another function, this is function callback
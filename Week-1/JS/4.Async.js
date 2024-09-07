/*
    1.
        => In asynchronous function, JS delegates async calls to another thread and keeps the current thread running for the next synchronous calls.
        => Even if the async thread has already completed the task and is ready to return the result, if the current sync thread is doing some task, the async thread/s will wait in the 'callback queue' to return the result and will return the result after the current thread gets completed.

            
    ** Note : To see the running of your JS program, run your program on http://latentflip.com/loupe  **

    -> Run the below code on this website to understand JS Browser architecture

*/

console.log("Hi there");

setTimeout(function(){
    console.log("from inside async fun");
}, 2 * 1000);

setTimeout(function(){
    console.log("from inside async fun");
}, 1 * 1000);


let nSum = 0;
for(let i = 1;i < 10; i++)
    nSum += i;
console.log(nSum);
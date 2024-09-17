/*
    -> It is also a syntactical sugar, uses callbacks/promises under the hood.

    => 'Await' waits for the promise to be returned before using it.
        -> It won't use it if it's status is 'Promise {<pending>}'.
        -> It doesn't execute the codes after the current thread within the same function untill promise is resolved.
    
    => 'Await' is only valid for 'async' functions.

    => V. Important key difference between :

        Feature	                Promise.all()	                            Promise Chaining
        Execution	            Runs promises concurrently. 	            Runs promises sequentially.
        When it resolves	    When all promises are resolved.	            Each promise resolves in sequence.
        Total execution time	Time taken is the longest promise.	        Time taken is the sum of all promises.
        Dependencies	        Promises are independent of each other.	    Promises can depend on the result of the previous one.
        Error Handling	        Rejects if any promise fails.	            Can handle failures at each step in the chain.

    => Look into the assignments section of week-02 -> 01-async-js -> hard(promises), very important to learn!
*/

function myAsyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve('Heya!');
        }, 1 * 1000)
    });
    return p;
}

async function main(){
    let value = await myAsyncFunction();
    console.log(value);
}

main();
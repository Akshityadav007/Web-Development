/*
    -> It is also a syntactical sugar, uses callbacks/promises under the hood.

    => 'Await' waits for the promise to be returned before using it.
        -> It won't use it if it's status is 'Promise {<pending>}'.
        -> It doesn't execute the codes after the current thread within the same function untill promise is resolved.
    
    => 'Await' is only valid for 'async' functions.
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
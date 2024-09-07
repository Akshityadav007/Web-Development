/*

    -> Promises are synatical sugar, they still use 'callbacks under the hood'.
    -> It is just a class that makes callbacks and async function slightly more readable.
    -> When we create it, we need to pass a function as the first arguemnt which has resolve(can change the name) as the first argument.

*/


/*
        Ugly way to define (not using promise)
        --------------------------------------

const fs = require('fs');

function myFileReader(resolve){
    fs.readFile("../assignments.txt", "utf-8", function(err, data){
        resolve(data);
    });
}


function onDone(data){
    console.log(data);
}

myFileReader(onDone);

*/


//         Using Promise


const fs = require('fs');

function myFileReader(){
    return new Promise(function(resolve){
        fs.readFile("../assignments.txt", "utf-8", function(err, data){
            resolve(data);
        });
    })
}


function onDone(data){
    console.log(data);
}

myFileReader().then(onDone);
// axios vs fetch
const axios = require("axios");


// 1. GET requests

function main1(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(async response => {
        const json = await response.json();         // converting response object (promise) to json is an async task
        console.log("Response from promise chaining: " + json.length);
        // await response.text();
    })
}

async function main2(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await response.json();                         
    console.log("Response from async/await: " + json.length);
}

// both the main1() and main2() do the same thing


async function main3(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");         
    // console.log(response);
    console.log("Response from axios: " + response.data.length);
}

main1();    // promise chaining
main2();    // using async/await
main3();    // Axios



// 2. POST requests

async function main4() {
    const response = await fetch("https://reqres.in/api/register", {
        method: "POST",                                  // by default it is "GET"
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: "eve.holt@reqres.in",                // sample email
            password: "pistol"                          // sample password
        })
    });
    
    const json = await response.json();
    console.log("POST response from async/await:", json);
}


async function main5(){
    const response = await axios.post("https://reqres.in/api/register", 
        {
            email: "eve.holt@reqres.in",                // sample email
            password: "pistol"                          // sample password
        },
        {
            headers: {
                "Content-Type" : "application/json"
            }
        }
    );

    console.log('POST response from axios:', JSON.stringify(response.data, null, 2));

}

/*
    -> In axios post request, 1st argument = url, 2nd argument = body, 3rd argument = header
    -> Params and Queries can be put in url itself
    -> Axios can also be used like the 'fetch' syntax.

    -> Note: In a get request you can't send a body.
*/


main4();
main5();
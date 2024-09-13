// Before we procees, let's add constraints to our route
// 1. User needs to send a kidenyId as query param (range : 1-2, humans have only 1-2 kidneys)
// 2. User should send username/password in headers


const express = require("express");
const PORT = 3000;
const app = express();

app.get('/health-checkup', (req, res) => {
    // do health checkup

    // authentication
    const username = req.headers.username;
    const password = req.headers.password; // Corrected from 're' to 'req'
    const kidneyId = req.query.kidneyId;

    if(username != 'Akshit' || password != '123456'){ // Changed '&&' to '||'
        return res.status(400).json({
            'msg' : 'Wrong input!'
        });
    }

    // if the code reaches here, this means username and password were correct
    if(kidneyId != 1 && kidneyId != 2){ // Changed from '||' to '&&'
        return res.status(411).json({
            "msg" : "Wrong kidney input!"
        });
    }
    
    // code reaches here this means kidney is fine!
    res.json({
        msg : "Your kidney is fine!"
    });
});


// if we've another check function to write, we'll have to again write the whole thing.. which isn't convenient.
// Solution : Use Middlewares

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

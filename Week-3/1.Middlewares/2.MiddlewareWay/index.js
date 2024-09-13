/*
    -> We can use the express functions to callback the next functions using 'next' in it.
       - E.g. app.get('/', function(req, res, next){}, function(req, res, next){}, function(req, res){})
    -> We can have muliple callback functions like this.
    
    => Note : We need to put 'next' before each call back function to be called else the control will not shift to next function.
    
    => If we want to entertain a 'POST' request we must use 'app.use()' to retreive the 'body' from the request.
       - E.g. app.use(express.json()), using these we tell the that we are expecting a 'json' type body of the request.
*/

// We can use middlewares using this functionality to decrease code redudancy

const express = require("express");
const app = express();
const PORT = 3000;


// authenticate
function userMiddleWare(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password; // Corrected from 're' to 'req'

    if(username != 'Akshit' || password != '123456'){ // Changed '&&' to '||'
        return res.status(400).json({
            'msg' : 'Wrong input!'
        });
    }
    else
       next();
}

function kidneyMiddleWare(req, res, next){
    const kidneyId = req.query.kidneyId;

    if(kidneyId != 1 && kidneyId != 2){ // Changed from '||' to '&&'
        return res.status(403).json({
            "msg" : "Wrong kidney input!"
        });
    }
    else
        next();
}

function heartMiddleWare(req, res, next){
    const heartId = req.query.heartId;

    if(heartId != 1){
        return res.status(403).json({
            "msg" : "Wrong heart input!"
        });
    }
    else
        next();
}

app.get('/heart-checkup', userMiddleWare, heartMiddleWare, (req, res) => {
    res.json({
        "msg" : "Your are healthy!"
    })
});

app.get('/kidney-checkup', userMiddleWare, kidneyMiddleWare, (req, res) => {
    res.json({
        "msg" : "Your kidney is healthy!"
    })
});

app.get('/health-checkup', userMiddleWare, heartMiddleWare, kidneyMiddleWare, (req, res) => {
    res.json({
        "msg" : "Your are healthy!"
    })
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
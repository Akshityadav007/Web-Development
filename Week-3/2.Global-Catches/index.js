/*
    1. Error-handling middleware: 
       -> This is specific to Express. 
       -> It catches errors that occur within the request-response lifecycle and is invoked when next(err) is called. 
       -> It’s designed to handle errors across routes and middleware in an Express app.

    2. Global catches (try-catch): 
       -> This is general JavaScript error handling. 
       -> When using async functions, unhandled errors in promises need to be caught manually.
       -> You wrap async code in a try-catch block and pass the error to the Express error handler using next(err).



    => In Express.js, error-handling middleware catches and processes errors thrown during the request-response cycle.
    => To define one, create a middleware function with four parameters: (err, req, res, next). 
    => This middleware should be placed after all other routes and middleware in the stack.
*/


const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());


app.post('/' ,(req, res) => {
    // console.log(req.body);
    
    const a = req.body.a;
    const b = req.body.b;

    res.send("The sum is:" + (a + b));
})


app.use((err, req, res, next) => {
    // console.error(err.stack);       // log the error
    res.status(500).send('Something went wrong!');
});
  

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

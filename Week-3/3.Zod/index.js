/*
    1. Input validation
    --------------------

    -> Suppose we are receiving an email as username and a password.
    -> Both will have some criteria to be met to be considered as email and a valid password.
    -> We'll need a validation for this. 
    -> We can't program the whole validation because it will be too long.
    -> Hence, we will need libraries to do that, one of them is ZOD.

    * Note : You can visit https://zod.dev/ for more validations.

*/


const express = require("express");
const zod = require("zod");
const app = express();
const PORT = 3000;

// we can define our own schema - i.e. the way how we expect our input to be
const schema = zod.array(zod.number());         // we'll expect array of numbers

app.use(express.json());

app.post('/health-checkup' ,(req, res) => {
    // kidneys = [1, 2]

    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);

    if(!response.success){
        res.status(411).json({
            "msg" : "Invalid input"
        })
    }
    else{
        res.send({
            response
        });
    }
})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

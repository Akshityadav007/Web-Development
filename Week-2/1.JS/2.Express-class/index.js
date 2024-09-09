const express = require("express");

const app = express();
const PORT = 3000;

// the below array acts as a local mini database
const users = [{
    name : "John",
    kidneys : [{
        healthy : false
    }]
}]


app.use(express.json());


// 1. 'GET' method  - get the data of kidneys
app.get("/", function(req, res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfhealthyKidneys = 0;
    for(let i = 0;i < numberOfKidneys; i++){
        if(johnKidneys[i].healthy)
            ++numberOfhealthyKidneys;
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfhealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfhealthyKidneys,
        numberOfUnhealthyKidneys
    })
})


// 2. 'POST' method - insert a new kidney data
app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg : "Done!"
    })
})


// 3. 'PUT' method - replace/update a kidney data
app.put("/", function(req, res){
    for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }

    res.json({});
})


//4. 'DELETE' method - delete/remove all unhealthy kidneys
app.delete("/", function(req, res){
    // check if there are any unhealthy kidneys present
    if(checkUnhealthy()){
        const newKidneys = []
        for(let i = 0; i < users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy : true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg : "done"});
    }
    else{
        // status 411 : Wrong input
        res.status(411).json({msg : "You have no unhealthy kidneys!"});
    }
})

function checkUnhealthy(){
    let unHealthyKidney = false;
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            unHealthyKidney = true;
            break;
        }
    }
    return unHealthyKidney;
}

app.listen(PORT);
// let us create a http server using express.js
// run 'npm init -y' to load all the packages first into this empty folder.
// then after creating 'index.js' run 'npm install express' to install express.js
// to keep a server running (hot reload), use command 'npx nodemon file_name.js'

const express = require("express");
const bodyParser = require("body-parser");    
const port = 3000

const app = express();

app.use(bodyParser.json());

app.post('/', function(req, res){
    console.log(req.body);
    res.send("Hello World");
})

app.listen(port, () => {
    console.log("App listening to port", port);
})


// continue from week 2.2/ 2:04
/*
    -> Just like express let's us create a http server, jsonwebtoken let's us create jwts, mongoose let's us to connect to mongodb database.
    
*/


const express = require("express");
const mongoose = require("mongoose");
const PORT = 3000;

// paste the database name at the last of connection string after '/'
mongoose.connect(
  "mongodb+srv://admin:admin123@cluster0.y9pwl.mongodb.net/userAppNew",
);


// need to define schema first in mongo db
const User = mongoose.model("users", {
    name: String,
    email: String,
    password: String,
});

const app = express();
app.use(express.json());


app.post("/signup", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const isExistingUser = await User.findOne({email : username});

    if(isExistingUser){
      return res.status(400).send("Username already exists!");
    }

    const user = new User({
      name : name,
      email : username,
      password : password
    })

    user.save();
    res.json({
      "msg" : "User created successfully!"
    })  
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

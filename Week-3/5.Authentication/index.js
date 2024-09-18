/*
    => Project for today
        1. Let people sign up to your website.
        2. Only allow signed in users to see people (create a dummy people list)
*/

/*

    -> Understand some crypto jargons:
        1. Hashing: Based on some algo, we convert a string to another string(hashed). We can't convert a hash to string (One way conversion.)
        2. Encryption: Base on some algo, we can convert a string to another string(encrypted) and vice versa (two way conversion).
        
        3. Json web tokens(jwt): Similar to encryption, but the difference is the converted string can be decoded by anyone in jwt. But the verification of this string can only be done by the authorised user(using password).

        4. Local Storage: Local storage(browser) is used to store the JWT of the user to ensure the user is logged in untill he logs out.
            -> Client send request -> backend sends request to database to authenticate -> db returns a JWT after authenticating -> backend returns the JWT to browser that stores it in local storage to ensure the user is logged in permanently.
            => This way user doesn't have to send authorisation request everytime he wants to use it.
*/


/*
        Assignments
        -----------
    
    Create a website which has 2 end points:
        1. POST/signin
            Body - {
                username : string
                password : string
            }
            - returns a json web token (jwt) with username encrytped.

        2. GET/users
            Headers = authorization header
            - returns an array of all users if user is signed in (token is correct) else returns 403 status code.


    * Note : To read more about jwt and it's functions, go to https://www.npmjs.com/package/jsonwebtoken .
    * Note : We can decode the contents of jwt tokens by pasting it on https://www.jwt.io
*/

const express = require("express");
const jwt = require("jsonwebtoken");
const PORT = 3000;
const jwtPassword = "123456";

const app = express();
app.use(express.json());


// in-memory database
const ALL_USERS = [
  {
    username: "Akshit@gmail.com",
    password: "123",
    name: "Akshit Yadav",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  for(let obj = 0; obj < ALL_USERS.length; obj++){
    const currUser = ALL_USERS[obj].username;
    const currPwd = ALL_USERS[obj].password;

    if(currUser === username && currPwd === currPwd)
        return true;
  }
  return false;

  // although we can also do it using find() function, I've done it like this.
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);    // gets the jwt token to send back
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    // verify if the user is authorised and get a decoded string
    const decoded = jwt.verify(token, jwtPassword);     // jwt verification using password
    const username = decoded.username;
    // return a list of users other than this username
    res.json({
        users : ALL_USERS.filter(user => user.username !== username)
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

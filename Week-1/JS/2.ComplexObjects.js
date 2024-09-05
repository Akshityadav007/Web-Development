// complex objects


function printName(complexObj){
    if(complexObj["gender"] === "male"){
        return complexObj["firstName"];
    }
};

function printNames(complexArr){
    for(let user = 0; user < complexArr.length; user++){
        if(complexArr[user]["gender"] === "male"){
            console.log(complexArr[user]["firstName"]);
        }
    }
};



// main program

// complex object
const user1 = {
    "firstName" : "Akshit",
    "lastName"  : "Yadav",
    "age"       : 25,
    "gender"    : "male"
};

// console.log("The first name of male person is:", printName(user1));


// define some more complex objects
const user2 = {
    "firstName" : "Shaitan",
    "lastName"  : "Singh",
    "age"       : 21,
    "gender"    : "male"
};

const user3 = {
    "firstName" : "Sana",
    "lastName"  : "Khan",
    "age"       : 23,
    "gender"    : "female"
};

const users = [user1, user2, user3];

printNames(users);


// another way to define array of objects\
const allUsers = [
    {
        "firstName" : "Sana",
        "lastName"  : "Khan",
        "age"       : 23,
        "gender"    : "female"
    },
    {
        "firstName" : "Shaitan",
        "lastName"  : "Singh",
        "age"       : 21,
        "gender"    : "male"
    },
    {
        "firstName" : "Akshit",
        "lastName"  : "Yadav",
        "age"       : 25,
        "gender"    : "male"
    }
];
function greetName(firstName, lastName){
    return "Hello " + firstName + " " + lastName;
}

function greetGender(gender){
    if(gender === 'Male')
        return "Hello Sir!";
    else
        return "Hello Mam!";
}

function count1000(){
    for(let i = 1; i < 1001; i++){
        console.log(i, " ");
    }
}

// result = greetName("Akshit", "Yadav");
// result = greetGender("Male");
// console.log(result);

count1000();

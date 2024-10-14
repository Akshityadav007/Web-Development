// problem 1
function greet(firstName: string) {
    console.log("Hello " + firstName);
}


// problem 2
function sum(num1: number, num2: number){
    return num1 + num2;
}


// problem 3
function isLegal(age: number){
    return age > 18;
}


// problem 4
function runFunc(fun: () => void){
    setTimeout(fun, 1 * 1000);
}



greet("Akshit");
console.log(sum(1, 2));
console.log(isLegal(28));
runFunc(() => {console.log("Delayed output!")});




// step 6 problems

const user = {
	firstName: "Akshit",
	lastName: "Yadav",
	email: "email@gmail.com",
	age: 12
}

// data type of user ⬇️
interface User {
	firstName: string;
	lastName: string;
	email?: string;                         // '?' putting this means this is optional to pass
	age: number;
}

// assignment 1
function isLegal2(user: User){
    return user.age > 18;
}

const res1 = isLegal2(user);
const res2 = isLegal2({
    firstName: "Aman",
    lastName: "Ojha",
    age: 19
})
console.log(res1);
console.log(res2);


// assignment 2
// do on your own


// step 8

// example 1
function maxValue(arr : number[]){
    let max = arr[0];
    for(let i = 1;i < arr.length; i++){
        if(max < arr[i])
            max = arr[i];
    }
    return max;
}

console.log(maxValue([1,2,3,9,5,2,-2]))


// example 2
interface User2 {
    firstName: string;
    lastName: string;
    age: number;
}


function filterLegal(users: User2[]){
    const filteredUsers = users.filter(user => user.age > 18);

    return filteredUsers;
}

const listOfUsers = [
    {firstName: "Akshit", lastName: "yadav", age: 24},
    {firstName: "Harman", lastName: "baje", age: 16},
    {firstName: "Jadu", lastName: "Shamba", age: 23}, 
    {firstName: "jigen", lastName: "sarutobi", age: 12},
    {firstName: "sasuke", lastName: "uchiha", age: 19},
    {firstName: "Naruto", lastName: "uzumaki", age: 18},
    {firstName: "Keeba", lastName: "sarutobi", age: 9}

]

console.log(filterLegal(listOfUsers))
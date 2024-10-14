# Step 1 - Types of languages

1. Strongly typed vs loosely typed
-> The terms strongly typed and loosely typed refer to how programming languages handle types, particularly how strict they are about type conversions and type safety.

**Strongly typed languages**
i. Examples - Java, C++, C, Rust
ii. Benefits - 
    - Lesser runtime errors
    - Stricter codebase
    - Easy to catch errors at compile time
 
iii. Code doesn’t work ❌
    #include <iostream>
    int main() {
        int number = 10;
        number = "text";
        return 0;
    }

2. Loosely typed languages
i. Examples - Python, Javascript, Perl, php
ii. Benefits
    - Easy to write code
    - Fast to bootstrap
    - Low learning curve
 
iii. Code does work ✅

    function main() {
        let number = 10;
        number = "text";
        return number;
    }

 
-> People realised that javascript is a very power language, but lacks types.
-> Typescript was introduced as a new language to add types on top of javascript.


# Step 2 - What is Typescript
- TypeScript is a programming language developed and maintained by Microsoft. 
- It is a strict syntactical superset of JavaScript and adds optional static typing to the language.

![alt text](image.png)

1. Where/How does typescript code run?
- Typescript code never runs in your browser. Your browser can only understand javascript. 
- Javascript is the runtime language (the thing that actually runs in your browser/nodejs runtime)
- Typescript is something that compiles down to javascript
- When typescript is compiled down to javascript, you get type checking (similar to C++). If there is an error, the conversion to Javascript fails. 

![alt text](image-1.png)
 
2. Typescript compiler
- tsc is the official typescript compiler that you can use to convert Typescript code into Javascript
- There are many other famous compilers/transpilers for converting Typescript to Javascript. 
- Some famous ones are - 
    - esbuild
    - swc




# Step 3 - The tsc compiler
- Let’s bootstrap a simple Typescript Node.js application locally on our machines
 
**Step 1** - Install tsc/typescript globally
    npm install -g typescript

**Step 2** - Initialize an empty Node.js project with typescript
    mkdir node-app
    cd node-app
    npm init -y
    npx tsc --init

- These commands should initialize two files in your project
![alt text](image-3.png)
 
**Step 3** - Create a a.ts file
    const x: number = 1;
    console.log(x);

**Step 4**- Compile the ts file to js file
tsc -b

**Step 5** - Explore the newly generated index.js file

![alt text](image-4.png)
 
Notice how there is no typescript code in the javascript file. It’s a plain old js file with no types
 
**Step 7** - Delete a.js
**Step 8** - Try assigning x to a string
- Make sure you convert the const to let
    let x: number = 1;
    x = "harkirat"
    console.log(x);

**Step 9** - Try compiling the code again
    tsc -b
- Notice all the errors you see in the console. This tells you there are type errors in your codebase.
- Also notice that no index.js is created anymore

![alt text](image-2.png)

- This is the high level benefit of typescript. It lets you catch type errors at compile time


# Step 4 - Basic Types in TypeScript
1. Typescript provides you some basic types
    - number, string, boolean, null, undefined.
    - Let’s create some simple applications using these types:

2. Thing to learn - How to give types to arguments of a function
    - Problem 1 - Write a function that greets a user given their first name. 
        Argument - firstName
        Logs - Hello {firstName}
        Doesn’t return anything

3. Thing to learn - How to assign a return type to a function
    - Problem 2 - Write a function that calculates the sum of two functions
    - Problem 3 - Return true or false based on if a user is 18+

4. Thing to learn - Type inference
    - Problem 4 - Create a function that takes another function as input, and runs it after 1 second.


# Step 5 - The tsconfig file
- The tsconfig file has a bunch of options that you can change to change the compilation process.
- Some of these include
 
1. target
- The target option in a tsconfig.json file specifies the ECMAScript target version to which the TypeScript compiler will compile the TypeScript code.
- To try it out, try compiling the following code for target being ES5 and es2020
    const greet = (name: string) => `Hello, ${name}!`;

2. rootDir (search in the config file and update)
- Where should the compiler look for .ts files. 
- Good practise is for this to be the src folder

3. outDir (search in the config file and update)
- Where should the compiler look for spit out the .js files.

**note** - now we can introduce '.gitignore' file.

4. noImplicitAny (search in the config file and update)
- Try enabling it and see the compilation errors on the following code - 
    const greet = (name) => `Hello, ${name}!`;
- Then try disabling it
- basically it will not show compiler error for not implicitly giving 'data type'

5. removeComments
- Weather or not to include comments in the final js file.


# Step 6 - Interfaces

1. What are interfaces

How can you assign types to objects? For example, a user object that looks like this - 
const user = {
	firstName: "Akshit",
	lastName: "Yadav",
	email: "email@gmail.com".
	age: 21,
}

To assign a type to the user object, you can use interfaces
interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}

 
Assignment #1 - Create a function isLegal that returns true or false if a user is above 18. 
              - It takes a user as an input.
 
Assignment #2 - Create a React component that takes todos as an input and renders them.
              - Select typescript when initialising the react project using npm create vite@latest


2. Implementing interfaces

- Interfaces have another special property.
- You can implement interfaces as a class.
Let’s say you have an personinterface - 
    interface Person {
        name: string;
        age: number;
        greet(phrase: string): void;
    }

- You can create a class which implements this interface.
    class Employee implements Person {
        name: string;
        age: number;

        constructor(n: string, a: number) {
            this.name = n;
            this.age = a;
        }

        greet(phrase: string) {
            console.log(`${phrase} ${this.name}`);
        }
    }

- This is useful since now you can create multiple variants of a person (Manager, CEO …)
 
**Summary**: 
- You can use interfaces to aggregate data
- You can use interfaces to implement classes from


# Step 7 - Types

- What are types?
- Very similar to interfaces , types let you aggregate data together.
    type User = {
        firstName: string;
        lastName: string;
        age: number
    }

But they let you do a few other things.
 
1. Unions
- Let’s say you want to print the id of a user, which can be a number or a string.
💡
- You can not do this using interfaces:

    type StringOrNumber = string | number;
    function printId(id: StringOrNumber) {
        console.log(`ID: ${id}`);
    }

    printId(101); // ID: 101
    printId("202"); // ID: 202

2. Intersection
- What if you want to create a type that has every property of multiple types/ interfaces
💡
- You can not do this using interfaces
    type Employee = {
        name: string;
        startDate: Date;
    };

    type Manager = {
        name: string;
        department: string;
    };

    type TeamLead = Employee & Manager;

    const teamLead: TeamLead = {
        name: "Akshit",
        startDate: new Date(),
        department: "Software developer"
    };

**note** : Unlike 'interfaces', 'types' can not implement 'class'.

**Difference Between `types` and `interfaces` in TypeScript**

 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Feature                         | `types`                                                                               | `interfaces`                                                                           |
| --------------------------------| --------------------------------------------------------------------------------------| ---------------------------------------------------------------------------------------|
| **Declaration**                 | Can define primitive types, union, tuples, and object types.                          | Primarily used to define object shapes and structure.                                  |
| **Extending**                   | Can be extended via intersection (`&`).                                               | Can extend other interfaces and be extended by them using `extends` keyword.           |
| **Merging**                     | Cannot be merged.                                                                     | Automatically merges declarations with the same name.                                  |
| **Use Cases**                   | Useful for defining complex types, including unions, intersections, and mapped types. | Best for defining the shape of an object, especially in APIs or class implementations. |
| **Implements**                  | Cannot be implemented by classes directly.                                            | Can be implemented by classes to enforce a structure.                                  |
| **Computed Properties**         | Supports computed properties.                                                         | Does not support computed properties.                                                  |
| **Usage Flexibility**           | More flexible with unions, intersections, and complex type manipulation.              | More structured and predictable when defining object shapes.                           |
| **Compatibility**               | Works for various types (e.g., unions, intersections, primitives).                    | Primarily for object types and defining contracts.                                     |
 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# Step 8 - Arrays in TS

- If you want to access arrays in typescript, it’s as simple as adding a [] annotation next to the type
- Example 1 : Given an array of positive integers as input, return the maximum value in the array
- Example 2 : Given a list of users, filter out the users that are legal (greater than 18 years of age)
                interface User {
                    firstName: string;
                    lastName: string;
                    age: number;
                }
/*
    1. Arrow functions
       ---------------

    -> Arrow functions in JavaScript provide a concise syntax for writing functions.
    -> They were introduced in ES6 and are especially useful for situations where a shorter function syntax is desired, like callbacks or simple functions. 
    -> Here’s the basic syntax:

        const functionName = (parameter1, parameter2) => {
        // function body
        };

    -> Key Features of Arrow Functions:
        1. Shorter Syntax: Arrow functions are more concise compared to traditional function expressions.

            const add = (a, b) => a + b; // single-line function
        
        2. Implicit Return: If the function body contains only a single expression, the result of that expression is returned automatically, without needing the return keyword.

            const multiply = (x, y) => x * y; // implicitly returns the product
        
        3. No this Binding: Unlike regular functions, arrow functions do not have their own this. 
            Instead, this is lexically scoped, meaning it takes the value from the enclosing context. 
            This is useful when working with event handlers or callbacks.

            - Example:

                function Timer() {
                this.seconds = 0;

                setInterval(() => {
                    this.seconds++; // `this` refers to the Timer object, not the setInterval function
                    console.log(this.seconds);
                }, 1000);
                }

                const myTimer = new Timer();

        4. No arguments Object: Arrow functions don’t have their own arguments object. 
            If you need to access arguments, you must use a regular function or spread/rest syntax.

        5. Cannot be used as Constructors: Arrow functions cannot be used with new to construct objects.
           They don’t have a prototype property.

            Examples:
            1. Basic Function:

                const greet = () => console.log("Hello World");
                greet(); // Output: Hello World
            2. With Parameters:
            
                const square = x => x * x;
                console.log(square(5)); // Output: 25
            
            3. Implicit Return with Objects: If you want to return an object from an arrow function with implicit return, you must wrap the object in parentheses:

                const createObject = (name, age) => ({ name, age });
                console.log(createObject("John", 25)); // Output: { name: "John", age: 25 }
    
        * Arrow functions are perfect for short, simple functions and callbacks but are not ideal in cases where you need dynamic this or arguments.

*/


/*

    2. Map
       ----

    -> In JavaScript, the map() method is used to create a new array by applying a provided function to every element of an existing array. 
    -> It's a powerful tool for transforming arrays in a clean and functional way.

        const newArray = originalArray.map(callback(element, index, array), thisArg);
    
    -> callback: The function to be called on every element of the array. It takes three arguments:
              -  element: The current element being processed.
              -  index (optional): The index of the current element.
              -  array (optional): The array map() was called upon.
    -> thisArg (optional): Value to use as this when executing the callback function.

    -> Key Features
        - Does Not Modify the Original Array: map() returns a new array, leaving the original array unchanged.
        - Transforms Each Element: The function provided to map() is called on every element of the array, and its result is used to create the new array.
        - Same Length as Original Array: The new array will always have the same number of elements as the original array.

    -> Example 1: Basic Usage
    
        const numbers = [1, 2, 3, 4, 5];
        const doubled = numbers.map(num => num * 2);
        console.log(doubled); // Output: [2, 4, 6, 8, 10]
    
    -> Example 2: Mapping Objects
        You can use map() to transform an array of objects.

        const users = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 }
        ];

        const names = users.map(user => user.name);
        console.log(names); // Output: ["Alice", "Bob", "Charlie"]
    -> Example 3: Using Index in map()
        The index of the current element can be accessed and used in the transformation.

        const numbers = [10, 20, 30];
        const withIndex = numbers.map((num, index) => `Index ${index}: ${num}`);
        console.log(withIndex);
        // Output: ["Index 0: 10", "Index 1: 20", "Index 2: 30"]
    -> Example 4: Mapping to Objects
        map() can also return objects as elements in the new array.

        const numbers = [1, 2, 3];
        const objects = numbers.map(num => ({ number: num }));
        console.log(objects);
        // Output: [{ number: 1 }, { number: 2 }, { number: 3 }]
    
    -> Example 5: Chaining map() with Other Methods
        map() is often chained with other array methods like filter(), reduce(), etc.

        const numbers = [1, 2, 3, 4, 5];
        const evenSquares = numbers
        .filter(num => num % 2 === 0)
        .map(num => num * num);

        console.log(evenSquares); // Output: [4, 16]
        
    -> Important Considerations
        - map() will always return a new array of the same length, even if no changes were made to the elements.
        -  If the callback function doesn't return anything (i.e., returns undefined), the new array will contain undefined values.
        
    -> Example:

        const numbers = [1, 2, 3];
        const result = numbers.map(num => {});
        console.log(result); // Output: [undefined, undefined, undefined]
        
    -> When to Use map()
        - Use map() when you need to transform all elements in an array.
        - If you need to filter or reduce the array size, use filter() or reduce() instead.
*/

const arr = [1,2,3,4,5,6,7,8,9]

// return a doubled array
function transformDouble(i){
    return i * 2;
}

const newArr = arr.map(transformDouble);
console.log(newArr);

/*
    3. Filter
    ---------

    -> In JavaScript, the filter() method creates a new array with all elements that pass a test provided by a function. 
    -> This method is commonly used to filter out elements from an array based on certain conditions.

        const newArray = originalArray.filter(callback(element, index, array), thisArg);

*/


// Suppose i want to get all the even numbers from arr

function getEvenTransform(i){
    if(i & 1)
        return false;
    return true;
}
const evenNums = arr.filter(getEvenTransform);
console.log(evenNums);

/*
    We can also write the above function using arrow function
    const evenNums = arr.filter((i) => {
        if(i & 1)
            return false;
        return true;
    });
*/
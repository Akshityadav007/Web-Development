/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/


function calculateTime(n) {
    let nSum = 0;
    const start = Date.now();
    let end = 0;

    for(let i = 1; i <= n; i++)
        nSum += i;

    end = Date.now();
    return (end - start) / 1000;
}


// main program

const n1 = 100, n2 = 100000, n3 = 1000000000;

const sumTime1 = calculateTime(n1);
console.log("The time taken to calculate ", n1, "is", sumTime1, "seconds.");

const sumTime2 = calculateTime(n2);
console.log("The time taken to calculate ", n2, "is", sumTime2, "seconds.");

const sumTime3 = calculateTime(n3);
console.log("The time taken to calculate ", n3, "is", sumTime3, "seconds.");
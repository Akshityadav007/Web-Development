let count = 0;

function printCounter() {
    console.log(count++);
    if (count === 60) count = 0;  // Reset the count after reaching 60
}

function clearConsole() {
    console.clear();  // Clear the console
}

function wrapperFn() {
    clearConsole();    // Clear console first
    printCounter();    // Then print the count
    
    // Call wrapperFn again after 1 second
    setTimeout(wrapperFn, 1000);
}

function counter() {
    setTimeout(wrapperFn, 1000);  // Start the counter after 1 second
}

counter();

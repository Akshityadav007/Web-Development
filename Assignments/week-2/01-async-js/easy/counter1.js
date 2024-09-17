let count = 0;

function printCounter(){
    console.log(count++);
    if(count === 60)
        count = 0;
}
function clearConsole(){
    console.clear();
}
function wrapperFn(){
    printCounter();
    setInterval(clearConsole, 1 * 1000);
}

let intervalId = setInterval(wrapperFn, 1 * 1000);
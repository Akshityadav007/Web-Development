let end1 = 0, end2 = 0, end3 = 0;

function print1(){
    let sumNum = 0;
    for(let i = 0; i < 1000; i++)
        sumNum += i;
    end1 = Date.now();
}


function print2(){
    let suNum = 0;
    for(let i = 0; i < 10000; i++)
        suNum += i;
    end2 = Date.now();
}

function timePrint(){
    console.log("Time taken by setTimeout is:", (end3 - start) / 1000, "seconds and time taken by the function inside is:", (end1 - start) / 1000, "seconds ", (end2 - start) / 1000, " seconds respectively to run!");
}

const start = Date.now();
setTimeout(() => {
    print1();
    print2();
    end3 = Date.now();
}, 1 * 1000);

setTimeout(timePrint, 2 * 1000);

let end1 = 0, end2 = 0;

function print(){
    console.log("Hellow world!");
    end1 = Date.now();
}

function timePrint(){
    console.log("Time taken by setTimeout is: ", (end2 - start) / 1000, " seconds and time taken by the function inside is: ", (end1 - start)/ 1000, " seconds to run!");
}

const start = Date.now();
setTimeout(() => {
    print();
    end2 = Date.now();
}, 1 * 1000);

setTimeout(timePrint, 2 * 1000);
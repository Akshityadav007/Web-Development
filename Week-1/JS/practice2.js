function getEvenNos(arr){
    let evNum = [];
    for(let i = 0; i < arr.length; i++){
        if(!(arr[i] & 1)){
            evNum.push(arr[i]);
        }
    }

    return evNum;
}

function printBiggestNumber(arr){
    let largestNum = arr[0];
    for(let i = 0; i < arr.length; i++){
        largestNum = Math.max(largestNum, arr[i]);
    }
    return largestNum;
}

function reverseANum(num){
    let revNum = 0;
    while(num > 0){
        let rem = num % 10;
        num = Math.floor(num / 10);
        revNum *= 10;
        revNum += rem;
    }

    return revNum;
}
function reverseAllNumbersInArray(arr){
    for(let i = 0;i < arr.length; i++){
        arr[i] = reverseANum(arr[i]);
    }
    return arr;
}


// main program

let numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const evenNos = getEvenNos(numArray);
console.log("Even numbers in the array: ", evenNos.join(" "));

console.log("The largest number in the array is ", printBiggestNumber(numArray));

reverseAllNumbersInArray(numArray);
console.log("Reversed array: ", numArray.join(" "));



const fs = require("fs")

// asynchronous file read
fs.readFile('./sample.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});


// synchronous file read
// try {
//   const data = fs.readFileSync('./sample.txt', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error('Error reading file:', err);
// }

let sum = 0;
for(let i = 0;i < 1000000000; i++){
    sum += i;
}
console.log(sum);




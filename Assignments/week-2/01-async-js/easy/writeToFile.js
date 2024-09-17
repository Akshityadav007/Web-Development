const fs = require("fs")

// re write the file
// fs.writeFile('./sample.txt', 'Hello, This is updated text.', 'utf-8', (err) => {
//     if(err)
//         console.log(err);
//     else{
//         console.log('File write successful!');
//     }
// });

// add text to file
fs.appendFile('./sample.txt', '\nThis is appended text.', 'utf-8', (err) => {
    if(err)
        console.log(err);
    else{
        console.log('File write successful!');
    }
});

fs.readFile('./sample.txt', 'utf-8', (err, data) => {
    if(err)
        console.log(err);
    else{
        console.log(data);
    }
})
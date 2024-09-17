const fs = require("fs");

const filePath = './sample.txt';

// asynchronous read
function myFileReader(){
        return new Promise(function (resolve){
            fs.readFile(filePath, 'utf-8', (err, data) => {
                let cleanStr = data.trim().replace(/\s+/g, ' ');
                resolve(cleanStr);
        });  
    })
}

function myFileWriter(data){
    return new Promise(function(resolve){
        fs.writeFile(filePath, data, 'utf-8', (err) => {
        if(err)
            console.log(err);
        else{
            console.log("File write Successful!");
        }
        });
    })
}


myFileReader().then(myFileWriter);
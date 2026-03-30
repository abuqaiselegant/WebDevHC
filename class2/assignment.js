const fs = require("fs");

function callback(err,data){
    if(err){
        console.log("err while reading the file");
    }
    else{
        console.log(data);
    }
}

fs.readFile("a.txt","utf-8",callback);
console.log("jbjh")
function fsReadFilePromisified(filePath, encoding){
    return new Promise((resolve, reject)=>{
        fs.readFile(filePath, encoding,(err,data)=>{
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

fsReadFilePromisified("a.txt","utf-8").then(callback)
const fs = require("fs");

exports.readJsonFromFile = (filePath)=>new Promise((resolve, reject)=>{
        fs.readFile(filePath, (err, buf)=>{
            if(err){
                reject(err)
            }else{
                resolve(JSON.parse(buf.toString()))
            }
        })
    })

exports.writeJsonToFile = (filePath, data) =>new Promise((res, rej)=>{
        fs.writeFile(filePath, JSON.stringify(data), err=>{
            if(err) rej(err);
            res();
        })
    })
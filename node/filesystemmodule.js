const fs = require('fs');
fs.readFile('pak.txt',"Utf8",(err,data)=>{
    console.log(err,data)
})


//node js intensionally blocks it


const f2 = fs.readFileSync ('pak.txt');
console.log(f2);
console.log("--------------------");

const f3= fs.writeFile('dosri.txt',
    "this is dosri file",
    ()=>{
    console.log("written in the file");
})
// same with writefilesync
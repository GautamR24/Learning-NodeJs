const fs = require('fs');

/**
 * the callback function will run all the contents of the file are ready, till then the other things will
 * get implemented, therefore, the console.log will run before the call back function.
 * So, node js works on asychronous Non-blocking I/O model. It will not wait for the process to get
 * completed instead it will run the next thing and then come back later when the file is ready.
 */
fs.readFile('file.txt','utf-8',(err,data)=>{
    console.log(err,data);
});


/**
 * read file sync.
 * Here, nodeJs will intentionally block the process and will wait untill file reading is completed
 */

const a = fs.readFileSync('file.txt');
console.log(a.toString());


/**
 * write file
 */

fs.writeFile('file2.txt',"this the content",()=>{
    console.log("it is written");
});

console.log("this is finished");

/**
 * write file sync
 */

const a1 = fs.writeFileSync('file3.txt',"this is the only content");
console.log(a1);

console.log("this is finished");
let file = require('fs')

let buffer = file.readFileSync('sample.js')

// console.log("the file is"+ buffer);

//creating file
// file.openSync('abc.txt','w')

file.writeFileSync('abc.txt',"writing soething")
file.writeFileSync('abc.txt',"writing anything")  // content replace
file.appendFileSync('abc.txt',"append thing") // append at last
// file.mkdirSync('myfolder') //create directory
// file.writeFileSync("./myfolder/new.txt","content")

// let content = file.readdirSync('myfolder')
// console.log(content);
// for(let i = 0 ; i<content.length;i++)
// file.unlinkSync('myfolder/'+ content[i]) // remove files in a folder
// file.rmdirSync('myfolder') // remove folder 
// let a = file.existsSync('abc.txt')  check gile exit or not
// console.log(a);
// a= file.lstatSync(__dirname+'/abc.txt') // give a path
// console.log(a.isFile());
// a= file.lstatSync(__dirname+'/abc.txt')
// console.log(a.isDirectory());
// console.log(a);

// for(let i =1;i<=10;i++)
// {
//   let dir = `folder-${i}`
//   file.mkdirSync(dir)
//   file.writeFileSync(dir+"/readme.txt","readme")
// }
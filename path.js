let path = require('path')

// for(let i =1;i<=10;i++)
// {
//   let dir = `folder-${i}`
//   file.mkdirSync(dir)
//   file.writeFileSync(path.join(__dirname,dir),"readme")
// }

console.log(path.join(__dirname,'file.js'));
let ext = path.extname(path.join(__dirname,'file.js'))
console.log(ext);

let name  = path.basename(__dirname)
console.log(name);
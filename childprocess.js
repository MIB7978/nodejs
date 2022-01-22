const cp = require('child_process')

console.log("open chrome")
// cp.execSync('google-chrome https://www.facebook.com') // goinf to website   
// cp.execSync('code')

let output = cp.execSync("node sample.js")
console.log(output)
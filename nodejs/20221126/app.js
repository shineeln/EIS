// console.log(require('./User.js'));

const fs = require('fs');
const path = require('path');

const data = fs.readFile(path.join(__dirname, 'text.txt'),'utf-8',(err,data) {
    if(err) throw err
    else fs.writeFile
})
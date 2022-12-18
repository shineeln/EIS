const express = require("express");
const promise = require("fs/promises")
const path = require("path");

const app = express();

//static buh hund public file nemeh
app.use("/public", express.static('public'));
app.use(express.json());

app.get(["/", "/index"], (req, res) => {
    // res.send("Hello express");
    res.sendFile('views/index.html', {root: __dirname })
})

app.get("/about", (req, res) => {
    res.sendFile('views/about.html', {root: __dirname })
})

app.get("/students", (req, res) => {
    res.send(students)
})

app.post("/students", (req, res) => {
    students.push({id : students.length + 1, name : req.body.name})
    const fileName = './students.json';
    const file = require(fileName);
    file.key = students;
        
    promise.writeFile(fileName, JSON.stringify(students), function writeJSON(err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(file));
        console.log('writing to ' + fileName);
    });
    res.send("success")
})

let students = [];
app.listen(3000, ()=> {
    promise.readFile(path.join(__dirname, "/students.json"), "utf-8").then(file => {
        students = JSON.parse(file);
    }).catch(err => {
        if(err) throw err;
    })
    console.log("server listen");
})
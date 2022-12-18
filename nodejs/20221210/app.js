const { constants } = require("buffer");
const express = require("express");
const fs = require("fs/promises");
const path = require('path');
const { send } = require("process");
const mysql = require('mysql2')
const app = express();
/*
*/

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '89809989',
    database: 'nodejs'
});

//GET POST PUT DELETE //crud




app.use(express.json())
let students;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/students', (req,res)=>{
    connection.query('SELECT * FROM students', (err, data) => {
        if(err) {
            throw err 
        } else {
            res.send(data)
        }
    });
})


app.post('/students',(req,res)=>{
    console.log(req.body.name)
    let name = req.body.name;
    connection.query(`INSERT INTO students SET firstname = '${name}'`, (err, data) => {
        if(err) {
            throw err 
        } else {
            res.send(JSON.stringify(req.body))
        }
    });
})

app.put('/students', (req,res)=>{
    connection.query(`UPDATE students SET firstname = '${req.body.name}' WHERE id = ${parseInt(req.body.id)}`, (err, data) => {
        if(err) {
            throw err 
        } else {
            res.send(JSON.stringify(req.body))
        }
    });
})

app.delete('/students/:id',(req,res)=>{
    connection.query(`DELETE FROM students WHERE id = '${[req.params.id]}'`, (err, data) => {
        if(err) {
            throw err 
        } else {
            res.send(JSON.stringify(req.body))
        }
    });
})


app.listen(3000, async ()=>{
 console.log("server listen 3000port")
})
// https://github.com/bazraatamir/sw-921
//bazraa1111
// hairtaishuu
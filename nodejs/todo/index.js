const { constants } = require("buffer");
const express = require("express");
const fs = require("fs/promises");
const path = require('path');
const { send } = require("process");
const app = express();
const {getTodos,addTodo,editTodo,deleteTodo} = require('./db_utils')
//GET POST PUT DELETE //crud


app.use(express.json())
let todos;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/todos', async(req,res)=>{
    const todos = await getTodos()
    res.send(todos)
})

app.post('/todos',async(req,res)=>{
    let name = req.body.name;

    let ts = Date.now();
    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    let formatDt = year + "-" + month + "-" + date;

    const data = await addTodo(name, formatDt);
    res.send(data)
})

app.post('/todos',async(req,res)=>{
    const data = await editTodo(req);
    res.send(data)
})

app.put('/todos', async(req,res)=>{
    const data = await editTodo(req);
    res.send(data)
})

app.delete('/todos/:id',async(req,res)=>{
    const data = await deleteTodo(req);
    res.send(data)
})

app.listen(3000, async ()=>{
 console.log("server listen 3000port")
})
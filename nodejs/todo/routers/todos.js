const express = require('express');
const router = express.Router();
const {getTodos,addTodo,editTodo,deleteTodo} = require('../db_utils')

router.get('/', async(req,res)=>{
    const todos = await getTodos()
    res.send(todos)
})

router.post('/',async(req,res)=>{
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

router.put('/', async(req,res)=>{
    const data = await editTodo(req);
    res.send(data)
})

router.delete('/:id',async(req,res)=>{
    const data = await deleteTodo(req);
    res.send(data)
})

module.exports = router
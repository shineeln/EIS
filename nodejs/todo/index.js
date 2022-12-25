const { constants } = require("buffer");
const express = require("express");
const fs = require("fs/promises");
const path = require('path');
const { send } = require("process");
const app = express();
const indexRouter = require('./routers');
const todoRouter = require('./routers/todos')
//GET POST PUT DELETE //crud

// app.use(express.static(path.join(__dirname, 'public')))
app.use("/public", express.static('public'));
app.use(express.json())
app.use(['/','index'], indexRouter);
app.use('/todos', todoRouter);

app.listen(3000, async ()=>{
 console.log("server listen 3000port")
})
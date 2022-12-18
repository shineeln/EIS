const connection = require('./connection');

async function  getTodos(){
    const [todos] = await connection.query(`select * from todos`,);
    return todos;
}

async function addTodo(name, formatDt){
    // insert into student(firstname) value('${req.body.name}')
    const data = await connection.query(`INSERT INTO todos SET name = '${name}', completed = 'N', createdDt = '${formatDt}'`);
    return data
}

async function editTodo(req){
    const data = await connection.query(`UPDATE todos SET name = '${req.body.name}', completed = '${req.body.completed}' WHERE id = ${parseInt(req.body.id)}`);
    return data
}

async function deleteTodo(req){
    const data = await connection.query(`DELETE FROM todos WHERE id = '${[req.params.id]}'`);
    return data
}

module.exports ={
    getTodos,
    addTodo,
    editTodo,
    deleteTodo
}
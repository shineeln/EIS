import { useState } from "react";
import TodoItem from "../components/TodoItem";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');

    const changeTodo = (event) => {
        console.log(event.target.value)
        setTodo(event.target.value);
    }

    const done = (event) => {
        setTodos([...todos].map((item) => {
            if(item.id == event.target.id) {
                return {
                    checked : event.target.checked,
                    title : item.title,
                    id : item.id
                }
            }
            return item;
        }))
    }

    const deleteTodo = (event) => {
        setTodos([...todos].filter((item) => item.id != event.target.id));
    }

    const addTodo = () => {
        if(todo) {
            setTodos(todoList => [...todoList, {
                id : todoList.length + 1,
                checked : false,
                title : todo
            }]);
            setTodo('');
        } else {
            alert('invalid input');
        }
    }

    return <div className="container">
        <div className="todoItem">
            <input placeholder="Add a todo" onChange={changeTodo} type="text" id="todo" value={todo}/>
            <button onClick={addTodo}>Add</button>
        </div>
        
        <ul className="todoList">
        {
            todos?.map((item, index) => {
                return <TodoItem key={`item${index}`} click={done} id={item.id} title={item.title} deleteFunc={deleteTodo} checked={item.checked}/>
            })
        }
        </ul>
       
    </div>
}

export default App;
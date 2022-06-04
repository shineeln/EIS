import { Fragment , useState , useReducer } from 'react';
import Header from '../components/Menu';
import Container from '../components/Container';
import Input from '../components/Input';
import Button from '../components/Button';
import {FaTimes} from 'react-icons/fa';
import {BsPencil} from 'react-icons/bs';

const Service = () => {
    const [enteredTodoName , setEnteredTodoName] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);
    const [enteredTodoId, setEnteredTodoId] = useState("");

    const todoReducer = (state = [] , action) => {
        switch(action.type){
            case "INSERT_TODO":
                return [...state , {
                    todo: action.title,
                    id: Math.random().toString().split('.')[1],
                    completed: false
                }];
            case "DELETE_TODO":
                return state.filter(el => el.id !== action.id);
            case "UPDATE_TODO":
                return state.map(el => {
                    if(el.id == action.id) {
                        if(action.title) {
                            el.todo = action.title;
                        }
                        if(action.completed) {
                            el.completed = action.completed;
                        }
                    }
                    return el;
                })
            default: return state;
        }
    }

    const changeTodoName = (e) => {
        if(typeof(e) === 'string') {
            setEnteredTodoName(e);
        } else {
            setEnteredTodoName(e.target.value);
        }
    }

    const [todoList , dispatchTodoAction] = useReducer(todoReducer , []);

    const todoHandler = () => {
        dispatchTodoAction({
            type: "INSERT_TODO",
            title: enteredTodoName
        })
        changeTodoName('');
    };

    

    const completedHandler = (e) => {
        dispatchTodoAction({
            type: "UPDATE_TODO",
            id : e.target.dataset.id,
            completed: e.target.checked
        })
    };

    const updateHandler = () => {
        dispatchTodoAction({
            type: "UPDATE_TODO",
            id : enteredTodoId,
            title: enteredTodoName
        })
        setIsUpdate(false);
        changeTodoName('');
    };

    const deleteTodo = (id) => {
        dispatchTodoAction({
            type: "DELETE_TODO",
            id: id
        })
    }

    const updateUI = (todo) => {
        setIsUpdate(true);
        setEnteredTodoId(todo.id);
        changeTodoName(todo.todo);
    }
    

    return <Fragment>
        <Header title="Service" />
        <main className='w-full'>
            <Container>
                <div className="form flex my-4 gap-4 items-center">
                    <Input value={enteredTodoName} change={changeTodoName} place="Todo name" />
                    {
                        !isUpdate ? <Button click={todoHandler} title="Insert" /> : <Button click={updateHandler} title="Update" />
                    }
                </div>
                <div className='w-full'>
                    {
                        todoList.length === 0 ? <p>Empty</p> :
                        todoList.map(todo => (
                            <div key={todo.id} className='py-2 px-4 rounded-md bg-gray-100 font-bold text-[#333] mb-4 flex items-center justify-between'>
                                <p>
                                    <input className='mx-3' type="checkbox" data-id={todo.id} onChange={completedHandler}/>{todo.todo}
                                </p>
                                <div className='flex items-center gap-2'>
                                    <Button click={() => deleteTodo(todo.id)} circle color="red" title={<FaTimes />} />

                                    <Button click={() => updateUI(todo)} circle color="green" title={<BsPencil />} />
                                </div>
                                
                                    
                            </div>
                        ))
                    }
                </div>
            </Container>
        </main>
    </Fragment>
}

export default Service;
const TodoItem = ({id, title, checked, click, deleteFunc}) => {
    return <li className="todoLi">
        <input type="checkbox" onChange={click} id={id} checked={checked}/>
        <label htmlFor={id}>{title}</label>
        <button id={id} onClick={deleteFunc}>X</button>
    </li>
}

export default TodoItem;
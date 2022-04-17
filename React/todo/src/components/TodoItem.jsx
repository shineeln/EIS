const TodoItem = ({id, title, checked, click, deleteFunc}) => {
    return <li className="todoLi">
        <div>
            <input type="checkbox" onChange={click} id={id} checked={checked}/>
            <label htmlFor={id}>{title}</label>
        </div>
        <button id={id} onClick={deleteFunc}>X</button>
    </li>
}

export default TodoItem;
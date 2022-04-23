import {Fragment , useEffect , useState} from 'react';
import useFetch from '../hooks/useFetch';
import Header from "../components/Menu";
import { useLocation } from 'react-router-dom';
const Todo = () => {
    const {search} = useLocation();
    const id = new URLSearchParams(search).get('id');
    
    const {data} = useFetch('https://jsonplaceholder.typicode.com/todos/' + id);

    useEffect(() => {
        console.log(data)
    } , [data])
    return <Fragment>
        <Header title="Todo" />
        {
            data && <div className='p-4'>
                <div className='py-5 font-bold'>Todo detail</div>
                <p><input type="checkbox" checked={data.completed}/> {data.title}</p> 
            </div>
        }
    </Fragment>
}

export default Todo;
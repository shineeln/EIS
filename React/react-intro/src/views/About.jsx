import {Fragment , useEffect , useState} from 'react';
import useFetch from '../hooks/useFetch';
import Header from "../components/Menu";
import { Link, useLocation } from 'react-router-dom';

const About = () => {
    const {search} = useLocation();
    const id = new URLSearchParams(search).get('user');
    
    const {data} = useFetch('https://jsonplaceholder.typicode.com/users/' + id);
    const posts = useFetch('https://jsonplaceholder.typicode.com/posts?userId=' + id);
    const albums = useFetch('https://jsonplaceholder.typicode.com/albums?userId=' + id);
    const todos = useFetch('https://jsonplaceholder.typicode.com/todos?userId=' + id);

    useEffect(() => {
        console.log(data)
    } , [data])
    return <Fragment>
        <Header title="About" />
        {
            data && <div className='p-4'>
                <div className='py-5 font-bold'>User detail</div>
                <p>email: {data.email}</p> 
                <p>id: {data.id}</p>
                <p>name: {data.name}</p>
                <p>phone: {data.phone}</p>
                <p>username: {data.username}</p>
                <p>website: {data.website}</p>
            </div>
        }
        {
            posts.data && <div className='p-4'>
                <div className='py-5 font-bold'>Post</div>
                {
                    posts.loader ? <p>loading</p> : posts?.data.map((item, index) => (
                        <Link key={index} to={`/post?id=${item.id}`}>
                            <div className='cursor-pointer text-sm py-4'>
                                <p>Title : {item.title}</p>
                                <p>Description : {item.body}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        }
        {
            albums.data && <div className='p-4'>
                <div className='py-5 font-bold'>Album</div>
                {
                    albums.loader ? <p>loading</p> : albums?.data.map((item, index) => (
                        <Link key={index} to={`/photo?id=${item.id}`}>
                            <div className='cursor-pointer text-sm py-4'>
                                <p>Title : {item.title}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        }
        {
            todos.data && <div className='p-4'>
                <div className='py-5 font-bold'>Todos</div>
                {
                    todos.loader ? <p>loading</p> : todos?.data.map((item, index) => (
                        <Link key={index} to={`/todo?id=${item.id}`}>
                            <div className='cursor-pointer text-sm py-4'>
                                <p><input type="checkbox" checked={item.completed}/> {item.title}</p> 
                            </div>
                        </Link>
                    ))
                }
            </div>
        }
    </Fragment>
}

export default About;
// React fragment

// posts => (ng shirheg post (comment)) , albums => (ng shirheg album (zurag)) , todos;
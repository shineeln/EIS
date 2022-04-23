import {Fragment , useEffect , useState} from 'react';
import useFetch from '../hooks/useFetch';
import Header from "../components/Menu";
import { useLocation } from 'react-router-dom';
const Post = () => {
    const {search} = useLocation();
    const id = new URLSearchParams(search).get('id');
    
    const {data} = useFetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const comments = useFetch('https://jsonplaceholder.typicode.com/comments?postId=' + id);



    useEffect(() => {
        console.log(data)
    } , [data])
    return <Fragment>
        <Header title="Post" />
        {
            data && <div className='p-4'>
                <div className='py-5 font-bold'>Post detail</div>
                <p>title: {data.title}</p> 
                <p>Body: {data.body}</p>
            </div>
        }
        {
            comments.data && <div className='p-4'>
                <div className='py-5 font-bold'>Comments</div>
                {
                    comments.loader ? <p>loading</p> : comments?.data.map((item, index) => (
                        <div key={index} className='text-sm py-4'>
                            <p>Name : {item.name} / Email : {item.email}</p>
                            <p>{item.body}</p>
                        </div>
                    ))
                }
            </div>
        }
    </Fragment>
}

export default Post;
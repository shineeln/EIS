import {Fragment , useEffect , useState} from 'react';
import useFetch from '../hooks/useFetch';
import Header from "../components/Menu";
import { useLocation } from 'react-router-dom';
const Photo = () => {
    const {search} = useLocation();
    const id = new URLSearchParams(search).get('id');
    
    const {data} = useFetch('https://jsonplaceholder.typicode.com/albums/' + id);
    const photos = useFetch('https://jsonplaceholder.typicode.com/photos?albumId=' + id);



    useEffect(() => {
        console.log(data)
    } , [data])
    return <Fragment>
        <Header title="Photo" />
        {
            data && <div className='p-4'>
                <div className='py-5 font-bold'>Album detail</div>
                <p>title: {data.title}</p> 
            </div>
        }
        {
            photos.data && <div className='p-4'>
                <div className='py-5 font-bold'>Album photos</div>
                {
                    photos.loader ? <p>loading</p> : photos?.data.map((item, index) => (
                        <div key={index} className='cursor-pointer text-sm py-4'>
                            <p>Title : {item.title}</p>
                            <img src={item.thumbnailUrl} alt="" />
                        </div>
                    ))
                }
            </div>
        }
    </Fragment>
}

export default Photo;
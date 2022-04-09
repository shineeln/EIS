import FeaturedItem from "./FeaturedItem";

const arr = [
    {
        id:1,
        title : 'test', 
        imgUrl : 'https://www.mnfansubs.net/resource/mnfansubs/image/2021/09/27/9ivdnbdsxibwy3z9/%D0%AD%D1%80%20%D1%85%D2%AF%D0%BD%D0%B8%D0%B9%20%D0%BA%D0%BE%D0%BA%D1%82%D0%B5%D0%B9%D0%BB_m.jpg'
    },
    {
        id:2,
        title : 'test', 
        imgUrl : 'https://www.mnfansubs.net/resource/mnfansubs/image/2021/09/27/9ivdnbdsxibwy3z9/%D0%AD%D1%80%20%D1%85%D2%AF%D0%BD%D0%B8%D0%B9%20%D0%BA%D0%BE%D0%BA%D1%82%D0%B5%D0%B9%D0%BB_m.jpg'
    },
    {
        id:3,
        title : 'test', 
        imgUrl : 'https://www.mnfansubs.net/resource/mnfansubs/image/2021/09/27/9ivdnbdsxibwy3z9/%D0%AD%D1%80%20%D1%85%D2%AF%D0%BD%D0%B8%D0%B9%20%D0%BA%D0%BE%D0%BA%D1%82%D0%B5%D0%B9%D0%BB_m.jpg'
    },
    {
        id:4,
        title : 'test', 
        imgUrl : 'https://www.mnfansubs.net/resource/mnfansubs/image/2021/09/27/9ivdnbdsxibwy3z9/%D0%AD%D1%80%20%D1%85%D2%AF%D0%BD%D0%B8%D0%B9%20%D0%BA%D0%BE%D0%BA%D1%82%D0%B5%D0%B9%D0%BB_m.jpg'
    },
    {
        id:5,
        title : 'test', 
        imgUrl : 'https://www.mnfansubs.net/resource/mnfansubs/image/2021/09/27/9ivdnbdsxibwy3z9/%D0%AD%D1%80%20%D1%85%D2%AF%D0%BD%D0%B8%D0%B9%20%D0%BA%D0%BE%D0%BA%D1%82%D0%B5%D0%B9%D0%BB_m.jpg'
    },
    {
        id:6,
        title : 'test', 
        imgUrl : 'https://www.mnfansubs.net/resource/mnfansubs/image/2021/09/27/9ivdnbdsxibwy3z9/%D0%AD%D1%80%20%D1%85%D2%AF%D0%BD%D0%B8%D0%B9%20%D0%BA%D0%BE%D0%BA%D1%82%D0%B5%D0%B9%D0%BB_m.jpg'
    },
    {
        id:7,
        title : 'test', 
        imgUrl : 'https://www.mnfansubs.net/resource/mnfansubs/image/2021/09/27/9ivdnbdsxibwy3z9/%D0%AD%D1%80%20%D1%85%D2%AF%D0%BD%D0%B8%D0%B9%20%D0%BA%D0%BE%D0%BA%D1%82%D0%B5%D0%B9%D0%BB_m.jpg'
    },
    {
        id:8,
        title : 'test', 
        imgUrl : 'https://www.mnfansubs.net/resource/mnfansubs/image/2021/09/27/9ivdnbdsxibwy3z9/%D0%AD%D1%80%20%D1%85%D2%AF%D0%BD%D0%B8%D0%B9%20%D0%BA%D0%BE%D0%BA%D1%82%D0%B5%D0%B9%D0%BB_m.jpg'
    },
    {
        id:9,
        title : 'test', 
        imgUrl : 'https://www.mnfansubs.net/resource/mnfansubs/image/2021/09/27/9ivdnbdsxibwy3z9/%D0%AD%D1%80%20%D1%85%D2%AF%D0%BD%D0%B8%D0%B9%20%D0%BA%D0%BE%D0%BA%D1%82%D0%B5%D0%B9%D0%BB_m.jpg'
    },
    {
        id:10,
        title : 'test', 
        imgUrl : 'https://www.mnfansubs.net/resource/mnfansubs/image/2021/09/27/9ivdnbdsxibwy3z9/%D0%AD%D1%80%20%D1%85%D2%AF%D0%BD%D0%B8%D0%B9%20%D0%BA%D0%BE%D0%BA%D1%82%D0%B5%D0%B9%D0%BB_m.jpg'
    },
    {
        id:11,
        title : 'test', 
        imgUrl : 'https://www.mnfansubs.net/resource/mnfansubs/image/2021/09/27/9ivdnbdsxibwy3z9/%D0%AD%D1%80%20%D1%85%D2%AF%D0%BD%D0%B8%D0%B9%20%D0%BA%D0%BE%D0%BA%D1%82%D0%B5%D0%B9%D0%BB_m.jpg'
    },
    {
        id:12,
        title : 'test', 
        imgUrl : 'https://www.mnfansubs.net/resource/mnfansubs/image/2021/09/27/9ivdnbdsxibwy3z9/%D0%AD%D1%80%20%D1%85%D2%AF%D0%BD%D0%B8%D0%B9%20%D0%BA%D0%BE%D0%BA%D1%82%D0%B5%D0%B9%D0%BB_m.jpg'
    },
    
];
const Featured = () => {
    return   <main>
        <section className="row">
            <figure className="featured">
                <div className="box">
                    {
                        arr.map(el => <FeaturedItem key={el.id} title={el.title} imgUrl={el.imgUrl}/>)
                    }
                </div>
            </figure>
        </section>
    </main>
}

export default Featured;
const FeaturedItem  = ({title, imgUrl}) => {
    return <div className="box-item">
        <a href="#" alt="item-img" className="img-con">
            <img src={imgUrl} alt=""/>
        </a>
        <div className="title">{title}</div>
    </div>
}

export default FeaturedItem;
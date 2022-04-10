const Anime = ({key, imgUrl}) => {
    return <div key={key} class="card-item">
        <a href="#" alt="item-img" class="img-con">
        <img src={imgUrl} alt="" />
        </a>
  </div>
}

export default Anime;
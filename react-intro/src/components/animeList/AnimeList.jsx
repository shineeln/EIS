import Anime from "./Anime";
import {animeList} from "../../data/dummy.js"

const AnimeList = ({title}) => {
    return <figure className="animeList">
        <h3 className="card-title">{title}</h3>
        <div className="card">
            {
                animeList?.map((el,index) => <Anime key={index} imgUrl={el.imgUrl}/>)
            }
        </div>
  </figure>
}

export default AnimeList;
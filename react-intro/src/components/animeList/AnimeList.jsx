import Anime from "./Anime";
const arr = [
    {
        id: 1,
        imgUrl : "https://www.mnfansubs.net/resource/mnfansubs/image/2021/06/18/6zsxvxkyan4yqbz1/Joze%20to%20Tora%20to%20Sakana-tachi%20poster_m.jpg"
    },
    {
        id: 2,
        imgUrl : "https://www.mnfansubs.net/resource/mnfansubs/image/2021/06/18/6zsxvxkyan4yqbz1/Joze%20to%20Tora%20to%20Sakana-tachi%20poster_m.jpg"
    },
    {
        id: 3,
        imgUrl : "https://www.mnfansubs.net/resource/mnfansubs/image/2021/06/18/6zsxvxkyan4yqbz1/Joze%20to%20Tora%20to%20Sakana-tachi%20poster_m.jpg"
    },
    {
        id: 4,
        imgUrl : "https://www.mnfansubs.net/resource/mnfansubs/image/2021/06/18/6zsxvxkyan4yqbz1/Joze%20to%20Tora%20to%20Sakana-tachi%20poster_m.jpg"
    },
    {
        id: 5,
        imgUrl : "https://www.mnfansubs.net/resource/mnfansubs/image/2021/06/18/6zsxvxkyan4yqbz1/Joze%20to%20Tora%20to%20Sakana-tachi%20poster_m.jpg"
    },
    {
        id: 6,
        imgUrl : "https://www.mnfansubs.net/resource/mnfansubs/image/2021/06/18/6zsxvxkyan4yqbz1/Joze%20to%20Tora%20to%20Sakana-tachi%20poster_m.jpg"
    },
    {
        id: 7,
        imgUrl : "https://www.mnfansubs.net/resource/mnfansubs/image/2021/06/18/6zsxvxkyan4yqbz1/Joze%20to%20Tora%20to%20Sakana-tachi%20poster_m.jpg"
    },
    {
        id: 8,
        imgUrl : "https://www.mnfansubs.net/resource/mnfansubs/image/2021/06/18/6zsxvxkyan4yqbz1/Joze%20to%20Tora%20to%20Sakana-tachi%20poster_m.jpg"
    },
]
const AnimeList = ({key, title}) => {
    return <figure key={key} class="animeList">
        <h3 class="card-title">{title}</h3>
        <div class="card">
            {
                arr.map(el => <Anime key={el.id} imgUrl={el.imgUrl}/>)
            }
        </div>
  </figure>
}

export default AnimeList;
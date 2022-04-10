import Menu from "../components/header/Menu.jsx";
import Container from "../components/container/Index.jsx";
import Featured from "../components/featured/Featured.jsx"
import Banner from "../components/banner/Banner.jsx";
import AnimeList from "../components/animeList/AnimeList.jsx";
import Footer from "../components/footer/Footer.jsx";
import {animeTypes} from "../data/dummy.js"

const App = () => {
    return <div>
        <Menu/>
        <Container>
            <Featured/>
            <Banner/>
            {
                animeTypes?.map((el, index) => <AnimeList key={index} title={el.title}/>)
            }
        </Container>
        <Footer/>
    </div>
}

export default App;
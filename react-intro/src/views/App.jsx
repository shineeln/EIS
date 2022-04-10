import Menu from "../components/header/Menu.jsx";
import Featured from "../components/featured/Featured.jsx"
import Banner from "../components/banner/Banner.jsx";
import AnimeList from "../components/animeList/AnimeList.jsx";
import Footer from "../components/footer/Footer.jsx";

const arr = [
    {
        id : 1,
        title : "test"
    },
    {
        id : 2,
        title : "test"
    },
    {
        id : 3,
        title : "test"
    },
    {
        id : 4,
        title : "test"
    },
    {
        id : 5,
        title : "test"
    },
]
const App = () => {
    return <div>
        <Menu/>
        <main>
            <section className="row">
                <Featured/>
                <Banner/>
                {
                    arr.map(el => <AnimeList key={el.id} title={el.title}/>)
                }
            </section>
        </main>
        
        <Footer/>
    </div>
}

export default App;
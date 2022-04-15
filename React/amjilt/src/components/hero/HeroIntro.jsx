import { social } from "../../data/dummy";
import HeroSocial from "./HeroSocial";

const HeroIntro = ({title, subtitle}) => {
    return <div className="hero__box text-white">
        <h1 className="text-2xl">
            <strong className="text-6xl block">{title}</strong>{subtitle}
        </h1>
        <p className="mt-16 text-lg font-light">Сургуулийн менежментийн <br/> ТӨГС удирдахуй</p>
        <HeroSocial items={social}/>            
    </div>
}

export default HeroIntro;
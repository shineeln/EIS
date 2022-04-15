import Image from "../common/Image";
import HeroIntro from "./HeroIntro";

const Hero = () => {
    return <section className="hero w-100 relative h-screen">
        <div className="overlay absolute w-full h-full bg-blue-400 bg-opacity-30"></div>
        <Image classes="object-cover w-full h-full"  imgUrl="https://amjilt.com/landing-assets/upload/background-slider-app.jpg"/>
        <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
            <div className="flex items-center justify-center gap-16">
                <Image classes="w-1/3 transform transition duration-500 hover:-translate-y-4" imgUrl="https://amjilt.com/landing-assets/upload/iphone-slider-big.png"/>
                <div className="overlay"></div>
                <HeroIntro title="АМЖИЛТ 2.0" subtitle="СУРГУУЛИЙН ЦОГЦ СИСТЕМ"/>
            </div>
        </div>
    </section>
}

export default Hero;
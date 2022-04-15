import { Swiper, SwiperSlide } from "swiper/react";
import { slideImg } from "../../data/dummy";
import Image from "../common/Image";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

const About = (props) => {
    return <section className="container mx-auto intro">{props.children}</section>
}

export default About;
import { Swiper, SwiperSlide } from "swiper/react";
import { slideImg } from "../../data/dummy";
import Image from "../common/Image";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

const LandSlide = () => {
    return <section className="container mx-auto swiper my-12">
    <Swiper spaceBetween={30}
            slidesPerView={8}
        >
            {slideImg.map((img, i) => {
                return (
                    <SwiperSlide key={i}>
                        <Image classes="filter grayscale" imgUrl={img} />
                    </SwiperSlide>
                );
            })}
      </Swiper>
    </section>
}

export default LandSlide;
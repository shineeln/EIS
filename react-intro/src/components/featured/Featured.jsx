import FeaturedItem from "./FeaturedItem";
import {featuredArr} from "../../data/dummy.js";

const Featured = () => {
    return  <figure className="featured">
        <div className="box">
            {
                featuredArr?.map((el, index) => <FeaturedItem key={index} title={el.title} imgUrl={el.imgUrl}/>)
            }
        </div>
    </figure>
}

export default Featured;
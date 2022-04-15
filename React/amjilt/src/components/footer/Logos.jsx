import { logos } from "../../data/dummy";
import Image from "../common/Image";

const Logos = () => {
    return <div className="w-3/12 gap-10 mx-auto grid grid-cols-2 justify-items-center">
        {
            logos.map((item,index) => {
                return <Image key={`logo ${index}`} imgUrl={item}/>
            })
        }
	</div>
}

export default Logos;
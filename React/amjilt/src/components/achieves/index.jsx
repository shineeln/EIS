import { achieves } from "../../data/dummy";
import AchieveItem from "./AchieveItem";

const Achieves = () => {
    return <section className="container mx-auto bg-gray-100 py-20">
    <h2 className="text-4xl font-bold text-center">АМЖИЛТ 2.0 СИСТЕМИЙГ АШИГЛАСНААР ГАРАХ ҮР ДҮН
    </h2>
    <hr className="center"/>
    <div className="card-box flex justify-between gap-16">
        {
            achieves.map((item, index) => {
                return <AchieveItem key={index} bg={item.bg} percent={item.percent} desc={item.desc}/>
            })
        }
    </div>
</section>
}

export default Achieves;
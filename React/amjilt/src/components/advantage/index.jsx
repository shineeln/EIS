import { advantages } from "../../data/dummy";
import AdvantageItem from "./AdvantageItem";

const Advantage = () => {
    return 	<section className="mt-16 h-[600px] bg-blue-500">
        <h1 className="text-center p-16 text-gray-50 text-4xl font-bold">СИСТЕМИЙН ДАВУУ ТАЛУУД</h1>
        <div className="grid grid-cols-3 container mx-auto gap-y-32 gap-x-10">
            {
                advantages.map((item, index) => {
                    return <AdvantageItem key={index} imgUrl={item.imgUrl} title={item.title}/>
                })
            }
        </div>        
    </section>
}
export default Advantage;
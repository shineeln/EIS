import { modules } from "../../data/dummy";
const CardBox = () => {
    return <div className="card-box flex justify-between gap-16">
        {
            modules.map((item, index)=> {
                return <div key={`card ${index}`} className="card border rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="card-img">
                    <img src={item.imgUrl} alt=""/>
                </div>
                <div className="card-text p-4">
                    <h1 className="text-base text-gray-600 font-bold mb-4">{item.title}</h1>
                    <p className="text-gray-400 text-sm leading-6">{item.desc}</p>
                </div>
            </div>
            })
        }
    </div>
}
export default CardBox;
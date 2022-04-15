import { achieves } from "../../data/dummy";

const AchieveItem = ({bg, percent, desc}) => {
    return <div style={{background: `url(${bg})`}} className="card border rounded-xl overflow-hidden transform transition duration-500 hover:-translate-y-2 bg-cover bg-opacity-50 relative">
        <p className="mr-4 mt-4 mb-40 text-3xl text-right">{percent}</p>
        <div className="card-text p-4">
            <h1 className="text-base font-bold mb-4 border-l-4 border-blue-600 pl-4">{desc}</h1>
        </div>
    </div>
}

export default AchieveItem;
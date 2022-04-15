const AdvantageItem = ({imgUrl, title}) => {
    return   <figure className="relative text-center flex flex-wrap justify-center">
        <div className="w-16 h-16 bg-blue-400 rounded-full transform transition duration-500 hover:-translate-y-4">
            <img className="self-center" src={imgUrl} alt=""/>
        </div>
        <p className="absolute top-10 py-5 border text-gray-50 border-blue-300 rounded-lg font-bold text-base">{title}</p>
    </figure>
}
export default AdvantageItem;
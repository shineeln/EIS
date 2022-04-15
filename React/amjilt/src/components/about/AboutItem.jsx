import Image from "../common/Image";

const AboutItem = ({idName, title, desc, hrClass}) => {
    return <div id={idName} className="flex-1">
        <h1 className={`text-4xl font-bold ${idName == 'left' ? 'text-right' : ''}`}>{title}</h1>
        <hr className={hrClass}/>
        <p className={`text-gray-500 text-lg ${idName == 'left' ? 'text-right' : ''}`}>{desc}</p>
    </div>
}

export default AboutItem;
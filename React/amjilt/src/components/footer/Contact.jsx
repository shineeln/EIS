import { contacts } from "../../data/dummy";
import Image from "../common/Image";

const Contact = ({title}) => {
    return <div className="flex">
        <div className="w-10 h-10 bg-blue-400 rounded-full transform transition duration-500 hover:-translate-y-2">
            <img className="self-center" src="https://amjilt.com/landing-assets/upload/icons/6.png" alt=""/>
        </div>
        <span className="pl-4 text-gray-500 font-bold">{title}</span>
    </div>
}

export default Contact;
import { moduleItems } from "../../data/dummy";
const Modules = () => {
    return <div className="grid grid-cols-3 gap-4 mt-16">
        <div className="service-item flex p-8 bg-blue-500 rounded-xl justify-center">
            <i className="fas fa-asterisk text-gray-50 mr-4 text-lg"></i>
            <h1 className="text-gray-50">ДҮН БҮРТГЭЛ</h1>
            <ul style={{display: 'none'}}>
                <li>Дүн оруулах</li>
                <li>Дүнгийн мэдээллийг өдөр, сар, улирал, жилээр ангилан графикаар харах</li>
                <li>Дүнгийн өсөлт, бууралтыг&nbsp;харьцуулах</li>
                <li>Дүнгийн мэдээллийг багш,сурагч, эцэг эх, сургуулийн удирдлага хянах боломжтой</li>
            </ul>
        </div>
        {
            moduleItems.map((item, index)=> {
                return <div key={`box ${index}`} className="service-item flex p-8 bg-blue-500 rounded-xl justify-center hover:shadow-inner">
                    <i className="fas fa-asterisk text-gray-50 mr-4 text-lg"></i>
                    <h1 className="text-gray-50">{item}</h1>
                </div>
            })
        }
    </div>
}
export default Modules;
const Navigation = (props) => {
        return  <ul className="flex text-sm uppercase font-bold">
                {
                        props.items?.map((item , index) => {
                        return <li key={`item-${index}`} className={`rounded-3xl px-5 py-2.5 hover:bg-white hover:text-blue-400 ${index == 4 ? 'border border-white-600 ml-3' : ''}`}>
                                        <a className="text-white" href="#contact">{item}</a>
                                </li>
                        })
                }
                
        </ul>
}
export default Navigation;
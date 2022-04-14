const NavItem = (props) => {
    return  <li className={`rounded-3xl px-5 py-2.5 hover:bg-white hover:text-blue-400 ${props.isLogin ? 'border border-white-600 ml-3' : ''}`}>
        <a href="#contact">{props.title}</a>
    </li>
}
export default NavItem;
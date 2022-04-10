import Nav from "../header/Nav";
const Footer = () => {
    return <footer className="footer"> 
    <section className="menu">
        <Nav classNm="fab fa-facebook-f"/>
        <Nav classNm="fab fa-youtube"/>
        <Nav classNm="fab fa-instagram"/>
    </section>
    <section className="copyright">
        <p>MNFansubs © 2007-2020</p>
    </section>
  </footer>
}
export default Footer;
import Nav from "../header/Nav";
const Footer = () => {
    return <footer class="footer"> 
    <section class="menu">
        <Nav classNm="fab fa-facebook-f"/>
        <Nav classNm="fab fa-youtube"/>
        <Nav classNm="fab fa-instagram"/>
    </section>
    <section class="copyright">
        <p>MNFansubs © 2007-2020</p>
    </section>
  </footer>
}
export default Footer;
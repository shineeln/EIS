import Nav from "./Nav";

const Header = () => {
    return  <header className="header">
      <section className="logo">
        <img
          src="https://www.mnfansubs.net/static/webs/mnfansubs/assets/logo-white.png"
          alt=""
        />
      </section>
      <section className="menu">
          <Nav classNm="fas fa-search"/>
          <Nav classNm="fas fa-film"/>
          <Nav classNm="fas fa-bars"/>
      </section>
    </header>
}

export default Header;
import "../styles/header.scss";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = ({open}) => {
  return (
    <header className="header">
      <div className="container flex">
        <h1 className="header__title">
          upSkill
        </h1>
        <nav className="nav">
          <a href="#price" className="nav__link">
            Pricing
          </a>
          <a href="#help" className="nav__link">
            How we help
          </a>
          <a href="#contact" className="nav__link">
            Contact
          </a>
        </nav>
        <GiHamburgerMenu className="icon" onClick={open}/>
      </div>
    </header>
  )
}

export default Navbar
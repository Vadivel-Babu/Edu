import "../styles/menu.scss";
import { RxCross1 } from "react-icons/rx";
const Menu = ({close}) => {
  return (
    <div className="menu">
      <RxCross1 className="icon" onClick={close}/>
      <nav className="nav">
        <a href="#price" className="nav__link" onClick={close}>
          Pricing
        </a>
        <a href="#help" className="nav__link" onClick={close}>
          How we help
        </a>
        <a href="#contact" className="nav__link" onClick={close}>
          Contact
        </a>
      </nav>
    </div>
  )
}

export default Menu
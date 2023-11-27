import "../styles/footer.scss";
import { FaFacebook ,FaInstagram,FaYoutube,FaCcVisa,FaCcMastercard} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__content">
          <h1 className="title">
            upSkill
          </h1>
          <div className="address">
            <h3 className="contact">
              Contact
            </h3>
            <address>
              Poland
              Warszawa, ul. Telewizyjna 24, 01-492
            </address>
          </div>
        </div>
        <div className="policies">
          <p>Terms of use</p>
          <p>Privacy Policy</p>
          <p>Cookies policy</p>
        </div>
        <div className="social">
          <FaFacebook className="icon"/>
          <FaInstagram className="icon"/>
          <FaYoutube className="icon"/>
        </div>
        <div className="payment">
          <FaCcVisa className="icon"/>
          <FaCcMastercard className="icon"/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
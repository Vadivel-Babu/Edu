import "../styles/graduate.scss";
import facebook from "../assets/facebook.png";
import amazon from "../assets/amazon.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";



const Graduate = () => {
  return (
    <section className="graduate">
      <div className="container">
        <div className="graduate__content">
          <h1 className="title">
            Our graduates work at renowned companies
          </h1>
          <div className="companies">
            <img src={facebook} alt="brand" className='img' />
            <img src={amazon} alt="amazon" className='img' />
            <img src={google} alt="google" className='img' />
            <img src={apple} alt="apple" className='img' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Graduate
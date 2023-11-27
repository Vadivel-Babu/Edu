import "../styles/hero.scss";
import { FaCheckCircle } from "react-icons/fa";
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <h1 className="title">
            Online coding 
          </h1>
           <h1 className="title">
            bootcamp
          </h1>
          <div className="guarantee">
            <p className="description">
              With employment <br /> guarantee
            </p>
            <FaCheckCircle className="icon" />
          </div>
          <div className="details">
            <div className="wrapper">
              <p className="block">
                👜 3,000+ employed students
              </p>
              <p className="block">
                &#128293; 20% theory, 80% practice
              </p>
            </div>
            <a href="#" className="explore">Explore Course</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
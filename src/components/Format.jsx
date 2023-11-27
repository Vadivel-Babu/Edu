import "../styles/formate.scss";
import { SlCalender } from "react-icons/sl";
import { CiClock2 } from "react-icons/ci";
const Format = () => {
  return (
    <section className="format" id="price">
      <div className="container">
        <div className="format__content">
          <h1 className="title">
            Studying formats
          </h1>
          <div className="types">
            <div className="fulltime">
              <SlCalender className="icon" />
              <h2 className="type">
                Full time
              </h2>
              <ul className="list">
                <li className="list__item">
                  Study from 9am to 6pm on workdays
                </li>
                <li className="list__item">
                  Move fast with mentor support
                </li>
                <li className="list__item">
                  Pass candidate selection to enroll
                </li>
              </ul>
              <p className="free">
                Free until you get a job in tech
              </p>
            </div>
            <div className="fulltime">
              <CiClock2 className="icon" />
              <h2 className="type">
                Flex
              </h2>
              <ul className="list">
                <li className="list__item">
                  Study whenever you want to
                </li>
                <li className="list__item">
                  Move fast with mentor support
                </li>
                <li className="list__item">
                  Start learning immediately after payment <strong>$1000</strong>
                </li>
              </ul>
              <p className="free refund">
                Get a refund if you don't land a job in tech
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Format
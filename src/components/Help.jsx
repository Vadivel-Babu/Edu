import "../styles/help.scss";
import { BiSolidUpArrow } from "react-icons/bi";
import { GoPersonFill } from "react-icons/go";
import { BsBagFill } from "react-icons/bs";
import { GrDatabase } from "react-icons/gr";
import { MdContactSupport } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";

const Help = () => {
  const [show,setShow] =useState(false);
  return (
    <section className="job" id="help">
      <div className="container">
        <div className="job__support">
          <p className="description">
            How do we help you find a job?
          </p>
          {!show && <button className="btn" onClick={() => setShow(true)}>
            show
            <FaCaretDown />
          </button>}
         {show && <button className="btn" onClick={() => setShow(false)}>
            hide
            <BiSolidUpArrow />
          </button>}
        </div>
        {show && <div className="process">
          <div className="flex">
            <div className="mock__interview">
              <GoPersonFill className="icon"/>
              <h1 className="title">
                Regular Mock Interview
              </h1>
              <p className="details">
                Practice makes perfect, so we conduct regular mock interviews to prime you for the real deal. 
                You're guaranteed to leave a great impression.
              </p>
            </div>
            <div className="employment__module">
              <BsBagFill className="icon" />
              <h1 className="title">
                Employment Module
              </h1>
              <p className="details">
                We help you get your foot in the door, i.e.: create effective resumes, 
                cover letters and professional social media profiles that speak to recruiters.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mock__interview">
              <GrDatabase className="icon"/>
              <h1 className="title">
                Vacancy database
              </h1>
              <p className="details">
                Our platform comes with an up-to-date database of local and global vacancies. 
                Some of them are even made available to Mate graduates first.
              </p>
            </div>
            <div className="employment__module">
              <MdContactSupport className="icon"/>
              <h1 className="title">
                Coordinator support
              </h1>
              <p className="details">
                Mate's coordinators help you evaluate job offers and build salary 
                expectations according to the current market circumstances.
              </p>
            </div>
          </div>
        </div>}
      </div>
    </section>
  )
}

export default Help
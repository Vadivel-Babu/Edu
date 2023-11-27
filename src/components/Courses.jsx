
import "../styles/courses.scss";
const Courses = () => {
  return (
    <section className="courses">
      <div className="container">
        <h1 className="courses__title">
          Our Course
        </h1>
        <div className="courses__type">
          <div className="course">
            <h1 className="title">
              Front-end developer
            </h1>
            <h3 className="subtitle">
              5+ months Newbie-friendly
            </h3>
            <p className="description">
              Front-end developers code the visual layer of sites and web apps, 
              adapt them to various screen sizes, optimize performance and implement animations. 
              They write landing pages and web apps capable of working with existing databases, too!
            </p>
            <button className="btn btn-fulltime">
              Full time
            </button>
            <button className="btn btn-flex">
              Flex
            </button>
          </div>
          <div className="course">
            <h1 className="title">
              Full-stack developer
            </h1>
            <h3 className="subtitle">
              5+ months Newbie-friendly
            </h3>
            <p className="description">
              Go beyond front end: create not only visuals for website and web apps, 
              but also backend, i.e., servers responsible for storing, 
              processing and securing user data.
            </p>
            <button className="btn btn-fulltime">
              Full time
            </button>
            <button className="btn btn-flex">
              Flex
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses
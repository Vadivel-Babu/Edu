import "../styles/getplaced.scss";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Getplaced = () => {
  const flags = [{
    code:"au",
    name:"Australia",},
    {code:"ca",
    name:"Canada",},
    {code:"de",
    name:"Germany",},
    {code:"in",
    name:"India",},
    {code:"nz",
    name:"New Zealand",},
    {code:"gb",
    name:"United Kingdom",},
    {code:"us",
    name:"USA"},
    {code:"no",
    name:"Norway"}
  ]
  return (
    <section className="getplaced">
      <div className="container">
        <div className="getplaced__content">
          <h1 className="title">
            Our students
            <span className="span">
              get hired worldwide
            </span>
          </h1>
          <p className="description">
            We educate and employ globally. 
            Our students and graduates are scattered throughout Europe, 
            Asia, Africa, North America and Australia.
          </p>
        </div>
        <div className="wrapper">
          <div className="carasouel">
            {flags.map((c,i) => (
            <div className="country" key={i}>
              <h3 className="country__name">{c.name}</h3>
              <span className={`fi fi-${c.code}`}></span>
            </div>
            ))}
             {flags.map((c,i) => (
            <div className="country" key={i}>
              <h3 className="country__name">{c.name}</h3>
              <span className={`fi fi-${c.code}`}></span>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Getplaced
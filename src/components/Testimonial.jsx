import { Swiper, SwiperSlide } from 'swiper/react';
import "../styles/testimonial.scss";
import 'swiper/scss';
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
const Testimonial = () => {
  const reviews = [
    {name:"Anna",img:pic1},
    {name:"Monica",img:pic2},
    {name:"Jhon",img:pic3},
    {name:"Martin",img:pic4}
  ];
  return (
    <section className="testimonial">
      <div className="container">
        <h1 className='title'>Student reviews</h1>
        <Swiper
        className='slider'
          spaceBetween={20}
          slidesPerView={1}
        >
          {reviews.map((d,i)=>(
            <SwiperSlide className='slide' key={i}>
              <img src={d.img} alt={d.name} className='img' />
              <h2 className="name">{d.name}</h2>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Cum libero consectetur quis laudantium est molestiae ab at praesentium voluptatem. 
                Tempora voluptatibus, expedita reprehenderit quaerat mollitia distinctio fugit minus inventore vero.
              </p>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}

export default Testimonial
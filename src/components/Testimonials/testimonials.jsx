import React from 'react'
import './Testimonials.css'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from '../../assets/avatar1.jpg'
import img2 from '../../assets/avatar2.jpg'
import img3 from '../../assets/avatar3.jpg'
import img4 from '../../assets/avatar4.jpg'
const data=[
  {
avatar:img1,
name:'Tina Snow',
review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, repellat maxime! Minima nobis ducimus cum veniam repudiandae voluptatibus atque distinctio possimus corporis ipsum nam adipisci similique consequuntur, modi nemo esse'
  },
  {
avatar:img2,
name:'Tina Snow',
review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, repellat maxime! Minima nobis ducimus cum veniam repudiandae voluptatibus atque distinctio possimus corporis ipsum nam adipisci similique consequuntur, modi nemo esse'
  },
  {
avatar:img3,
name:'Tina Snow',
review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, repellat maxime! Minima nobis ducimus cum veniam repudiandae voluptatibus atque distinctio possimus corporis ipsum nam adipisci similique consequuntur, modi nemo esse'
  },
  {
avatar:img4,
name:'Tina Snow',
review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, repellat maxime! Minima nobis ducimus cum veniam repudiandae voluptatibus atque distinctio possimus corporis ipsum nam adipisci similique consequuntur, modi nemo esse'
  }
]
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"   modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
       {
        data.map((item,index)=>{
        return(  
          <SwiperSlide key={index} className='testimonial'>
          <div className="client_avatar">
            <img src={item.avatar} alt="Avatar One" />
          </div>
            <h5 className='client_name'>{item.name}</h5>
            <small className='client_review'>{item.review}</small>
          </SwiperSlide>
          )  })
       }
      </Swiper>
    </section>
  )
}

export default Testimonials

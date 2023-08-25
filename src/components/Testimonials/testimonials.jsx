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

import img1 from '../../assets/client1.jfif'
import img2 from '../../assets/avatar2.jpg'
import img3 from '../../assets/avatar3.jpg'
import img4 from '../../assets/avatar4.jpg'
const data=[
  {
avatar:img1,
name:'sundayezekie725',
review:'AMAZING EXPERIENCE!!!! Mr. awabahmed310 is a highly skilled professional who taught me everything about github and docker! I highly recommend this seller to anyone who wants an EXCEPTIONAL teacher for using Github and more DevOps! Thank you very much Mr. awabahmed310!!! You are the best!!!!!'
  },
  {
avatar:img2,
name:'sukanta139',
review:'Muhammad Awab is an exceptional guy with all the right knowledge and experience. I would definitely recommend his services since his Domain knowledge is very good and clarity of thought is amazing which makes him very efficient. I would definitely use his services in the future.'
  },
  {
avatar:img3,
name:'patricknguepi',
review:'Muhammad was quick to respond to my request, set up the the repository in GitHub actions and provided me with the details step. All was done within a day! I highly recommend him'
  },
  {
avatar:img4,
name:'shahad1232',
review:'Very good service, Muhammad was helpful and interactive and did the job perfectly. Thank you :)'
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

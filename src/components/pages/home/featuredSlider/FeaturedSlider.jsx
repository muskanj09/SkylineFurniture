import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import featured1 from '../../../image/featured1.png'
import featured2 from '../../../image/featured2.png'
import featured3 from '../../../image/featured3.png'
import featured4 from '../../../image/featured4.png'
import featured5 from '../../../image/featured5.png'
import featured6 from '../../../image/featured6.png'
import featured7 from '../../../image/featured7.png'
const FeaturedSlider = () => {
  return <>
      <Swiper className='feature-slide'
       modules={[Navigation, Pagination, A11y]}
       spaceBetween={200}
       loop={true}
       slidesPerView={3}
       navigation
       pagination={{ clickable: true }}
    >


      <SwiperSlide className='imgLink'>
        <a href="#">
            <img src={featured1} className='slide-f' alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="#">
            <img src={featured2} className='slide-f' alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="#">
            <img src={featured3} className='slide-f' alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="#">
            <img src={featured4} className='slide-f' alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="#">
            <img src={featured5} className='slide-f' alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="#">
            <img src={featured6} className='slide-f' alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="#">
            <img src={featured7} className='slide-f' alt="" />
        </a>
      </SwiperSlide>
    </Swiper>
  </>
}

export default FeaturedSlider
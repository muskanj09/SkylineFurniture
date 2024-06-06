import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../slider/slider.css'
import { EffectFade } from 'swiper/modules';
import slide1 from '../../../../image/slider1.jpg'
import slide2 from '../../../../image/slider2.jpg'
import slide3 from '../../../../image/slider3.jpg'
import slide4 from '../../../../image/slider4.jpg'
import slide5 from '../../../../image/slider5.jpg'
import slide6 from '../../../../image/slider6.jpg'
import slide7 from '../../../../image/slider7.jpg'
const Slider = () => {
  return <>
    <Swiper className='swiper-1'
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
    //   spaceBetween={}
    //   effect="fade"
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img src={slide1} className='slider' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} className='slider' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} className='slider' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} className='slider' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} className='slider' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide6} className='slider' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide7} className='slider' alt="" />
      </SwiperSlide>
    </Swiper>
  </>
}

export default Slider
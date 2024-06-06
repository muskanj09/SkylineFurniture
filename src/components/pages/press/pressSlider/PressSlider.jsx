import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../pressSlider/pressSlider.css'
import pressSlide1 from '../../../image/pressSlide1.jpg'
const PressSlider = () => {
  return <>
   <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
      <div className='pressSlide-img'>
                    <img src={pressSlide1} className='press-img' alt="" />
                    <div className='press-text'>
                        <h1>Meganne Wecker</h1>
                        <h2>President, Chief Creative Officer</h2>
                        <p>Since joining the company in her 20s, Meganne has built a reputation as a trailblazer in the furniture world. Under her Leadership, Skyline has pioneered an e-commerce driven supply chain, digital printing, and fashion-forward furniture design. As a recipient of Crains Chicago 40 under 40, Home Furnishing News' Companies on the Rise, The WithIt WOW Award, and Furniture Today's People Issue, Meganne's entrepreneuial prowess is recognized throughout the industry</p>
                        <p><b>How would you describe your design style?</b> I love design that feels effortless yet bold. I tend to gravitate towards contrasts. I will pair striking utilitarian accent pieces with feminine patterns and dynamic color combinations to bring a oom to life.</p>
                        <p><b>What is your favourite Skyline product?</b> The Norm bench was designed and named after my grandfather. We originally released in the 80's and revived it last year. It has stood the test oftime.</p>
                    </div>
                </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  </>
}

export default PressSlider
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../swipe/swipe.css'
import editor1 from '../../../../image/editor1.jpg'
import editor2 from '../../../../image/editor2.jpg'
import editor3 from '../../../../image/editor3.jpg'
import editor4 from '../../../../image/editor4.jpg'
import editor5 from '../../../../image/editor5.jpg'
import editor6 from '../../../../image/editor6.jpg'
import editor7 from '../../../../image/editor7.jpg'
import editor8 from '../../../../image/editor8.jpg'
import editor9 from '../../../../image/editor9.jpg'
import editor10 from '../../../../image/editor10.png'
const Swipe = () => {
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
                <div className='editor-img'>
                    <img src={editor1} className='edit-img' alt="" />
                    <div className='edit-text'>
                        <h1>Meganne Wecker</h1>
                        <h2>President, Chief Creative Officer</h2>
                        <p>Since joining the company in her 20s, Meganne has built a reputation as a trailblazer in the furniture world. Under her Leadership, Skyline has pioneered an e-commerce driven supply chain, digital printing, and fashion-forward furniture design. As a recipient of Crains Chicago 40 under 40, Home Furnishing News' Companies on the Rise, The WithIt WOW Award, and Furniture Today's People Issue, Meganne's entrepreneuial prowess is recognized throughout the industry</p>
                        <p><b>How would you describe your design style?</b> I love design that feels effortless yet bold. I tend to gravitate towards contrasts. I will pair striking utilitarian accent pieces with feminine patterns and dynamic color combinations to bring a oom to life.</p>
                        <p><b>What is your favourite Skyline product?</b> The Norm bench was designed and named after my grandfather. We originally released in the 80's and revived it last year. It has stood the test oftime.</p>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide>
            <div className='editor-img'>
                    <img src={editor2} className='edit-img' alt="" />
                    <div className='edit-text'>
                        <h1>Ted Wecker</h1>
                        <h2>CEO</h2>
                        <p>Ted's journey with Skyline Furniture began during his youth, working in his father's factory during the smmmer. As an ambitious young college grad, Ted joined Skyline and played a pivotal role in steering the company towards the burgeoning direct-mall segment of the furniture market. Together, the father and son team pioeered an innovative supply chain that custom-made furniture on demand and delivered it straight to the customer's doorstep. This approach solidified Skyline Furniture's reputation as a trailblazer in the industry. Today, Ted continues to serve as CEO while also dedicating his time to philanthropic endeavors.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='editor-img'>
                    <img src={editor3} className='edit-img' alt="" />
                    <div className='edit-text'>
                        <h1>Trent Steed</h1>
                        <h2>Executive Vice President</h2>
                        <p>Over 10 years ago, Trent decided to leave his 15 years career in digital marketing to join and help scale the rapidly growing family furniture business. Since joining, Trent has focused his time streamlining business operations, implementing new factory and office capabilities, and building strong teams across departments</p>
                        <p><b>How long have you been at Skyline?</b> 10 years</p>
                        <p><b>What part of your job do you enjoy the most?</b> Working with people across departments and seeing our teams grow and our products come to life through amazing design paired with world-class workmanship</p>
                        <p><b>What should people know about Skyline?</b> We are here to serve our employees and our community. Everything we do is to better the lives of our workers and their families.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='editor-img'>
                    <img src={editor4} className='edit-img' alt="" />
                    <div className='edit-text'>
                        <h1>Meganne Wecker</h1>
                        <h2>President, Chief Creative Officer</h2>
                        <p>Since joining the company in her 20s, Meganne has built a reputation as a trailblazer in the furniture world. Under her Leadership, Skyline has pioneered an e-commerce driven supply chain, digital printing, and fashion-forward furniture design. As a recipient of Crains Chicago 40 under 40, Home Furnishing News' Companies on the Rise, The WithIt WOW Award, and Furniture Today's People Issue, Meganne's entrepreneuial prowess is recognized throughout the industry</p>
                        <p><b>How would you describe your design style?</b> I love design that feels effortless yet bold. I tend to gravitate towards contrasts. I will pair striking utilitarian accent pieces with feminine patterns and dynamic color combinations to bring a oom to life.</p>
                        <p><b>What is your favourite Skyline product?</b> The Norm bench was designed and named after my grandfather. We originally released in the 80's and revived it last year. It has stood the test oftime.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='editor-img'>
                    <img src={editor5} className='edit-img' alt="" />
                    <div className='edit-text'>
                        <h1>Meganne Wecker</h1>
                        <h2>President, Chief Creative Officer</h2>
                        <p>Since joining the company in her 20s, Meganne has built a reputation as a trailblazer in the furniture world. Under her Leadership, Skyline has pioneered an e-commerce driven supply chain, digital printing, and fashion-forward furniture design. As a recipient of Crains Chicago 40 under 40, Home Furnishing News' Companies on the Rise, The WithIt WOW Award, and Furniture Today's People Issue, Meganne's entrepreneuial prowess is recognized throughout the industry</p>
                        <p><b>How would you describe your design style?</b> I love design that feels effortless yet bold. I tend to gravitate towards contrasts. I will pair striking utilitarian accent pieces with feminine patterns and dynamic color combinations to bring a oom to life.</p>
                        <p><b>What is your favourite Skyline product?</b> The Norm bench was designed and named after my grandfather. We originally released in the 80's and revived it last year. It has stood the test oftime.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='editor-img'>
                    <img src={editor6} className='edit-img' alt="" />
                    <div className='edit-text'>
                        <h1>Meganne Wecker</h1>
                        <h2>President, Chief Creative Officer</h2>
                        <p>Since joining the company in her 20s, Meganne has built a reputation as a trailblazer in the furniture world. Under her Leadership, Skyline has pioneered an e-commerce driven supply chain, digital printing, and fashion-forward furniture design. As a recipient of Crains Chicago 40 under 40, Home Furnishing News' Companies on the Rise, The WithIt WOW Award, and Furniture Today's People Issue, Meganne's entrepreneuial prowess is recognized throughout the industry</p>
                        <p><b>How would you describe your design style?</b> I love design that feels effortless yet bold. I tend to gravitate towards contrasts. I will pair striking utilitarian accent pieces with feminine patterns and dynamic color combinations to bring a oom to life.</p>
                        <p><b>What is your favourite Skyline product?</b> The Norm bench was designed and named after my grandfather. We originally released in the 80's and revived it last year. It has stood the test oftime.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='editor-img'>
                    <img src={editor7} className='edit-img' alt="" />
                    <div className='edit-text'>
                        <h1>Meganne Wecker</h1>
                        <h2>President, Chief Creative Officer</h2>
                        <p>Since joining the company in her 20s, Meganne has built a reputation as a trailblazer in the furniture world. Under her Leadership, Skyline has pioneered an e-commerce driven supply chain, digital printing, and fashion-forward furniture design. As a recipient of Crains Chicago 40 under 40, Home Furnishing News' Companies on the Rise, The WithIt WOW Award, and Furniture Today's People Issue, Meganne's entrepreneuial prowess is recognized throughout the industry</p>
                        <p><b>How would you describe your design style?</b> I love design that feels effortless yet bold. I tend to gravitate towards contrasts. I will pair striking utilitarian accent pieces with feminine patterns and dynamic color combinations to bring a oom to life.</p>
                        <p><b>What is your favourite Skyline product?</b> The Norm bench was designed and named after my grandfather. We originally released in the 80's and revived it last year. It has stood the test oftime.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='editor-img'>
                    <img src={editor8} className='edit-img' alt="" />
                    <div className='edit-text'>
                        <h1>Meganne Wecker</h1>
                        <h2>President, Chief Creative Officer</h2>
                        <p>Since joining the company in her 20s, Meganne has built a reputation as a trailblazer in the furniture world. Under her Leadership, Skyline has pioneered an e-commerce driven supply chain, digital printing, and fashion-forward furniture design. As a recipient of Crains Chicago 40 under 40, Home Furnishing News' Companies on the Rise, The WithIt WOW Award, and Furniture Today's People Issue, Meganne's entrepreneuial prowess is recognized throughout the industry</p>
                        <p><b>How would you describe your design style?</b> I love design that feels effortless yet bold. I tend to gravitate towards contrasts. I will pair striking utilitarian accent pieces with feminine patterns and dynamic color combinations to bring a oom to life.</p>
                        <p><b>What is your favourite Skyline product?</b> The Norm bench was designed and named after my grandfather. We originally released in the 80's and revived it last year. It has stood the test oftime.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='editor-img'>
                    <img src={editor9} className='edit-img' alt="" />
                    <div className='edit-text'>
                        <h1>Meganne Wecker</h1>
                        <h2>President, Chief Creative Officer</h2>
                        <p>Since joining the company in her 20s, Meganne has built a reputation as a trailblazer in the furniture world. Under her Leadership, Skyline has pioneered an e-commerce driven supply chain, digital printing, and fashion-forward furniture design. As a recipient of Crains Chicago 40 under 40, Home Furnishing News' Companies on the Rise, The WithIt WOW Award, and Furniture Today's People Issue, Meganne's entrepreneuial prowess is recognized throughout the industry</p>
                        <p><b>How would you describe your design style?</b> I love design that feels effortless yet bold. I tend to gravitate towards contrasts. I will pair striking utilitarian accent pieces with feminine patterns and dynamic color combinations to bring a oom to life.</p>
                        <p><b>What is your favourite Skyline product?</b> The Norm bench was designed and named after my grandfather. We originally released in the 80's and revived it last year. It has stood the test oftime.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='editor-img'>
                    <img src={editor10} className='edit-img' alt="" />
                    <div className='edit-text'>
                        <h1>Meganne Wecker</h1>
                        <h2>President, Chief Creative Officer</h2>
                        <p>Since joining the company in her 20s, Meganne has built a reputation as a trailblazer in the furniture world. Under her Leadership, Skyline has pioneered an e-commerce driven supply chain, digital printing, and fashion-forward furniture design. As a recipient of Crains Chicago 40 under 40, Home Furnishing News' Companies on the Rise, The WithIt WOW Award, and Furniture Today's People Issue, Meganne's entrepreneuial prowess is recognized throughout the industry</p>
                        <p><b>How would you describe your design style?</b> I love design that feels effortless yet bold. I tend to gravitate towards contrasts. I will pair striking utilitarian accent pieces with feminine patterns and dynamic color combinations to bring a oom to life.</p>
                        <p><b>What is your favourite Skyline product?</b> The Norm bench was designed and named after my grandfather. We originally released in the 80's and revived it last year. It has stood the test oftime.</p>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    </>
}

export default Swipe
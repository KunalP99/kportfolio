import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import AboutImage1 from "../images/about-image-1.jpg";
import AboutImage2 from "../images/about-image-2.jpg";

// Only uses the modules it needs by declaring them here
SwiperCore.use([Pagination, Autoplay]);

export default function About() {
  // All images are put into slides array and then displayed in Swiper
  const slides = [
    <SwiperSlide key={"slide-1"}>
      <img className='slide slide-1' src={AboutImage1} />
    </SwiperSlide>,
    <SwiperSlide key={"slide-2"}>
      <img className='slide slide-2' src={AboutImage2} />
    </SwiperSlide>,
  ];

  return (
    <section id='about' className='about-container'>
      <h2>About me</h2>
      <div className='about-content'>
        <div>
          <Swiper
            id='swiper'
            pagination
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop={true}
          >
            {slides}
          </Swiper>
        </div>
        <div>
          <p>
            After graduating from Brunel University, I was set on making games
            for a living. I created a few games and decided to showcase them, by
            making a portfolio from scratch, using basic HTML and CSS. I loved
            the process of making that portfolio, and it inspired me to look
            into frontend development.
          </p>
          <p>
            I was intrigued by the ins and outs of developing a website and
            didn’t realise how much went into creating one. So I decided to
            pursue this field instead.
          </p>
          <p>
            Slowly, I introduced myself to JavaScript and from there I looked
            into frameworks, mainly React. I also researched into pre-processors
            and started implementing Sass into my projects.
          </p>
          <p>
            It’s been a challenging yet enjoyable experience and i’m eager to
            learn and develop more.
          </p>
        </div>
      </div>
    </section>
  );
}

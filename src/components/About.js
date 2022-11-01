import React from "react";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";

export default function About() {
  const { ref: headingRef, inView: headerIsVisible } = useInView({
    triggerOnce: true,
  });

  const { ref: paragraphRef, inView: paragraphIsVisible } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  // All images are put into slides array and then displayed in Swiper
  const slides = [];

  // Pushes a new SwiperSlide componenet into the array to display in the DOM
  for (let i = 1; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <img
          className={`slide slide-${i}`}
          src={require(`../images/about-image-${i}.jpg`)}
          alt={`Slider scene ${i}`}
        />
      </SwiperSlide>
    );
  }

  return (
    <section id='about' className='about-container'>
      <h2
        className={`${headerIsVisible ? "show-header" : ""}`}
        ref={headingRef}
      >
        About me
      </h2>
      <div className='about-content'>
        <div>
          {/* Swiper componenet. Added autoplay and loop so pictures change automatically */}
          <Swiper
            modules={[Pagination, Autoplay]}
            id='swiper'
            pagination
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop={true}
          >
            {slides}
          </Swiper>
        </div>
        <div ref={paragraphRef}>
          <p className={`${paragraphIsVisible ? "show-paragraph" : ""}`}>
            After graduating from Brunel University, I was set on making games
            for a living. I created a few games and decided to showcase them, by
            making a portfolio from scratch, using basic HTML and CSS. I loved
            the process of making that portfolio, and it inspired me to look
            into frontend development.
          </p>
          <p className={`${paragraphIsVisible ? "show-paragraph" : ""}`}>
            I was intrigued by the ins and outs of developing a website and
            didn’t realise how much went into creating one. So I decided to
            pursue this field instead.
          </p>
          <p className={`${paragraphIsVisible ? "show-paragraph" : ""}`}>
            Slowly, I introduced myself to JavaScript and from there I looked
            into frameworks, mainly React. I also researched into pre-processors
            and started implementing Sass into my projects.
          </p>
          <p className={`${paragraphIsVisible ? "show-paragraph" : ""}`}>
            It’s been a challenging yet enjoyable experience and i’m eager to
            learn and develop more.
          </p>
        </div>
      </div>
    </section>
  );
}

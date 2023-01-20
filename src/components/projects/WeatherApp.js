import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import HtmlIcon from "../../images/skills/html-skill.svg";
import SassIcon from "../../images/skills/sass-skill.svg";
import JsIcon from "../../images/skills/js-skill.svg";
import ReactIcon from "../../images/skills/react-skill.svg";
import NextBtn from "../../images/next-project.svg";

export default function WeatherProject() {
  const slides = [];

  // Pushes a new SwiperSlide component into the array to display in the DOM
  for (let i = 1; i < 6; i++) {
    slides.push(
      <SwiperSlide key={`weather-slide-${i}`}>
        <img
          className={`slide slide-${i}`}
          src={require(`../../images/project/weather/weather-image-${i}.png`)}
          alt={`Slider scene ${i}`}
        />
      </SwiperSlide>
    );
  }

  return (
    <div className='project-container'>
      <h3 className='logo'>
        <Link to='/kportfolio'>kportfolio</Link>
      </h3>
      <div className='project-content'>
        <div className='project-header'>
          <p className='project-year'>2022</p>
          <h1 className='project-title'>
            <span className='h1-tag-text'>{`<h1>`}</span>
            {` Weather App`} <span className='h1-tag-text'>{`<`}</span>
            <span className='slash-sign'>{`/`}</span>
            <span span className='h1-tag-text'>{`h1>`}</span>
          </h1>
          <div>
            <p className='project-description'>
              A weather app that fetches data from an API. By searching up a
              city name, it will take the user input and display that cities
              weather information. The background will also change colour based
              on the time.
            </p>
            <div className='projects-btn-container'>
              <a
                className='visit-website-btn'
                href='https://kunalp99.github.io/weather-app-v2/'
                target={"_blank"}
                rel='noreferrer'
              >
                Visit website
              </a>
              <a
                className='github-btn'
                href='https://github.com/KunalP99/weather-app-v2'
                target={"_blank"}
                rel='noreferrer'
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className='swiper-container'>
          <Swiper
            modules={[Pagination, Autoplay]}
            id='project-swiper'
            pagination
            autoplay={{ delay: 10000, disableOnInteraction: false }}
            loop={true}
          >
            {slides}
          </Swiper>
        </div>
        <div className='made-with-container'>
          <h2>Made with:</h2>
          <div className='project-icon-container'>
            <img src={HtmlIcon} alt='HTML icon' />
            <img src={SassIcon} alt='Sass icon' />
            <img src={JsIcon} alt='JavaScript icon' />
            <img src={ReactIcon} alt='React icon' />
          </div>
        </div>
      </div>
      <div className='next-project-btn-container'>
        <Link className='next-project-btn' to='/kportfolio/library-app'>
          Next project <img src={NextBtn} alt='Next project' />
        </Link>
      </div>
    </div>
  );
}

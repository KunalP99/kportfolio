import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import HtmlIcon from "../../images/skills/html-skill.svg";
import CssIcon from "../../images/skills/css-skill.svg";
import JsIcon from "../../images/skills/js-skill.svg";
import NextBtn from "../../images/next-project.svg";

export default function On1Project() {
  const slides = [];

  for (let i = 1; i < 6; i++) {
    slides.push(
      <SwiperSlide key={`on1-slide-${i}`}>
        <img
          className={`slide slide-${i}`}
          src={require(`../../images/project/on1/on1-image-${i}.png`)}
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
            {` On1 Solutions`} <span className='h1-tag-text'>{`<`}</span>
            <span className='slash-sign'>{`/`}</span>
            <span span className='h1-tag-text'>{`h1>`}</span>
          </h1>
          <div>
            <p className='project-description'>
              On1 Solutions is a start-up company, focused on automating the
              process of business notifications to allow for easier and more
              reliable communications between employees and managers. The goal
              for me was to completely redesign/redevelop the website that they
              had already started creating, using GoDaddy. Due to the
              limitations of using this hosting platform, the client wanted more
              than just default templates, which I was able to help with using
              code.
            </p>
            <div className='projects-btn-container'>
              <button className='visit-website-btn'>
                <a href='https://on1solutions.com/' target={"_blank"}>
                  Visit website
                </a>
              </button>
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
            <img src={CssIcon} alt='CSS icon' />
            <img src={JsIcon} alt='JavaScript icon' />
          </div>
        </div>
      </div>
      <div className='next-project-btn-container'>
        <button>
          {/* May need to change a tag to Link tag */}
          <a href='#'>
            Next project <img src={NextBtn} alt='Next project' />
          </a>
        </button>
      </div>
    </div>
  );
}

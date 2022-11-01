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

export default function CvBuilder() {
  const slides = [];

  for (let i = 1; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`cv-slide-${i}`}>
        <img
          className={`slide slide-${i}`}
          src={require(`../../images/project/cv/cv-image-${i}.png`)}
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
            {` CV Builder`} <span className='h1-tag-text'>{`<`}</span>
            <span className='slash-sign'>{`/`}</span>
            <span span className='h1-tag-text'>{`h1>`}</span>
          </h1>
          <div>
            <p className='project-description'>
              This CV builder website allows you to enter your information into
              the forms, which then updates the CV with the information you have
              typed in. This was my first React project that I created, and it
              taught me a lot about how to code and think in React.
            </p>
            <div className='projects-btn-container'>
              <a
                className='visit-website-btn'
                href='https://on1solutions.com/'
                target={"_blank"}
                rel='noreferrer'
              >
                Visit website
              </a>
              <a
                className='github-btn'
                href='https://github.com/KunalP99/cv-projectV2'
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
        {/* May need to change a tag to Link tag */}
        <Link className='next-project-btn' to='/cv-builder'>
          Next project <img src={NextBtn} alt='Next project' />
        </Link>
      </div>
    </div>
  );
}

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

export default function LibraryApp() {
  const slides = [];

  for (let i = 1; i < 4; i++) {
    slides.push(
      <SwiperSlide key={`library-slide-${i}`}>
        <img
          className={`slide slide-${i}`}
          src={require(`../../images/project/library/library-image-${i}.png`)}
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
            {` Library App`} <span className='h1-tag-text'>{`<`}</span>
            <span className='slash-sign'>{`/`}</span>
            <span span className='h1-tag-text'>{`h1>`}</span>
          </h1>
          <div>
            <p className='project-description'>
              An app focused on keeping track of books that have been read and
              books that the user wants to read. Basic information for the book
              can be filled out using the form such as number of pages and
              author. This is one of my first projects using CSS grid.
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
                href='https://github.com/KunalP99/library'
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
            <img src={CssIcon} alt='Css icon' />
            <img src={JsIcon} alt='JavaScript icon' />
          </div>
        </div>
      </div>
      <div className='next-project-btn-container'>
        <Link className='next-project-btn' to='/on1-project'>
          Next project <img src={NextBtn} alt='Next project' />
        </Link>
      </div>
    </div>
  );
}

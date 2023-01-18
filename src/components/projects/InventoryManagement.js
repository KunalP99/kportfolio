import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import HtmlIcon from "../../images/skills/html-skill.svg";
import CssIcon from "../../images/skills/css-skill.svg";
import JsIcon from "../../images/skills/js-skill.svg";
import ReactIcon from "../../images/skills/react-skill.svg";
import NextBtn from "../../images/next-project.svg";

export default function LibraryApp() {
  const slides = [];

  for (let i = 1; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`inventory-slide-${i}`}>
        <img
          className={`slide slide-${i}`}
          src={require(`../../images/project/inventory/inventory-image-${i}.png`)}
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
          <p className='project-year'>2023</p>
          <h1 className='project-title'>
            <span className='h1-tag-text'>{`<h1>`}</span>
            {` Inventory Management`} <span className='h1-tag-text'>{`<`}</span>
            <span className='slash-sign'>{`/`}</span>
            <span span className='h1-tag-text'>{`h1>`}</span>
          </h1>
          <div>
            <p className='project-description'>
              Using ExpressJS for the backend and React for the frontend, I
              created an inventory management system for games. You are able to
              add, delete, edit, and view the games all from one page. To store
              the data, I am using MongoDB so the data will persist. This is my
              first full-stack project.
            </p>
            <div className='projects-btn-container'>
              <a
                className='visit-website-btn'
                href='https://games-inventory.onrender.com/'
                target={"_blank"}
                rel='noreferrer'
              >
                Visit website
              </a>
              <a
                className='github-btn'
                href='https://github.com/KunalP99/inventory-management'
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
            <img src={ReactIcon} alt='React icon' />
          </div>
        </div>
      </div>
      <div className='next-project-btn-container'>
        <Link className='next-project-btn' to='/kportfolio/on1-project'>
          Next project <img src={NextBtn} alt='Next project' />
        </Link>
      </div>
    </div>
  );
}

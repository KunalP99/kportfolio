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
import CypressIcon from "../../images/skills/cypress-skill.svg";
import NextBtn from "../../images/next-project.svg";

export default function ShoppingCart() {
  const slides = [];

  // Pushes a new SwiperSlide component into the array to display in the DOM
  for (let i = 1; i < 4; i++) {
    slides.push(
      <SwiperSlide key={`on1-slide-${i}`}>
        <img
          className={`slide slide-${i}`}
          src={require(`../../images/project/cart/cart-image-${i}.png`)}
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
            {` Shopping Cart`} <span className='h1-tag-text'>{`<`}</span>
            <span className='slash-sign'>{`/`}</span>
            <span span className='h1-tag-text'>{`h1>`}</span>
          </h1>
          <div>
            <p className='project-description'>
              Using a mobile-first design approach, I created a shopping cart
              where the user can add items to a basket, fine tune the quantity
              of the items, remove items from the basket and once done, order
              the item/s. I used React Router for this project, with 3 routes. I
              also used LocalStorage to persist data and used Cypress to test my
              application with End to End testing.
            </p>
            <div className='projects-btn-container'>
              <a
                className='visit-website-btn'
                href='https://kunalp99.github.io/shopping-cart/'
                target={"_blank"}
                rel='noreferrer'
              >
                Visit website
              </a>
              <a
                className='github-btn'
                href='https://github.com/KunalP99/shopping-cart'
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
            <img src={SassIcon} alt='SASS icon' />
            <img src={JsIcon} alt='JavaScript icon' />
            <img src={ReactIcon} alt='React icon' />
            <img src={CypressIcon} alt='Cypress icon' />
          </div>
        </div>
      </div>
      <div className='next-project-btn-container'>
        <Link className='next-project-btn' to='/kportfolio/weather-app'>
          Next project <img src={NextBtn} alt='Next project' />
        </Link>
      </div>
    </div>
  );
}

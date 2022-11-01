import React from "react";
import Arrow from "../images/arrow.svg";
import GithubIcon from "../images/socialIcons/github.svg";
import LinkedinIcon from "../images/socialIcons/linkedin.svg";
import EmailIcon from "../images/socialIcons/email.svg";

export default function Footer() {
  return (
    <section className='footer-container'>
      <div className='btns-container'>
        <div className='arrow-btn-container'>
          <a href='#'>
            <img className='arrow-icon' src={Arrow} alt='Go back to the top' />
          </a>
        </div>
        <div className='social-btns-container'>
          <button className='github-btn'>
            <a
              target={"_blank"}
              rel='noreferrer'
              href='https://github.com/KunalP99'
            >
              <img
                className='github-icon'
                src={GithubIcon}
                alt='Link to Github page'
              />
            </a>
          </button>
          <button className='linkedin-btn'>
            <a
              target={"_blank"}
              rel='noreferrer'
              href='https://www.linkedin.com/in/kunalpatel99/'
            >
              <img
                className='linkedin-icon'
                src={LinkedinIcon}
                alt='Link to LinkedIn page'
              />
            </a>
          </button>
          <button className='email-btn'>
            <a rel='noreferrer' href='mailto:kunal_patel200@hotmail.co.uk'>
              <img
                className='email-icon'
                src={EmailIcon}
                alt='Link to my email address'
              />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import Menu from "../images/menu.svg";
import Close from "../images/close-icon.svg";

export default function Header() {
  const openMenu = () => {
    const navbar = document.querySelector(".navbar");
    const hamburgerMenuIcon = document.querySelector(".hamburger-menu");

    navbar.classList.toggle("show-navbar");
    hamburgerMenuIcon.style.zIndex = "-1";
  };

  const closeMenu = () => {
    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("show-navbar");
  };

  return (
    <section className='header'>
      <h3 className='logo'>
        <Link to='/kportfolio'>kportfolio</Link>
      </h3>
      <nav>
        <ul className='navbar'>
          <img
            onClick={closeMenu}
            className='close-icon'
            src={Close}
            alt=' Close hamburger menu'
          />
          <li className='nav-item'>
            <a onClick={closeMenu} className='nav-link' href='#projects'>
              projects
            </a>
          </li>
          <li className='nav-item'>
            <a onClick={closeMenu} className='nav-link' href='#about'>
              about
            </a>
          </li>
          <li className='nav-item'>
            <a onClick={closeMenu} className='nav-link' href='#skills'>
              skills
            </a>
          </li>
        </ul>
        <img
          onClick={openMenu}
          className='hamburger-menu'
          src={Menu}
          alt='Hamburger menu'
        />
      </nav>
    </section>
  );
}

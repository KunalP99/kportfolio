import React from "react";
import Menu from "../images/menu.svg";
import Close from "../images/close.svg";

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
    <div className='header'>
      <h3 className='logo'>kportfolio</h3>
      <nav>
        <ul className='navbar'>
          <img
            onClick={closeMenu}
            className='close-icon'
            src={Close}
            alt=' Close hamburger menu'
          />
          <li className='nav-item'>
            <a onClick={closeMenu} className='nav-link' href='#'>
              projects
            </a>
          </li>
          <li className='nav-item'>
            <a onClick={closeMenu} className='nav-link' href='#'>
              about
            </a>
          </li>
          <li className='nav-item'>
            <a onClick={closeMenu} className='nav-link' href='#'>
              journey
            </a>
          </li>
          <li className='nav-item'>
            <a onClick={closeMenu} className='nav-link' href='#'>
              contact
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
    </div>
  );
}

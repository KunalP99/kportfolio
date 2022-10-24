import React from "react";
import HtmlIcon from "../images/softwareIcons/html.svg";
import CssIcon from "../images/softwareIcons/css.svg";
import JsIcon from "../images/softwareIcons/js.svg";

export default function Projects() {
  return (
    <section id='projects' className='projects-container'>
      <h2>My Projects</h2>
      <div className='filters-container'>
        <div className='frontend-filter active'>Frontend</div>
        <div className='games-filter'>Games</div>
      </div>
      <div className='grid-container'>
        <div className='card'>
          <p className='card-title'>{`> On1 Solutions `}</p>
          <p className='card-text'>
            Tasked to renovate their website, I helped design/develop the
            product as well as create custom animations from the ground up.
          </p>
          <div className='icons-container'>
            <img src={HtmlIcon} alt='html icon' />
            <img src={CssIcon} alt='css icon' />
            <img src={JsIcon} alt='javascript icon' />
          </div>
        </div>
      </div>
    </section>
  );
}

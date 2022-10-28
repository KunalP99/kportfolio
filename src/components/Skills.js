import React from "react";
import HtmlIcon from "../images/skills/html-skill.svg";
import CssIcon from "../images/skills/css-skill.svg";
import SassIcon from "../images/skills/sass-skill.svg";
import JsIcon from "../images/skills/js-skill.svg";
import ReactIcon from "../images/skills/react-skill.svg";
import FigmaIcon from "../images/skills/figma-skill.svg";

export default function Skills() {
  return (
    <section id='skills' className='skills-container'>
      <h2>My skills</h2>
      <div className='skills-icon-container'>
        <img className='skills-icon' src={HtmlIcon} alt='HTML icon' />
        <img className='skills-icon' src={CssIcon} alt='CSS icon' />
        <img className='skills-icon' src={SassIcon} alt='SASS icon' />
        <img className='skills-icon' src={JsIcon} alt='JavaScript icon' />
        <img className='skills-icon' src={ReactIcon} alt='React icon' />
        <img className='skills-icon' src={FigmaIcon} alt='Figma icon' />
      </div>
    </section>
  );
}

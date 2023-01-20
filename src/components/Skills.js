import React from "react";
import { useInView } from "react-intersection-observer";
import HtmlIcon from "../images/skills/html-skill.svg";
import CssIcon from "../images/skills/css-skill.svg";
import SassIcon from "../images/skills/sass-skill.svg";
import JsIcon from "../images/skills/js-skill.svg";
import ReactIcon from "../images/skills/react-skill.svg";
import FigmaIcon from "../images/skills/figma-skill.svg";
import CypressIcon from "../images/skills/cypress-skill.svg";

export default function Skills() {
  // References for to trigger animation once Skills section is in view
  const { ref: headingRef, inView: headerIsVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: htmlRef, inView: htmlIsVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: cssRef, inView: cssIsVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: sassRef, inView: sassIsVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: jsRef, inView: jsIsVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: reactRef, inView: reactIsVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: figmaRef, inView: figmaIsVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: cypressRef, inView: cypressIsVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <section id='skills' className='skills-container'>
      <h2
        className={`${headerIsVisible ? "show-header" : ""}`}
        ref={headingRef}
      >
        My skills
      </h2>
      <div className='skills-icon-container'>
        <img
          className={`skills-icon html-skills-icon ${
            htmlIsVisible ? "show-html" : ""
          }`}
          ref={htmlRef}
          src={HtmlIcon}
          alt='HTML icon'
        />
        <img
          className={`skills-icon css-skills-icon ${
            cssIsVisible ? "show-css" : ""
          }`}
          ref={cssRef}
          src={CssIcon}
          alt='CSS icon'
        />
        <img
          className={`skills-icon sass-skills-icon ${
            sassIsVisible ? "show-sass" : ""
          }`}
          ref={sassRef}
          src={SassIcon}
          alt='SASS icon'
        />
        <img
          className={`skills-icon js-skills-icon ${
            jsIsVisible ? "show-js" : ""
          }`}
          ref={jsRef}
          src={JsIcon}
          alt='JavaScript icon'
        />
        <img
          className={`skills-icon react-skills-icon ${
            reactIsVisible ? "show-react" : ""
          }`}
          ref={reactRef}
          src={ReactIcon}
          alt='React icon'
        />
        <img
          className={`skills-icon figma-skills-icon ${
            figmaIsVisible ? "show-figma" : ""
          }`}
          ref={figmaRef}
          src={FigmaIcon}
          alt='Figma icon'
        />
        <img
          className={`skills-icon cypress-skills-icon ${
            cypressIsVisible ? "show-cypress" : ""
          }`}
          ref={cypressRef}
          src={CypressIcon}
          alt='Cypress icon'
        />
      </div>
    </section>
  );
}

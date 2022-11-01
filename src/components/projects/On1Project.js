import React from "react";
import { Link } from "react-router-dom";
import Skills from "../Skills";
import "../../styles/css/skills.css";

export default function On1Project() {
  return (
    <div className='on1-project-container'>
      <h3 className='logo'>
        <Link to='/kportfolio'>kportfolio</Link>
      </h3>
      <div className='on1-project-content'>
        <div className='on1-project-header'>
          <p className='project-year'>{`> 2022`}</p>
          <h1 className='project-title'>
            <span>{`<h1>`}</span>
            {` On1 Solutions`} <span>{`</h1>`}</span>
          </h1>
          <div>
            <p className='project-description'>
              On1 Solutions is a start-up company, focusing on automating the
              process of business notifications to allow for easier and more
              reliable communications between employees and managers. The goal
              for me was to completely redesign/redevelop the website that they
              had already started creating, using GoDaddy. Due to the
              limitations of using this hosting platform, the client wanted more
              than just default templates, which I was able to help with using
              code.
            </p>
            <div className='projects-btn-container'>
              <button className='visit-website-btn'>
                <a href='https://on1solutions.com/' target={"_blank"}>
                  Visit website
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

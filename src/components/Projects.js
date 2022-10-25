import React from "react";
import ProjectsCard from "./ProjectsCard";

export default function Projects() {
  const cardInfo = [
    {
      title: "On1 Solutions",
      desc: "Tasked to renovate their website, I helped design/develop the product as well as create custom animations from the ground up.",
      icons: {
        html: "html.svg",
        css: "css.svg",
        js: "js.svg",
      },
    },
    {
      title: "CV Builder",
      desc: "A website that dynamically updates a page once you enter your information inside the form to create a CV.",
      icons: {
        html: "html.svg",
        sass: "sass.svg",
        js: "js.svg",
        react: "react.svg",
      },
    },
    {
      title: "Personal Portfolio",
      desc: "To showcase some of my work, I decided to create a portfolio using everything I have learnt so far.",
      icons: {
        html: "html.svg",
        sass: "sass.svg",
        js: "js.svg",
        react: "react.svg",
      },
    },
    {
      title: "Weather App",
      desc: "Fetching data from an API; I display the information in an meaningful way while allowing the user to search up different cities weather.",
      icons: {
        html: "html.svg",
        sass: "sass.svg",
        js: "js.svg",
      },
    },
  ];

  const cardElements = cardInfo.map((card) => {
    return (
      <ProjectsCard
        title={card.title}
        desc={card.desc}
        html={card.icons.html}
        css={card.icons.css}
        sass={card.icons.sass}
        js={card.icons.js}
        react={card.icons.react}
      />
    );
  });

  return (
    <section id='projects' className='projects-container'>
      <h2>My Projects</h2>
      <div className='filters-container'>
        <div className='frontend-filter active'>Frontend</div>
        <div className='games-filter'>Games</div>
      </div>
      <div className='grid-container'>{cardElements}</div>
    </section>
  );
}

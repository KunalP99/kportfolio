import React from "react";
import { useInView } from "react-intersection-observer";

export default function ProjectsCards(props) {
  const { ref: cardRef, inView: cardIsVisible } = useInView({
    threshold: 1.0,
    triggerOnce: true,
  });

  return (
    <a
      ref={cardRef}
      className={`card ${props.class} ${cardIsVisible ? "show-card" : ""}`}
      href={props.url}
      target={props.target}
    >
      <div>
        <p className='card-title'>{`>` + ` ` + props.title}</p>
        <p className='card-text'>{props.desc}</p>
        <div className='icons-container'>
          {props.html && (
            <img
              src={require(`../images/softwareIcons/${props.html}`)}
              alt='html icon'
            />
          )}
          {props.css && (
            <img
              src={require(`../images/softwareIcons/${props.css}`)}
              alt='css icon'
            />
          )}
          {props.sass && (
            <img
              className='sass-icon'
              src={require(`../images/softwareIcons/${props.sass}`)}
              alt='sass icon'
            />
          )}
          {props.js && (
            <img
              src={require(`../images/softwareIcons/${props.js}`)}
              alt='javascript icon'
            />
          )}
          {props.react && (
            <img
              src={require(`../images/softwareIcons/${props.react}`)}
              alt='react icon'
            />
          )}
          {props.csharp && (
            <img
              className='csharp-icon'
              src={require(`../images/softwareIcons/${props.csharp}`)}
              alt='c# icon'
            />
          )}
          {props.unity && (
            <img
              className='unity-icon'
              src={require(`../images/softwareIcons/${props.unity}`)}
              alt='unity icon'
            />
          )}
          {props.photoshop && (
            <img
              className='photoshop-icon'
              src={require(`../images/softwareIcons/${props.photoshop}`)}
              alt='photoshop icon'
            />
          )}
        </div>
      </div>
    </a>
  );
}

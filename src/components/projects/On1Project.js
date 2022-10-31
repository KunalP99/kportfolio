import React from "react";
import { Link } from "react-router-dom";

export default function On1Project() {
  return (
    <div className='on1-project-container'>
      <h3 className='logo'>
        <Link to='/kportfolio'>kportfolio</Link>
      </h3>
      <div className='on1-project-header'>
        <p className='project-year'> {`> 2022`}</p>
        <h1 className='project-title'>{`<h1> On1 Solutions /h1>`}</h1>
        <p className='project-description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quo
          ipsa architecto odit beatae non! Voluptatum provident quasi minus
          sunt?
        </p>
      </div>
    </div>
  );
}

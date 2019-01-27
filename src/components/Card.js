import React from 'react';
import '../App.css';

import arrow from '../images/arrow-pointing-to-right.svg'

function Card(props) {
  return (
    <div className="card-main">
      <div className="circle">
        <img className="icons" src={props.image} alt="puzzle" />
      </div>
      <h3 className="title-card">{props.title}</h3>
      <p className="desc-card">{props.description}</p>
      <p className="learn-card">LEARN MORE
          <img className="arrow" src={arrow} alt="arrow" />
      </p>
    </div>
  );
}

export default Card;
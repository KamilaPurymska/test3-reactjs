import React from 'react';
import '../App.css'

import Background from '../images/banner-fondo.png'
import Book from '../images/proptech2.png';
import ArrowButton from '../images/arrowButton.svg'

const sectionStyle = {
  backgroundImage: `url(${Background})`,
  width: "90%",
  height: "20%",
  backgroundSize: 'cover',
  display: "flex",
  margin: "0 auto",
  justifyContent: 'space-around',
  color: 'white'
};

function Header() {
  return (
    <div style={sectionStyle}>
      <div className="header-parts-book">
        <img className="header-book" src={Book} alt="book"></img>
      </div>
      <div className="header-parts">
        <p className="header-whatis">What is PropTeach?</p>
        <p className="header-desc">Dowloand our infogaphic and find out.</p>
      </div>
      <div className="header-parts">
        <button className="header-button">DOWLOAND NOW
            <img className="arrow-button" src={ArrowButton} alt="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Header;
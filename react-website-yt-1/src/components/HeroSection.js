import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <>
      <div className='hero-container'>

        <div className='hero-img'></div>

        <div className='hero-content'>

          <h1>MERCEDES BENZ</h1>
          <p>O melhor, ou nada</p>

          <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WHATS NEW<ion-icon name="play-circle-outline"></ion-icon></Button>
          </div>

        </div>

      </div>
    
    </>
  )
}

export default HeroSection
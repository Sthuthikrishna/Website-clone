import React from 'react';
import './style.css';

export default function About() {
  return (
    <div className='about'>
      <img className='cvr' src='./images/cover.png' alt='cover'/>
      <div className='abt'>
        <button><img className='play' src='./images/play.png' alt='play button'/>
        </button> 
        <h3>About Us</h3>
      </div>
    </div>
  )
}

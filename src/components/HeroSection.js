import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import vid from '../videos/video-5.MOV';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container' style={{ display: "block" }}>
      <video src={vid} width="900" height="1600" autoPlay loop muted />
        <Link to='/em' style={{ marginRight: "auto", marginBottom: "auto" }} >
          <button>
            Dang Yeu <i className='far fa-play-circle' />
          </button>
        </Link>

        <Link to='/em' >
          <button>
            De thuong <i className='far fa-play-circle' />
          </button>
        </Link>
    </div>
  );
}

export default HeroSection;

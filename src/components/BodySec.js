import React from 'react';
import '../App.css';
import { Button } from './Button';
import './BodySec.css';
import {Link } from "react-router-dom";

function BodySec() {
return (
<div className='hero-container'>
  <video src='/videos/video-1.mp4' autoPlay loop muted />
  <h1>KNOW YOUR LIMITS</h1>
  <p>What are you waiting for?</p>
  <div className='hero-btns'>
   
   <Link to = "/page2"><Button
    className='btns'
    buttonStyle='btn--outline'
    buttonSize='btn--large'
    >
     GET STARTED
    </Button>
    </Link> 

   </div>
</div>
);
}
export default BodySec;
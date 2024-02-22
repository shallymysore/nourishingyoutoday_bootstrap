import React,{useState} from 'react';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import './Body.css';
import { Button } from './ButtonElement';
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'


export const Body = () => {
  const[hover, setHover] = useState(false)

  const OnHover = () =>{
    setHover(!hover)
  }
  return (
    <section id="home">
      <div className="banner">
       <div className='mainbody-container'>
          <h1>Nourishment Begins Now</h1>
          <p>What are you waiting for?</p>
          <div className='mainbody-btns'>
          <Button to = "contact" onMouseEnter={OnHover} onMouseLeave={OnHover} primary = 'true' dark = 'true'>
              Get Started {hover ? <MdArrowForward />:<MdKeyboardArrowRight />}
          </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

/*<button onClick={() => console.log('connect')}>GET STARTED<ArrowRightCircle size={25} /></button>*/
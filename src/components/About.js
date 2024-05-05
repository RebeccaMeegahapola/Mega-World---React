import './About.css';
import React from 'react'
import { gsap } from "gsap";
import imgb from '../images/beer.png'
import img03 from '../images/build.jpg'

const { useEffect, useRef } = React;

function Box({ children }) { 
  return <img src= {imgb} alt="" className='box'/>
}

function Container({ children }) {
  return <img src= {img03} alt="" className='box1'/>;
}

function About() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  
  useEffect(() => {
   gsap.to(q(".box"), { y: 100 });
  }, []);
  
  return (
    <div className="app" ref={el}>
      <Container/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
    </div>
   
  );
}
export default About;
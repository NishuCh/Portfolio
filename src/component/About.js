import React from 'react'
import "./About.css";
import { Link } from 'react-router-dom';
import abtimg from '../me-avtar.png';



const About = () => {
  return (
    <>
      <div className="About">
        <h2>About <span className='span-abt'>Me</span></h2>
        <div className='abt-row'>
        <div class="abt-image">
      <img src={abtimg} />
    </div>
        <div className="abt-content">
          <h3>I'm Nishu Choudhary</h3>
          <span class="tag">Full Stack Developer|Mern Stack</span>

          <p>I am a Full-Stack developer based in Uttar Pradesh, India.
            I am a pursuing Computer Science And Enggineering from SRGC.
            I am very passionate about improving my coding skills & developing applications & websites.
            I have done a three month internship in the field of website development and I love learning new coding concepts and doing coding in my free time. I am an optimistic 
            and hardworking person. </p>

          <div className="box-container">
            <p><span> email : </span> nishuchoudhary137@gmail.com</p>
            <p><span> place : </span> UP, India - 251002</p>
          </div>
          <div className='button'>
            <Link to ="/work">
      <button className='btn1'>More..</button>
      </Link>
      </div>
   
        </div>
      </div>

      </div>
    </>


  )
}

export default About

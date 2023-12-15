import React from 'react'
import "./Exploremore.css";
const Exploremore = () => {
  return (
    <div className='explore-btn'>
       <div className="title2" id="projects">
    <h2>My <span>Projects</span></h2>
    <div className="shortdesc2">
        <p>Here are the projects which I have created using different Programming Languages.</p>
    </div>
</div>
<div className="project-panel">
    <div className="project-card">
    <img src={"./p1.png"} />
        <div className="info">
            <h4>Movie Finder</h4>
            <p style={{fontSize:16}}>In this project I have used HTML, CSS, JavaScript and APIs.
The primary objective of this project is to provide users with accurate
Movie information and its ratings in the market.
</p>
            <div className="download"><a href="https://nishuch.github.io/Movie-Finder/" target="_blank">Visit Site</a></div>	
        </div>
    </div>
    <div className="project-card">
    <img src={"./p2.png"} />
        <div className="info">
            <h4>Weather Detector</h4>
            <p style={{fontSize:16}}>In this project I have used HTML, CSS, JavaScript and APIs
The objective of this project is to provide users with accurate weather information with random background images.</p>
         
            <div className="download"><a href="https://nishuch.github.io/Cloudpoint.github.io/" target="_blank">Visit Site</a></div>
        </div>
    </div>
    <div className="project-card">
    <img src={"./p6.png"}/>
        <div className="info">
            <h4>Learn Online</h4>
            <p style={{fontSize:16}}>In this Project I have used HtML, CSS, JavaScript and PHP.
Its aim is to serve as a one-stop destination for users seeking study
material related to Computer Science.
</p>
         
            <div className="download"><a href="https://learn-online-web.netlify.app/" target="_blank">Visit Site</a></div>
        </div>
    </div>
    <div className="project-card">
    <img src={"./p5.png"} />
        <div className="info">
            <h4>Love Calculator</h4>
            <p style={{fontSize:16}}>This Is created using Html, CSS, JS In this project I have used the most common and important JavaScript concept of the random value </p>
         
            <div className="download"><a href="https://nishuch.github.io/LoveCalculator/" target="_blank">Visit Site</a></div>
        </div>
    </div>
    <div className="project-card">
    <img src={"./p3.png"} />
        <div className="info">
            <h4>Coffee Shop</h4>
            <p style={{fontSize:16}}>This Is created using Html, CSS, JS In this project I have used all the important concepts of html, css, and JavaScript like table, css flex, grid etc</p>
         
            <div className="download"><a href="#" target="_blank">Visit Site</a></div>
        </div>
    </div>
    <div className="project-card">
    <img src={"./p4.png"} />
        <div className="info">
            <h4>Portfolio</h4>
            <p style={{fontSize:16}}>This Is created using Html, CSS, JS, and ReactJs the primary objective of this project is to give all the detailed information about myself</p>
         
            <div className="download"><a href="#" target="_blank">Visit Site</a></div>
        </div>
        
       
    </div>
    
    </div>
    </div>
  )
}

export default Exploremore

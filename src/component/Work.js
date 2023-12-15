import React from 'react'
import "./Work.css";
import pythoncer from '../Guvi.png';
import cert from '../c1.png';
import cert2 from '../c2.png';
import cert3 from '../c3.png';
import cert4 from '../c4.png';
import { Link } from 'react-router-dom';
const Work = () => {
  return (
    <div className='work'>
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
    <Link to="/Exploremore">
<button className='explore'>Explore More</button>
</Link>
<div className='Training'>
    <h2>Training & <span className='training-span'>Courses</span></h2>
    <div className='certificate-pannel'>
    <div className="certificate-card">
       <Link to="/Pythoncertificate">
   <img src={pythoncer}/>
   </Link>
        <div className="info-certificate">

            <h4>Python Certificate</h4>
        </div>  
    </div>
    <div className="certificate-card">
    <Link to="/LifeCert">
   <img src={cert}/>
   </Link>
        <div className="info-certificate">
            <h4>Life Skill Programme</h4>
        </div>  
    </div>
    <div className="certificate-card">
    <Link to="/JavaCert">
   <img src={cert2}/>
   </Link>
        <div className="info-certificate">
            <h4>Java Certificate</h4>
        </div>  
    </div>
    <div className="certificate-card">
    <Link to="/JavaWorkshop">
   <img src={cert3}/>
   </Link>
        <div className="info-certificate">
            <h4>Java & Android Workshop</h4>
        </div>  
    </div>
    <div className="certificate-card">
    <Link to="/WebCert">
   <img src={cert4}/>
   </Link>
        <div className="info-certificate">
            <h4>Web Development Training</h4>
        </div>  
    </div>
    </div>
</div>
<div className='experience'>
    <h2>Work <span className='exper'>Experience</span></h2>
    <div className='experience-pannel'>
    <div className="experience-card">
     <div className="info-experience">
            <h1>GiftAbled Jobs</h1>
            <h4>Web Developer|Internship</h4>
            <h3>Feb 2023 - May 2023</h3>
        </div>  
        <div className='view'>
                <a href='https://docs.google.com/document/d/1WxoYoGJOKNrlumAlcFvH79FHjoKjgnKF/edit?usp=drive_link&ouid=111491118010246132732&rtpof=true&sd=true' target='_blank'>View Certificate</a>
            </div>  
    </div>
    <div className="experience-card">
     <div className="info-experience">
            <h1>Laqshya Infosoft Solutions </h1>
            <h4>Java Developer|Internship</h4>
            <h3>March 2022 - Feb 2023</h3>
        </div>
        <div className='view'>
                <a href='https://drive.google.com/file/d/1KsjeTvSn4yLVzg9_jW0rqgTF6lJlpdaI/view?usp=drive_link' target='_blank'>View Certificate</a>
            </div>  
    </div>
    </div>
</div>
</div>
  )
}

export default Work

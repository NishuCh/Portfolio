import React from 'react'
import "./Left.css";
import image from '../home_img.png'
// import image from "../youtube.png";

const left = () => {
  return (
    <div className='Left-section'>
    <div className='left'>
        <h2>Hi There !!</h2>
        <p>I'm Nishu <span className='span'>Choudhary</span></p>
        <h3> Passionate for the Web development, I have done an internship in the field of web development as well as I have a good knowledge of web Development and wordpress to I have worked on many projects like E-Library, API based weather detector and movie Finder, Coffee Shop website and many more I have done lots of traning and courses in this field to enhance my skills I am very hardworking and optimistic and I have an ability to learn new things.</h3>
     <div className='button'>
      <button className='btn'><a href='https://drive.google.com/file/d/1Ta3q96xknKZhsrgesY9Ztx7a0Cu63Awh/view?usp=sharing' target='_blank' style={{color:'#ffffff'}}>Resume</a></button>
      </div>
      
    </div>
    <div className='right_section'>
            <div className="right">
          
            <img src={image} />
            </div>
        </div>
    </div>
  )
}

export default left

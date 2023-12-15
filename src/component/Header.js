import React from "react";
import "./Header.css";
import ytimg from '../youtube.png';
import linkinimg from '../linkedin.png';
import { Link} from "react-router-dom";


const Navbar = () => {
  return (
   
      <div className='Navbar'>

        <div className='logo'>
          <h2>Portfolio</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={'/'} className="Link">Home</Link>
            </li>
            <li>
              <Link to={'/about'} className="Link">About</Link>
            </li>
            <li>
              <Link to={'/skills'} className="Link">Skills</Link>
            </li>
            <li>
              <Link to={'/work'} className="Link">Work</Link>
            </li>
            <li>
              <Link to={'/education'} className="Link">Education</Link>
            </li>
           
            <li>
              <Link to={'/contact'} className="Link">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="social_link">
          <a href="https://www.youtube.com/c/SuccessPointForLearners"><img src={ytimg} /></a>
         <a href="https://www.linkedin.com/in/nishu-choudhary-0a213123a"><img src={linkinimg} /></a>

        </div>
      </div>
    
  );
}

export default Navbar

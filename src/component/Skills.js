import React from 'react'
import './Skills.css';
import htmlimg from '../html-5.png';
import cssimg from '../css-3.png';
import jsimg from '../java-script.png';
import reactimg from '../react.png';
import nodeimg from '../nodejs.png';
import phpimg from '../php.png';
import cimg from '../c-.png';
import clanimg from '../letter-c.png';
import javaimg from '../java.png';
import pythonimg from '../python.png';
import sqlimg from '../sql-server.png';
import express from '../express.png';
import wordpress from '../wordpress.png';
import mongodb from '../mongodb.png';

const Skills = () => {
  return (
    <div className='Skills'>
        <div className='skill-heading'>
            <h2>Skills & <span>Abilities</span></h2>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='img'>
                    <div className='info'>
                    <img src={htmlimg} className='image' />
                    <span className='tittle'>HTML5</span>
                    </div>
                </div>
                <div className='img'>
                    <div className='info'>
                    <img src={cssimg} className='image' />
                    <span className='tittle'>CSS</span>
                    </div>
                </div>
                <div className='img'>
                    <div className='info'>
                    <img src={jsimg} className='image' />
                    <span className='tittle'>JavaScript</span>
                    </div>
                </div>
                <div className='img'>
                    <div className='info'>
                    <img src={reactimg} className='image' />
                    <span className='tittle'>React Js</span>
                    </div>
                </div>
                <div className='img'>
                    <div className='info'>
                    <img src={nodeimg} className='image' />
                    <span className='tittle'>Node Js</span>
                    </div>
                </div>
                <div className='img'>
                    <div className='info'>
                    <img src={phpimg} className='image' />
                    <span className='tittle'>PHP</span>
                    </div>
                </div>
                <div className='img'>
                    <div className='info'>
                    <img src={cimg} className='image' />
                    <span className='tittle'>C++ Language</span>
                    </div>
                </div>
                <div className='img'>
                    <div className='info'>
                    <img src={clanimg} className='image' />
                    <span className='tittle'>C Language</span>
                    </div>
                </div>
                <div className='img'>
                    <div className='info'>
                    <img src={javaimg} className='image' />
                    <span className='tittle'>Java</span>
                    </div>
                </div>
                <div className='img'>
                    <div className='info'>
                    <img src={pythonimg} className='image' />
                    <span className='tittle'>Python</span>
                    </div>
                </div>
                <div className='img'>
                    <div className='info'>
                    <img src={sqlimg} className='image' />
                    <span className='tittle'>SQL</span>
                    </div>
                </div>
                <div className='img'>
                    <div className='info'>
                    <img src={wordpress} className='image' />
                    <span className='tittle'>Wordpress</span>
                    </div>
                </div>
                <div className='img'>
                    <div className='info'>
                    <img src={express} className='image' />
                    <span className='tittle'>ES6</span>
                    </div>
                </div>
                <div className='img'>
                    <div className='info'>
                    <img src={mongodb} className='image' />
                    <span className='tittle'>MongoDB</span>
                    </div>
                </div>

            </div>
            
           
        </div>
            </div>
  )
}

export default Skills

import React from 'react'
import "./Education.css";
import kvimg from '../kv.jpg';
import srgcimg from '../srgc.jpg';

const Education = () => {
  return (
    <div className='education'>
      <h1 className="heading"> My <span>Education</span></h1>

<p className="qoute">Education is not the learning of facts, but the training of the mind to think.</p>

<div className="box-container">

<div className="box">
    <div className="image">
    <img src={srgcimg} />
    </div>
    <div className="edu-content">
    <h3>Bachelor of Engineering in Computer Science</h3>
    <p>Shri Ram Group Of Colleges | SRGC</p>
    <h4>2020-2024 | Pursuing</h4>
    </div>
</div>

<div className="box">
  <div className="image2">
  <img src={kvimg} />
  </div>
  <div className="edu-content">
  <h3>Kendriya Vidyalaya Muzaffarnagar | KV</h3>
  <p>10th and 12th | CBSE</p>
  <h4>2018-2020 | Completed</h4>
  </div>
</div>

</div>
    </div>
  )
}

export default Education

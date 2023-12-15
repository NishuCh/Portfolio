import React, { useState } from 'react'
import "./Pythoncertificate.css";
import pythoncert from '../Guvi.png';
import { Link } from 'react-router-dom';
const Pythoncertificate = () => {
  const [close,setClose]= useState(false)
  const remove = ()=>{
    setClose(!close)
  }
  return (
    <div>
      <div className='pythcer'>
        <Link to="/work">
      <i class="fa fa-times" ></i>
      </Link>
      <img src={pythoncert}/>
      </div>
    </div>
  )
}

export default Pythoncertificate

import React, { useState } from 'react'
import web from './c4.png';
import { Link } from 'react-router-dom';
const WebCert = () => {
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
      <img src={web}/>
      </div>
    </div>
  )
}

export default WebCert

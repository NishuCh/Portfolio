import React, { useState } from 'react'
import javacert from './c2.png';
import { Link } from 'react-router-dom';
const JavaCert = () => {
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
      <img src={javacert}/>
      </div>
    </div>
  )
}

export default JavaCert

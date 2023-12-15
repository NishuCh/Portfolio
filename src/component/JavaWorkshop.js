import React, { useState } from 'react'
import androidcert from '../c3.png';
import { Link } from 'react-router-dom';
const JavaWorkshop = () => {
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
      <img src={androidcert}/>
      </div>
    </div>
  )
}

export default JavaWorkshop

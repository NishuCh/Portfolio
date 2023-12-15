import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import life from './c1.png';

const LifeCert = () => {
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
      <img src={life}/>
      </div>
    </div>
  )
}

export default LifeCert

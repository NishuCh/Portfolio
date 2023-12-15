import React, { useState } from 'react'
import lifeskill from './c1.png';
import { Link } from 'react-router-dom'; 
const LifeSkillCert = () => {
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
      <img src={lifeskill}/>
      </div>
    </div>
  )
}

export default LifeSkillCert

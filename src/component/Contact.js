import React from 'react'
import conimg from '../contact1.png';
import "./Contact.css";
import { useForm } from 'react-hook-form';
import {useState} from 'react';


const Form = () => {
  // const [formValues, setFormValues] = useState({
  //   first_name: "",
  //   email: "",
  //   message: "",
    
  // });
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // let emptyvals = { first_name: "", email: "", message: "" };
    // setFormValues(emptyvals);
    reset();
  }
 

  return (
    <div className='contact'>
      <div className='con-heading'>
        <h2>Get In <span className='con-span'>Touch</span></h2>
       
      </div>
      <div className='con-container'>
        <div className='con-content'>
          <img src={conimg} />
        </div>
        <form className='con-form' onSubmit={handleSubmit(onSubmit)} action=''>


          <div className='con-row'>

            <div className='con-col'>
              <input className='form-control' type='text' name='first_name' placeholder='Your Name'
              {...register('first_name', {
                required: "You must enter your name",
                minLength: {
                  value: 3,
                  message: "Please enter atleast three characters"
                }
              })} />
              
            </div>
            {errors.first_name && <span className='form_validation'>{errors.first_name.message}</span>}
          </div>

          <div className='con-row'>

            <div className='con-col'><input className='form-control' style={{textTransform:"lowercase"}} type='email' name='email' placeholder='E-Mail' 
              {...register('email', {
                required: "You must enter your email",
                minLength: {
                  value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Please enter atleast three characters"
                }
              })} />
              </div>
              {errors.email && <span className='form_validation'>{errors.email.message}</span>}
          </div>
          <div className='con-row'>

            <div className='con-col'><textarea name="message" className="textarea" placeholder='Message'
            {...register("message")}></textarea></div>
          </div>
          <div className='con-row'>
            <div className='sub-btn'><button type='submit' className='sub'>Submit</button></div>

          </div>
        </form>
      </div>
    </div>



  )
}

export default Form

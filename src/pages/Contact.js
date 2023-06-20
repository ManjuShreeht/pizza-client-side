import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/contact.css'

import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import { useSelector } from 'react-redux';

const Contact = () => {
  const { theme } = useSelector((state) => state.DarkReducer);
  return (
    <div className={`contact ${theme==="light"?"c-light":"c-dark"}`}>
       <h1 >Contact Us</h1>
      <div className='flex'>
        <div>
        <img
              src='https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000'
           
            alt="contactus" className='contactimg'
            
          />
        </div>
        <div className='contact-p'>
        <p >
            any query and info about prodduct feel free to call<br/>
             anytime we 24X7
            vaialible
          </p>
          <p  >
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p  >
            <BiPhoneCall /> : 012-3456789
          </p>
          <p >
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
        </div>
    </div>
  )
}

export default Contact
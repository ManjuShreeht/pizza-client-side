import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/contact.css'

import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import { useSelector } from 'react-redux';

const About = () => {
  const { theme } = useSelector((state) => state.DarkReducer);
  return (
    <div className={`contact ${theme==="light"?"c-light":"c-dark"}`}>
    <h1 >About Us</h1>
   <div className='flex'>
     <div>
     <img
           src='https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000'
        
         alt="contactus" className='contactimg'
         
       />
     </div>
     <div className='contact-p'>
     <p >
          USPizza is all about quality you can trust. As one of the original
           founding Pizza brands and the 3rd largest Pizza chain in India,
            our sole mission is making the freshest, tastiest and funnest Pizza around.
Our classic pan pizza will always be a fan favourite, with a soft and chewy
 crust perfectly balancing out the healthy tomato pure and mozzarella - cheddar blended cheese.

           
          </p>
          <p >
          Our newest addition of Puree sauces will blow your mind.
           Chose between a spicy buffalo, sweet bbq, tangy chipotle 
           can creamy makhni to perfectly compliment your toppings and crust.
           Our suggestions of combinations might be helpful but ultimately the power lies with you.
          </p>
     </div>
     </div>
 </div>
  )
}

export default About
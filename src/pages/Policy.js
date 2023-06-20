import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/contact.css'

import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import { useSelector } from 'react-redux';

const Policy = () => {
  const { theme } = useSelector((state) => state.DarkReducer);
  return (
    <div className={`contact ${theme==="light"?"c-light":"c-dark"}`}>
       <h1 >Terms And Policy</h1>
      <div className='flex'>
        <div>
        <img
              src='https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000'
           
            alt="contactus" className='contactimg'
            
          />
        </div>
        <div className='contact-p'>
        <p >Please read these terms and conditions of use
          carefully. BY accessing web using online ordering, with respect to Franchise Stores, you acknowledge and agree that We (a)
are only facilitating your transaction with the Franchise Stores that you have selected to provide you
with the products you have ordered; (b) do not provide you with any products; and (c) do not store
any payment information and only facilitate online payments for the benefit of Franchise Stores from
which you have ordered products and/or services; 
.</p>
          <p >These Terms & Conditions are published in accordance with the Information Technology Act,
2000, Consumer Protection Act, 2019,</p>
        </div>
        </div>
    </div>
  )
}

export default Policy
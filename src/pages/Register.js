import React, { useState } from 'react'
import '../styles/login.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userRegisetr } from '../actions/UserActions'
import { toast } from "react-toastify";

const Register = () => {
  const [username,setName]=useState('')
    const [mobile,setMobile]=useState('') 
     const [email,setEmail]=useState('') 
      const [password,setPassword]=useState('')     
      const dispatch=useDispatch()
      const { theme } = useSelector((state) => state.DarkReducer);
      const handleSubmit=(e)=>{
        e.preventDefault();
        
         
          if(password.length<7){
            return toast.error('password should be more than 7 character')
          }
          if(mobile.length>0 && mobile.length<10  ){
            return toast.error('enter 10 digit phone number')
          }
         const user={
           username,
           email,
           mobile,
           password,
          
          }
          dispatch(userRegisetr(user))
        
      
        
     
      }



  return (
    <div className={`log ${theme==="light"?"l-light":"l-dark"}`}>
      <h3>Register Page</h3>
   
    <div className='login'>
      <form className={`flex-login ${theme=="light"?"lo-light":"lo-dark"}`} onSubmit={handleSubmit}>
      <input type="text" placeholder='enter name' required name='username' value={username} 
       onChange={(e)=>setName(e.target.value)} />
      <input type="text" placeholder='enter email' required name='email' value={email} 
       onChange={(e)=>setEmail(e.target.value)}/>
      <input type="number" placeholder='enter mobile Number' required value={mobile} name='mobile'
       onChange={(e)=>setMobile(e.target.value)} />
      <input type="password" placeholder='enter password' required value={password} name='password'
       onChange={(e)=>setPassword(e.target.value)} />
      <button type="submit" >Register</button>
      <Link to='/login'>Click Here To <b>Login</b></Link>
      
      </form>
    </div>
    </div>
  )
}

export default Register
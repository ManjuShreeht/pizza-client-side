import React, { useState } from 'react'
import '../styles/login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../actions/UserActions';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const { loading, error, success } = useSelector(
    (state) => state.userLoginReducer
  );


  const handleSubmit = (e) => {
    e.preventDefault();

     const user = {
      email,
      password,
    };
    dispatch(userLogin(user));
  
   
  };

  const { theme } = useSelector((state) => state.DarkReducer);
  return (
    <div className={`log ${theme==="light"?"l-light":"l-dark"}`}>
      <h3>Login Page</h3>
   
    <div className='login'>
      <form className={`flex-login ${theme=="light"?"lo-light":"lo-dark"}`} onSubmit={handleSubmit}>
      <input type="text" placeholder='enter email' required  value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder='enter password' required   value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" >Login</button>
      <Link to='/register' >Click Here To <b>Register</b></Link>
      
      </form>
    </div>
    </div>
  )
}

export default Login
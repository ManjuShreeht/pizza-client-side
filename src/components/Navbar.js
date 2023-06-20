import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import About from './../pages/About';
import '../styles/navbar.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { DarkAct } from '../actions/DarkAction';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/UserActions';
import { getCart } from '../actions/cartAction';
const Navbar = () => {


  const { theme } = useSelector((state) => state.DarkReducer);

  const userdata = useSelector((state) => state.userLoginReducer);
  const { currentUser,loading } = userdata;

  const cartstate = useSelector((state) => state.getCartReducer);
  const { cart } = cartstate;
const dispatch=useDispatch()
  const changetheme = () => {
    if (theme == "light") {
      dispatch(DarkAct("dark"));
    } else {
      dispatch(DarkAct("light"));
    }
  };
  useEffect(()=>{
    if(currentUser){
    dispatch(getCart(currentUser));
    }
  },[cart])
    const user=false
  return (
    <div className={`${theme==="light"?"nav":"darknav"}`}>
            <img src='https://png.pngtree.com/png-vector/20220929/ourmid/pngtree-word-pizza-made-from-pizza-slices-png-image_6222066.png' alt="logo" className='logo' />
        <div className='innav'>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/policy'>Terms And Polices</Link>
        </div>
        <div className='innav const'>
            { currentUser?(<>
            <Link to='#'>{currentUser.username}</Link>
            {currentUser && currentUser.isAdmin?(<>
              <button style={{color:theme==="light"?"black":"white"}} className='btn' onClick={() => dispatch(logoutUser())}>Logout</button>
           
            </>):(<>
            <Link to='/order'>Orders</Link>
            <button style={{color:theme==="light"?"black":"white"}} className='btn' onClick={() => dispatch(logoutUser())}>Logout</button>
           </>) }
           </>
           ):(
            <Link to='/login'>Login</Link>
            )
             }
             {currentUser && currentUser.isAdmin?(""):(
            <Link to='/cart'><AiOutlineShoppingCart style={{width:"30px",height:"40px"}}/><span>{cart?cart?.length:"0"}</span>
            </Link>)}
          <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changetheme} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
</div>

        </div>
        
    </div>
  )
}

export default Navbar
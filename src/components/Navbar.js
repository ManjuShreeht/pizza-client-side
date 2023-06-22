import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import About from './../pages/About';
import '../styles/navbar.css'
import { AiOutlineShoppingCart,AiFillCloseCircle } from "react-icons/ai";
import {BiMenu} from 'react-icons/bi'
import { DarkAct } from '../actions/DarkAction';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/UserActions';
import { getCart } from '../actions/cartAction';
const Navbar = () => {

 const [clicked,setClicked]=useState(false)


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
    
const dis=()=>{
  setClicked(!clicked)
}


  return (
    <div className={` nav ${theme==="light"?"light-nav":"darknav"}`}>
    <div className="nav1" >
    <div className='innav1 '>
      {clicked ? <AiFillCloseCircle className='icon' onClick={dis} />: 
      <BiMenu className="icon" onClick={dis}/>}
            <div className='aaa'>

           
            <img src='https://cdn.pixabay.com/photo/2020/03/08/16/04/pizza-4912871_1280.png' alt="logo" className={` logo ${theme=="light"?"l-img":"d-img"}`} />
            </div>
        </div>
        <ul className={`innav none ${clicked?"active":"none"} `} >
           <li> <Link to='/' onClick={()=>setClicked(false)}  >Home</Link></li>
           <li> <Link to='/contact' onClick={()=>setClicked(false)} >Contact Us</Link></li>
           <li><Link to='/about' onClick={()=>setClicked(false)} >About Us</Link></li>
           <li><Link to='/policy' onClick={()=>setClicked(false)} >Terms And Polices</Link></li>
        </ul>
        <ul className='innav const'>
            { currentUser?(<>
            <li >{currentUser.username}</li>
            {currentUser && currentUser.isAdmin?(<>
            <li>
             <button style={{color:theme==="light"?"black":"white",fontSize:"18px",fontWeight:"normal"}} className='btn' onClick={() => dispatch(logoutUser())}>Logout</button>
             </li>
            </>):(<>
           <li>
            <Link to='/order' style={{color:theme==="light"?"black":"white"}} >Orders</Link>
            </li>
            <li>

            <button style={{color:theme==="light"?"black":"white",fontSize:"18px",fontWeight:"normal",paddingTop:"8px"}} className='btn hi' onClick={() => dispatch(logoutUser())}>Logout</button>
            </li>
           </>) }
           </>
           ):(<>
            <li> <Link to='/login' style={{color:theme==="light"?"black":"white",paddingRight:"10px"}} >Hi</Link></li>
            <li> <Link to='/register' style={{color:theme==="light"?"black":"white",paddingRight:"10px"}} >Register</Link></li>
            <li> <Link to='/login' style={{color:theme==="light"?"black":"white",paddingRight:"15px"}} >Login</Link></li>
           </>
            )
             }
             {currentUser && currentUser.isAdmin?(""):(
           <li> <Link to='/cart'><AiOutlineShoppingCart style={{width:"30px",height:"40px",color:theme==="light"?"black":"white"}} /><span style={{color:theme==="light"?"black":"white"}}>{cart?cart?.length:"0"}</span>
            </Link> </li>)}
          <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changetheme} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
</div>

        </ul>
        
    </div>
    </div>
  )
}

export default Navbar
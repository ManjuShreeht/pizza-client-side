import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "../styles/pizza.css";
import { addToCart ,getCart} from '../actions/cartAction';

const Pizzalist = ({pizza}) => {
  const { theme } = useSelector((state) => state.DarkReducer);
    const[quantity,setQuantity]=useState(1)
    const[varient,setvarient]=useState("small")

    const [show1, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate=useNavigate()
    const userdata=useSelector(state=>state.userLoginReducer)
    const {currentUser}=userdata
    
      
      const dispatch=useDispatch();
       
       
      const addtocart=()=>{
        if(currentUser){
        
        dispatch(addToCart(pizza,quantity,varient,currentUser))
        dispatch(getCart(currentUser));
        }else{
          toast.warning('please login to add cart')
          navigate('/login')
        }
      }
  return (
    <div  className={`p ${theme==='light'?"p-light":"p-dark"} `} 
    >
      <div >
        <h5   >{pizza.name}</h5>
        <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  
       <img src={pizza.image} alt="pizza"   />
           </button>
       </div>
        <div className='pizza-flex' >
       <div >
           <p >Varients:</p>
           <select   value={varient} onChange={(e)=>setvarient(e.target.value)}>

           {pizza?.varients.map(v=>{
              return <option value={v}>{v}</option> 
           })}
           </select>
       </div>
       <div >
       <p >Quantity:</p>
       <select  value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
               {[...Array(10).keys()].map((x , i)=>{
                   return <option value={i+1}>{i+1}</option>
               })}
         
           </select>
       </div>

     </div>
     <div className='pizza-flex'>
       <div >
           <h6  >Price :{pizza.prices[0][varient]*quantity} Rs/- </h6>
       </div>
       <div >
        <button   onClick={addtocart} >Add To Cart</button>
       </div>

     </div>

     <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">{pizza.title}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

       
       <div class="modal-body">
         <img src={pizza.image} style={{height:"350px"}} className="img-fluid" />
         <p style={{wordWrap:"break-word"}}>{pizza.description}</p>
              ...
         </div>

       <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
  </div>
  </div>
   </div>
   </div>
  )
}

export default Pizzalist